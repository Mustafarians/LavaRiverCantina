$(document).ready(function(){

    var item1But = document.getElementById("item1");
   
    item1But.addEventListener("click", function(){
        var foodname = "Tauntaun Steak";
        var quantity = document.getElementById("item1Quant").value;
        
            $.ajax({
                url:"/order1",
                type:"post",
                data:{
                    foodname:foodname,
                    quantity:quantity
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