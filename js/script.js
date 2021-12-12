var form = document.getElementById("myForm");

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

function getAkanName() {
    CC = getCentury();
    YY = getYear();
    MM = getMonth();
    DD = getDay();