$(document).ready(function(){

    var item1But = document.getElementById("item1");
   
    item1But.addEventListener("click", function(){
        var foodname = "Tauntaun Steak"
        
            $.ajax({
                url:"/order1",
                type:"post",
                data:{
                    foodname:foodname
                },
                success:function(resp){
                    if(resp.status == "success"){
                        location.href = "/"; 
                        console.log("order added");
                    } else if(resp.status == "fail"){
                        console.log("order failed");
                }
            }
        })
    });
});