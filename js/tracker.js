$(document).ready(function(){
    
    var orderplace = document.getElementById("order");
    
    setInterval(function(){
        $.ajax({
            url:"/getOrder",
            type:"post",
            success:function(resp){
                orderplace.innerHTML = "Order #: " +resp.orderNumber;
                console.log(resp.ordstate);
                document.getElementById("statusPart").innerHTML = resp.ordstate;
                if(resp.ordState == "Picked Up"){
                    document.getElementById("item1").disabled = true;
                } else {
                    document.getElementById("item1").disabled = false;   
                }
            }
        });
    }, 5000);
    
        document.getElementById("item1").addEventListener("click", function(){
            $.ajax({
            url:"/puOrder",
            type:"post",
            success:function(resp){
                document.getElementById("statusPart").innerHTML = resp.ordstate;
            }
        });
        });
});