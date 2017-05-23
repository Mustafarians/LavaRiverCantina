$(document).ready(function(){

    //Order Names
    var order1 = document.getElementById("ord1");
    var order2 = document.getElementById("ord2");
    var order3 = document.getElementById("ord3");
    var order4 = document.getElementById("ord4");
    var order5 = document.getElementById("ord5");
    var order6 = document.getElementById("ord6");
    
    //Order Foods
    var fd1 = document.getElementById("food1");
    var fd2 = document.getElementById("food2");
    var fd3 = document.getElementById("food3");
    var fd4 = document.getElementById("food4");
    var fd5 = document.getElementById("food5");
    var fd6 = document.getElementById("food6");
    
    //Cook Buttons
    var it1 = document.getElementById("item1");
    var it2 = document.getElementById("item2");
    var it3 = document.getElementById("item3");
    var it4 = document.getElementById("item4");
    var it5 = document.getElementById("item5");
    var it6 = document.getElementById("item6");
    
    var orders = {};
    
    //Query database for info to fill tables
    $.ajax({
        url:"/ordchek",
        type:"post",
        success:function(resp){
            
            //Loop through the items in the response
            for(var i = 0; i < resp.length; i++){
                if(!(resp[i].ordername in orders)){
                orders[resp[i].ordername] = [resp[i].itemnum, resp[i].quantity];
                } else {
                    orders[resp[i].ordername].push([resp[i].itemnum, resp[i].quantity]);
                }
            }
            
            //Write order #s to tables
            y = 0;
            console.log(orders);
            for(var i = 1; i < 7; i++){
                var ordNums = Object.keys(orders);
                var Title = "title" + String(i);
                document.getElementById(Title).innerHTML = "Order #" + String(ordNums[y]);
                if(String(ordNums[y]) == "undefined"){
                    document.getElementById(Title).innerHTML = "Waiting";
                }
                y = y + 1;
            }
            
            
        }
    });
    
    function cook(oName){
        for(i = 0; i < oName.length; i++){
            setTimeout(cook, 5000);
            oName[i].status = "Cooked";
            $.ajax({
                url:"/cooked",
                type:"post",
                data:
            })
        }
    };
    
    it1.addEventListener("click", function(){
        
    });
    
    
});