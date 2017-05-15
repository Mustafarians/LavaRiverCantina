$(document).ready(function(){

    var checkBut = document.getElementById("checkout");
    var item1But = document.getElementById("item1");
    var item2But = document.getElementById("item2");
    
    var OrderItems = [];
    var OrderItemsQuant = [];

    item1But.addEventListener("click", function(){
        OrderItems.push("Tauntaun Steak")
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
    });
    
    item2But.addEventListener("click", function(){
        OrderItems.push("Bantha Ribs")
        OrderItemsQuant.push(document.getElementById("item2Quant").value)
    });
    
    checkBut.addEventListener("click", function(){
        
            $.ajax({
                url:"/order66",
                type:"post",
                data:{
                    OrderItems:OrderItems,
                    OrderItemsQuant:OrderItemsQuant
                },
                success:function(resp){
                    if(resp.status == "success"){
                        location.href = "/tracker";   
                    } else if(resp.status == "fail"){
                        console.log("order failed");
                }
            }
        })
    });
});