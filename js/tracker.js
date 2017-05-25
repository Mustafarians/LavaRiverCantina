$(document).ready(function(){
    
    var orderplace = document.getElementById("order");
    
    setInterval(function(){
        $.ajax({
            url:"/getOrder",
            type:"post",
            success:function(resp){
                orderplace.innerHTML = "Order #: " +resp.orderNumber;
                document.getElementById("statusPart").innerHTML = "Ready For Pickup";
            }
        });
    }, 5000);
    
        document.getElementById("item1").addEventListener("click", function(){
            document.getElementById("statusPart").innerHTML = "Picked Up";
            alert("You have picked up your order.");
        });
});