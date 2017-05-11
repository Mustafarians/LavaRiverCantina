$(document).ready(function(){
    
    
    var loginBut = document.getElementById("loginBut");
   
    loginBut.addEventListener("click", function(){
    
        var uName = document.getElementById("uName").value;
        var passC = document.getElementById("passC").value;
            
            $.ajax({
                url:"/login",
                type:"post",
                data:{
                    passC:passC,
                    uName:uName
                },
                success:function(resp){
                
                    if(resp.status == "success"){
                        console.log("logged in");     
                    } else if(resp.status == "fail"){
                        console.log("login failed");
                }
            }
        })
    });
});