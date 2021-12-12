var form = document.getElementById("myForm");

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function getAkanName() {
    CC = getCentury();
    YY = getYear();
    MM = getMonth();
    DD = getDay();

    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    d = Math.trunc(d);

    if (getGender() == 1) {
        if (d == 0) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + male[0] + " because you were born a male on a Sunday.";
        } else if (d == 1) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + male[1] + " because you were born a male on a Monday.";
        } else if (d == 2) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + male[2] + " because you were born a male on a Tuesday.";
        } else if (d == 3) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + male[3] + " because you were born a male on a Wednesday.";
        } else if (d == 4) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + male[4] + " because you were born a male on a Thursday.";
        } else if (d == 5) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + male[5] + " because you were born a male on a Friday.";
        } else {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + male[6] + " because you were born a male on a Saturday.";
        }
    } else if (getGender() == 2) {
        if (d == 0) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + female[0] + " because you were born a female on a Sunday.";
        } else if (d == 1) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + female[1] + " because you were born a female on a Monday.";
        } else if (d == 2) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + female[2] + " because you were born a female on a Tuesday.";
        } else if (d == 3) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + female[3] + " because you were born on a female a Wednesday.";
        } else if (d == 4) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + female[4] + " because you were born a female on a Thursday.";
        } else if (d == 5) {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + female[5] + " because you were born a female on a Friday.";
        } else {
            document.getElementById("output").innerHTML = "Hey your Akan name is " + female[6] + " because you were born a female on a Saturday.";
        }

    }
}

function getYear() {
    let yearOfBirth = document.getElementById("year-input").value;
    var yy = yearOfBirth.slice(2, 4)
    var yr = parseInt(yy);
    return yr;
}

function getCentury() {
    let yearOfBirth = document.getElementById("year-input").value;
    var cc = yearOfBirth.slice(0, 2)
    var CC = parseInt(cc);
    return CC;
}

function getMonth() {
    let monthOfBirth = document.getElementById("month-of-birth").value;
    return monthOfBirth;

}

function getDay() {
    let dayOfBirth = document.getElementById("day-input").value;
    var day = parseInt(dayOfBirth);
    if (day > 0 && day < 31) {
        return day;

    } else {
        alert("Invalid date")
    }

}