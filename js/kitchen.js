$(document).ready(function(){
    console.log("ready");
    
    //Cook Buttons
    var it1 = document.getElementById("item1");
    var it2 = document.getElementById("item2");
    var it3 = document.getElementById("item3");
    var it4 = document.getElementById("item4");
    var it5 = document.getElementById("item5");
    var it6 = document.getElementById("item6");
    
    it1.disabled = false;
    it2.disabled = false;
    it3.disabled = false;
    it4.disabled = false;
    it5.disabled = false;
    it6.disabled = false;
    
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
            var fd = 1;
            for(var y = 0; y < Object.keys(orders).length; y++){
                var Food = "food" + String(fd);
                for(var x = 0; x < Object.values(orders)[y].length; x++){
                    var itmNum = String(Object.values(orders)[y][x][0]);
                    var itmQnt = String(Object.values(orders)[y][x][1]);
                    if(fd < 7){
                        if(!(document.getElementById(Food) == "")){
                            document.getElementById(Food).innerHTML = document.getElementById(Food).innerHTML + "<br>Item #: " + itmNum + "   Quantity: " + itmQnt;
                        } else {
                            document.getElementById(Food).innerHTML = "Item #: " + itmNum + " Quantity: " + itmQnt;
                        }
                    }
                }
                fd = fd + 1;
            }
        }
      
    });
    
    //Function for preparing order
    function cooking(Order, Table) {
        var ordNumb = parseInt(Order);
        var fillTable = "Status" + Table;
        document.getElementById(fillTable).innerHTML = "<h3>COOKING...</h3>"
                var cookTime = 0;
                for(var i = 0; i < Object.values(orders[ordNumb]).length; i++){
                    var cooking = parseInt(Object.values(orders[ordNumb])[i][1]);
                    switch(cooking) {
                        case 1: cookTime = parseInt(cookTime) + 5000
                                break;
                        case 2: cookTime = parseInt(cookTime) + 5000
                                break;
                        case 3: cookTime = parseInt(cookTime) + 10000
                                break;
                        case 4: cookTime = parseInt(cookTime) + 10000
                                break;
                        case 5: cookTime = parseInt(cookTime) + 15000
                                break;
                        case 6: cookTime = parseInt(cookTime) + 5000
                                break;
                        default: cookTime = parseInt(cookTime) * 5000
                                break;
                    }
                console.log(cooking);
            }
        
            $.ajax({
                url:"/cooked",
                type:"post",
                data: {
                    ordNumber:Order
                },
                success:function(resp){
                    setTimeout(function() {
                        alert("Order #" + String(Order) + " is ready!");
                        location.reload();
                    }, cookTime);
                }
            });
    };
    
    //Button functions
    
    it1.addEventListener("click", function(req, resp){
        it2.disabled = true;
        it3.disabled = true;
        it4.disabled = true;
        it5.disabled = true;
        it6.disabled = true;
        var currTitle = String(document.getElementById("title1").innerHTML);
        var currOrd = currTitle.substring(currTitle.indexOf("#") + 1);
        cooking(currOrd, 1);
    });
    
    it2.addEventListener("click", function(req, resp){
        it1.disabled = true;
        it3.disabled = true;
        it4.disabled = true;
        it5.disabled = true;
        it6.disabled = true;
        var currTitle = String(document.getElementById("title2").innerHTML);
        var currOrd = currTitle.substring(currTitle.indexOf("#") + 1);
        cooking(currOrd, 2);
    });
    
    it3.addEventListener("click", function(req, resp){
        it2.disabled = true;
        it1.disabled = true;
        it4.disabled = true;
        it5.disabled = true;
        it6.disabled = true;
        var currTitle = String(document.getElementById("title3").innerHTML);
        var currOrd = currTitle.substring(currTitle.indexOf("#") + 1);
        cooking(currOrd, 3);
    });
    
    it4.addEventListener("click", function(req, resp){
        it2.disabled = true;
        it3.disabled = true;
        it1.disabled = true;
        it5.disabled = true;
        it6.disabled = true;
        var currTitle = String(document.getElementById("title4").innerHTML);
        var currOrd = currTitle.substring(currTitle.indexOf("#") + 1);
        cooking(currOrd, 4);
    });
    
    it5.addEventListener("click", function(req, resp){
        it2.disabled = true;
        it3.disabled = true;
        it4.disabled = true;
        it1.disabled = true;
        it6.disabled = true;
        var currTitle = String(document.getElementById("title5").innerHTML);
        var currOrd = currTitle.substring(currTitle.indexOf("#") + 1);
        cooking(currOrd, 5);
    });
    
    it6.addEventListener("click", function(req, resp){
        it2.disabled = true;
        it3.disabled = true;
        it4.disabled = true;
        it5.disabled = true;
        it1.disabled = true;
        var currTitle = String(document.getElementById("title6").innerHTML);
        var currOrd = currTitle.substring(currTitle.indexOf("#") + 1);
        cooking(currOrd, 6);
    });
});