var opBut = document.getElementById("openBut"),
    cloBut = document.getElementById("closeBut"),
    ordshow = document.getElementById("ordInfo"),
    menshow = document.getElementById("menInfo"),
    limshow = document.getElementById("limInfo");

var ordBut = document.getElementById("ordInfo"),
    menBut = document.getElementById("menInfo"),
    limBut = document.getElementById("limInfo"),

ordshow.addEventListener("click", function(){
    document.getElementById("orderbox").style.display = "inline-block";
});

menshow.addEventListener("click", function(){
    document.getElementById("menubox").style.display = "inline-block";
});

limshow.addEventListener("click", function(){
    document.getElementById("limitbox").style.display = "inline-block";
});

$(document).ready(function() {
    ordBut.addEventListener("click", function(){
        var clearBut = document.getElementById("clrBut");

        $.ajax({
            url:"",
            type:"",
            data:{},
            success:function (resp){
            }
        });
    });

    menBut.addEventListener("click", function(){
        var menusubBut = document.getElementById("mensubBut");

        $.ajax({
            url:"",
            type:"",
            data:{},
            success:function(resp){
            }
        });
    });

    limBut.addEventListener("click", function(){
        var lumsubBut = document.getElementById("limsubBut");

        $.ajax({
            url:"",
            type:"",
            data:{},
            success:function(resp){
            }
        });
    });
})