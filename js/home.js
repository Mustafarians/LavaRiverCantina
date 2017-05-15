$(document).ready(function(){
    
    var loginBut = document.getElementById("2login");
    var menuBut = document.getElementById("2menu");
   
    loginBut.addEventListener("click", function(){
        location.href = "/login";       
    });
    
    menuBut.addEventListener("click", function(){
        location.href = "/menu";   
    });
});