$(document).ready(function(){

    var checkBut = document.getElementById("checkout");
    var item1But = document.getElementById("item1");
    var item2But = document.getElementById("item2");
    
    var FoodItems = ["Tauntaun Steak", "Bantha Brisket", "Nerf Burger", "Womp Rat Ribs", "Lava Flea Legs", "Meatlump", "Churro", "Cracknel", "Banzon", "Exonium", "Drapsha", "Food Pearls", "Lamito", "Mallow", "Firkrann Fries", "Selkath Salad", "Grainmush", "Blue Milkshakes", "Corellian Ale", "Turbofizz", "Twin Suns Special"];
    
    var QuantChek = "/^[0-6]$/";
    
    var ChekRes = QuantChek.test()
    
    var OrderItems = [];
    var OrderItemsQuant = [];
    
    var item = 0;

    item1But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[0]) > -1){
            item = OrderItems.indexOf(FoodItems[0]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[0]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item2But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[1]) > -1){
            item = OrderItems.indexOf(FoodItems[1]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[1]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item3But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[2]) > -1){
            item = OrderItems.indexOf(FoodItems[2]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[2]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item4But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[3]) > -1){
            item = OrderItems.indexOf(FoodItems[3]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[3]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item5But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[4]) > -1){
            item = OrderItems.indexOf(FoodItems[4]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[4]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item6But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[5]) > -1){
            item = OrderItems.indexOf(FoodItems[5]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[5]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item7But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[6]) > -1){
            item = OrderItems.indexOf(FoodItems[6]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[6]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item8But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[7]) > -1){
            item = OrderItems.indexOf(FoodItems[7]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[7]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item9But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[8]) > -1){
            item = OrderItems.indexOf(FoodItems[8]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[8]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item10But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[9]) > -1){
            item = OrderItems.indexOf(FoodItems[9]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[9]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item11But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[10]) > -1){
            item = OrderItems.indexOf(FoodItems[10]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[10]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item12But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[11]) > -1){
            item = OrderItems.indexOf(FoodItems[11]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[11]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item13But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[12]) > -1){
            item = OrderItems.indexOf(FoodItems[12]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[12]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item14But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[13]) > -1){
            item = OrderItems.indexOf(FoodItems[13]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[13]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item15But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[14]) > -1){
            item = OrderItems.indexOf(FoodItems[14]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[14]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item16But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[15]) > -1){
            item = OrderItems.indexOf(FoodItems[15]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[15]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item17But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[16]) > -1){
            item = OrderItems.indexOf(FoodItems[16]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[16]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item18But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[17]) > -1){
            item = OrderItems.indexOf(FoodItems[17]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[17]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item19But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[18]) > -1){
            item = OrderItems.indexOf(FoodItems[18]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[18]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item20But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[19]) > -1){
            item = OrderItems.indexOf(FoodItems[19]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[19]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
    });
    
    item21But.addEventListener("click", function(){
        if(OrderItems.indexOf(FoodItems[20]) > -1){
            item = OrderItems.indexOf(FoodItems[20]);
            OrderItemsQuant[item] = document.getElementById("item1Quant").value;
        } else {
        OrderItems.push(FoodItems[20]);
        OrderItemsQuant.push(document.getElementById("item1Quant").value)
        }
        console.log(OrderItems);
        console.log(OrderItemsQuant);
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