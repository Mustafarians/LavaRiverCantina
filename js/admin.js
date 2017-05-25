$(document).ready(function () {

    var opBut = document.getElementById("openBut"),
        cloBut = document.getElementById("closeBut"),
        orderBut = document.getElementById("ordInfo"),
        menuBut = document.getElementById("editMenu"),
        limBut = document.getElementById("limitBut");

    var limitDiv = document.getElementById("limitbox"),
        orderDiv = document.getElementById("orderdata"),
        menuDiv = document.getElementById("menudata");

    opBut.addEventListener("click", function () {
    });

    cloBut.addEventListener("click", function () {
    });

    orderBut.addEventListener("click", function () {
        orderDiv.style.display = "inline-block"
    });

    menuBut.addEventListener("click", function () {
        menuDiv.style.visibility = "visible"
    });

    limBut.addEventListener("click", function () {
        limitDiv.visibility("visible");
    });
})