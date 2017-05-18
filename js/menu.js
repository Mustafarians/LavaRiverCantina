$(document).ready(function(){

//    var checkBut = document.getElementById("checkout");
    var item1But = document.getElementById("item1");
    var item2But = document.getElementById("item2");
    
    var FoodItems = ["Tauntaun Steak", "Bantha Brisket", "Nerf Burger", "Womp Rat Ribs", "Lava Flea Legs", "Meatlump", "Churro", "Cracknel", "Banzon", "Exonium", "Drapsha", "Food Pearls", "Lamito", "Mallow", "Firkrann Fries", "Selkath Salad", "Grainmush", "Blue Milkshakes", "Corellian Ale", "Turbofizz", "Twin Suns Special"];
    
    var OrderItems = [];
    var OrderItemsQuant = [];
    
    var item = 0;
    var sum = 0;
    
    var QuantChek = /^[1-6]$/;
    
    function Chek(mate, oItem) {
        if(QuantChek.test(document.getElementById(mate).value) == true){
            var Num = 0;
            if(OrderItems.indexOf(FoodItems[oItem]) > -1){
                item = OrderItems.indexOf(FoodItems[oItem]);
                Num = OrderItemsQuant[item];
            }
            sum = parseInt(document.getElementById(mate).value);
            for(i = 0; i < OrderItemsQuant.length; i++){
                sum = sum + parseInt(OrderItemsQuant[i]);
            }
            sum = sum - Num;
            console.log(sum);
            if(sum < 11){
                if(OrderItems.indexOf(FoodItems[oItem]) > -1){
                    OrderItemsQuant[item] = document.getElementById(mate).value;
                } else {
                    OrderItems.push(FoodItems[oItem]);
                    OrderItemsQuant.push(document.getElementById(mate).value)
                }
            }
            console.log(OrderItems);
            console.log(OrderItemsQuant);
        }
        sum = 0;
    }

    item1But.addEventListener("click", function(){
    Chek("item1Quant", 0);
    });
    
    item2But.addEventListener("click", function(){
        Chek("item2Quant", 1)
    });
    
//    item3But.addEventListener("click", function(){
//        Chek("item3Quant", 2)
//    });
//    
//    item4But.addEventListener("click", function(){
//        Chek("item4Quant", 3)
//    });
//    
//    item5But.addEventListener("click", function(){
//        Chek("item5Quant", 4)
//    });
//    
//    item6But.addEventListener("click", function(){
//        Chek("item6Quant", 5)
//    });
//    
//    item7But.addEventListener("click", function(){
//        Chek("item7Quant", 6)
//    });
//    
//    item8But.addEventListener("click", function(){
//        Chek("item8Quant", 7)
//    });
//    
//    item9But.addEventListener("click", function(){
//        Chek("item9Quant", 8)
//    });
//    
//    item10But.addEventListener("click", function(){
//        Chek("item10Quant", 9)
//    });
//    
//    item11But.addEventListener("click", function(){
//        Chek("item11Quant", 10)
//    });
//    
//    item12But.addEventListener("click", function(){
//        Chek("item12Quant", 11)
//    });
//    
//    item13But.addEventListener("click", function(){
//        Chek("item13Quant", 12)
//    });
//    
//    item14But.addEventListener("click", function(){
//        Chek("item14Quant", 13)
//    });
//    
//    item15But.addEventListener("click", function(){
//        Chek("item15Quant", 14)
//    });
//    
//    item16But.addEventListener("click", function(){
//        Chek("item16Quant", 15)
//    });
//    
//    item17But.addEventListener("click", function(){
//        Chek("item17Quant", 16)
//    });
//    
//    item18But.addEventListener("click", function(){
//        Chek("item18Quant", 17)
//    });
//    
//    item19But.addEventListener("click", function(){
//        Chek("item19Quant", 18)
//    });
//    
//    item20But.addEventListener("click", function(){
//        Chek("item20Quant", 19)
//    });
//    
//    item21But.addEventListener("click", function(){
//        Chek("item21Quant", 20)
//    });
//    
//    checkBut.addEventListener("click", function(){
//         if(OrderItems.length > 0){
//            $.ajax({
//                url:"/order66",
//                type:"post",
//                data:{
//                    OrderItems:OrderItems,
//                    OrderItemsQuant:OrderItemsQuant
//                },
//                success:function(resp){
//                    if(resp.status == "success"){
//                        location.href = "/tracker";   
//                    } else if(resp.status == "fail"){
//                        console.log("order failed");
//                }
//            }
//        })
//         }
//    });
});