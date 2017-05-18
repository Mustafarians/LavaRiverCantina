$(document).ready(function(){
    
    var fill1 = document.getElementById("fill1");
    var fill2 = document.getElementById("fill2");
    var OrderItems = [];
    var OrderItemsQuant = [];
    var price = [];
    var foodname = [];
    
    var fill1Filler = "";
    var fill2Filler = "";
    
    $.ajax({
                url:"/cartFill",
                type:"post",
                success:function(resp){
                    if(resp.status == "success"){
                        OrderItems = resp.OrderItems;
                        OrderItemsQuant = resp.OrderItemsQuant;
                        price = resp.price;
                        foodname = resp.foodname;
                    } else if(resp.status == "fail"){
                        console.log("order failed");
                }
            }
        })
    
    for(i = 0; i < OrderItems.length; i++){
        fill1Filler = fill1Filler + "<td>" + OrderItems[i] + "<td><td>" + OrderItemsQuant[i] + "<td><td>" + toString(parseInt(price[i]) * parseInt(OrderItemsQuant[i])) + "<td>"
    }
    fill1Filler = "<tr>" + fill1Filler + "<tr>";
    fill1.innerHTML = fill1Filler;
});