$(document).ready(function(){
    
    var fill1 = document.getElementById("cartBody");
    var sub = document.getElementById("sub");
    var tax = document.getElementById("tax");
    var total = document.getElementById("total");
    var subBut = document.getElementById("submitBut");
    var OrderItems = [];
    var OrderItemsQuant = [];
    var price = [];
    
    var fill1Filler = "";
    
    subBut.addEventListener("click", function(){
         if(OrderItems.length > 0){
             var priceArray = [];
             for(i = 0; i < OrderItems.length; i++){
                 var totalprice = parseInt(price[i]) * parseInt(OrderItemsQuant[i])
                 priceArray.push(totalprice);
             }
            $.ajax({
                url:"/order66",
                type:"post",
                data:{
                    priceArray:priceArray
                },
                success:function(resp){
                    if(resp.status == "success"){
                        var oNum = document.createElement("div");
                        oNum.innerHTML = "Your order number is: " + resp.oName;
                        location.href = "/tracker";   
                    } else if(resp.status == "fail"){
                        console.log("order failed");
                }
            }
        })
         }
    });

    $.ajax({
        url:"/cartFill",
        type:"post",
        success:function(resp){
            if(resp.status == "success"){
                var totalestprice = 0;
                OrderItems = resp.OrderItems;
                OrderItemsQuant = resp.OrderItemsQuant;
                price = resp.price;
                for(i = 0; i < OrderItems.length; i++){
                    var totalprice = parseInt(price[i]) * parseInt(OrderItemsQuant[i])
                    totalestprice = parseFloat(totalprice) + parseFloat(totalestprice);
                    fill1Filler = fill1Filler + "<tr><td>" + OrderItems[i] + "<td>" + OrderItemsQuant[i] + "<td>$" + totalprice + "<td><tr>"
                }
                fill1.innerHTML = fill1Filler;
                sub.innerHTML = "Sub-Total: $" + totalestprice;
                tax.innerHTML = "Imperial Tax: $" + (totalestprice * 0.25);
                total.innerHTML = "Total: $" + ((totalestprice * 0.25) + totalestprice);
            } else if(resp.status == "fail"){
                console.log("order failed");
            }
        }
    })
}); 