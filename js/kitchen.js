$(document).ready(function(){
    console.log("ready");
    
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
                
                var ordTitle = resp[i].ordername;
                
                if(!(ordTitle in orders)){
                    orders[ordTitle] = [[resp[i].itemnum, resp[i].quantity]];
                } else {
                    orders[ordTitle].push([resp[i].itemnum, resp[i].quantity]);
                }
                
            }
            
            //Fill in table names
            var z = 1;
            for(var y = 0; y < Object.keys(orders).length; y++){
                if(z < 7){
                    var Title = "title" + String(z);
                    document.getElementById(Title).innerHTML = "Order #" + String(Object.keys(orders)[y]);
                    z = z + 1;
                }
            }
            
            //Fill in food numbers and quantities
            z = 1;
            for(var y = 0; y < Object.keys(orders).length; y++){
                var Food = "food" + String(z);
                for(var x = 0; x < Object.values(orders)[y].length; x++){
                    var itmNum = String(Object.values(orders)[y][x][0]);
                    var itmQnt = String(Object.values(orders)[y][x][1]);
                
                    if(!(document.getElementById(Food) == "")){
                        document.getElementById(Food).innerHTML = document.getElementById(Food).innerHTML + "<br>Item #: " + itmNum + "   Quantity: " + itmQnt;
                    } else {
                        document.getElementById(Food).innerHTML = "Item #: " + itmNum + " Quantity: " + itmQnt;
                    }
                }
                z = z + 1;
            }
        }
      
    });
    
    //Cooking Function
    function cook(Order){
        
    }
    
    
});