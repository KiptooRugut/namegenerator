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