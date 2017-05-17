$(document).ready(function(){

    var checkBut = document.getElementById("checkout");
    var item1But = document.getElementById("item1");
    var item2But = document.getElementById("item2");
    
    var FoodItems = ["Tauntaun Steak", "Bantha Brisket", "Nerf Burger", "Womp Rat Ribs", "Lava Flea Legs", "Meatlump", "Churro", "Cracknel", "Banzon", "Exonium", "Drapsha", "Food Pearls", "Lamito", "Mallow", "Firkrann Fries", "Selkath Salad", "Grainmush", "Blue Milkshakes", "Corellian Ale", "Turbofizz", "Twin Suns Special"];
    
    var OrderItems = [];
    var OrderItemsQuant = [];
    
    var item = 0;
    
    var regEx = /^[0-6]{0,1}$/; //regular expression
    
    function Chek(mate, oItem) {
        if(regEx.test(document.getElementById(mate).value) == true){
            if(OrderItems.indexOf(FoodItems[oItem]) > -1){
                item = OrderItems.indexOf(FoodItems[oItem]);
                OrderItemsQuant[item] = document.getElementById(mate).value;
            } else {
                OrderItems.push(FoodItems[oItem]);
                OrderItemsQuant.push(document.getElementById(mate).value)
            }
        }
    }
    
    item1But.addEventListener("click", function(){
    Chek("item1Quant", 0);
    });
    
    item2But.addEventListener("click", function(){
        Chek("item2Quant", 1)
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