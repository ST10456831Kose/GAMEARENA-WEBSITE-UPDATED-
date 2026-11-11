script.js
function toggleMenu() {

    document
        .querySelector("nav")
        .classList
        .toggle("show");

}


/* PRICE CALCULATOR */

function calculatePrice(event) {

    event.preventDefault();


    const rate =
        Number(
            document.getElementById("calcPackage").value
        );


    const people =
        Number(
            document.getElementById("people").value
        );


    const hours =
        Number(
            document.getElementById("hours").value
        );


    const total =
        rate * people * hours;


    document.getElementById("total").textContent =
        "R" + total.toLocaleString("en-ZA");


    document.getElementById("calculationText").textContent =
        people +
        " person(s) × " +
        hours +
        " hour(s) = estimated total.";

}


/* BOOKING FORM */

function submitBooking(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const packageName =
        document.getElementById("bookingPackage").value;


    document.getElementById("formMessage").textContent =
        "Thank you, " +
        name +
        "! Your " +
        packageName +
        " booking request has been received.";


    document
        .getElementById("bookingForm")
        .reset();

}