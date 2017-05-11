$(document).ready(function(){
    console.log(js);
    var shoLog = document.getElementById("showLog");
    
    shoLog.addEventListener("click", function(){
        var logBox = document.getElementById("logBox");
        console.log("WORK");
        logBox.style.display = "inline-block";
        logBox.style.height = "300px";
        logBox.style.width = "600px";
        logBox.style.backgroundColor = "#BBB";
    })
});