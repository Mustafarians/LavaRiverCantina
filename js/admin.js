//Buttons for showing divs
var opBut = document.getElementById("openBut"),
    cloBut = document.getElementById("closeBut"),
    ordshow = document.getElementById("ordInfo"),
    menshow = document.getElementById("menInfo"),
    limshow = document.getElementById("limInfo"),
    proshow = document.getElementById("profit");

//Buttons for executing commands
var ordBut = document.getElementById("ordInfo"),
    menBut = document.getElementById("menInfo"),
    limBut = document.getElementById("limsub"),
    clearBut = document.getElementById("clr"),
    mensubBut = document.getElementById("mensub"),
    profBut = document.getElementById("profit");

//Functions for on click to show divs
ordshow.addEventListener("click", function(){
    document.getElementById("orderbox").style.display = "inline-block";
});

menshow.addEventListener("click", function(){
    document.getElementById("menubox").style.display = "inline-block";
});

limshow.addEventListener("click", function(){
    document.getElementById("limitbox").style.display = "inline-block";
});

proshow.addEventListener("click", function(){
    document.getElementById("profitbox").style.display = "inline-block";
});

//Functions for filling in tables
$(document).ready(function() {
    //Opens Store for business
    opBut.addEventListener("click", function(){
        $.ajax({
            url:"/openStore",
            type:"post",
            data: {
                storestatus:"YES"
            },
            success:function(res){
                alert("Store is OPEN")
            }
        });
    });

    //Closes Store for business
    cloBut.addEventListener("click", function(){
        $.ajax({
            url:"/closeStore",
            type:"post",
            data: {
                storestatus:"NO"
            },
            success:function(res){
                alert("Store is CLOSED")
            }
        });
    });

    //Fills orders table with daily orders
    ordBut.addEventListener("click", function() {

        var orderBody = document.getElementById("orderbod");
        var fill = "";

        $.ajax({
            url: "/order",
            type: "post",
            success:function(res){
                for (var i = 0; i < res.length; i++) {

                    var orderNum = res[i].ordernum;
                    var itemNum = res[i].itemnum;
                    var orderName = res[i].ordername;
                    var qty = res[i].quantity;
                    var stat = res[i].status;

                    fill = fill + "<tr><td>" + orderNum + "<td>" + itemNum + "<td>" + orderName + "<td>" + qty + "<td>" + stat + "<td><tr>";
                }
                orderBody.innerHTML = fill;
            }
        });
    });

    //Clears the Orders table in the database
    clearBut.addEventListener("click", function(){
        $.ajax({
            url:"/clrOrder",
            type:"post",
            success:function(){
                alert("Order database cleared");
                location.reload();
            }
        });
    });

    //Loads all menu items into table
    menBut.addEventListener("click", function() {

        var menuBody = document.getElementById("menubod");
        var fill = "";

        $.ajax({
            url: "/menu",
            type: "post",
            success:function(res){
                for (var i = 0; i < res.length; i++) {

                    var itemNum = res[i].itemnum;
                    var itemNam = res[i].foodname;
                    var itemPrice = res[i].price;

                    fill = fill + "<tr><td>" + itemNum + "<td>" + itemNam + "<td>" + itemPrice + "<td><tr>";
                }
                menuBody.innerHTML = fill;
            }
        });
    });

    //Changes the price in the database
    mensubBut.addEventListener("click", function(){
        var name = document.getElementById("itemName").value,
            price = document.getElementById("priceChange").value;

        $.ajax({
            url: "/menuChange",
            type: "post",
            data:{
                itemName:name,
                itemPrice:price
            },
            success:function(res){
                if(res.status == "success"){
                    alert(res.msg);
                }else if(res.status == "fail"){
                    alert(res.msg);
                }
                location.reload();
            }
        });
    });

    //Allows client order limits
    limBut.addEventListener("click", function(){

        var newLim = document.getElementById("ordqtychange").value;

        $.ajax({

            url:"/qtChange",
            type:"post",
            data: {
                limitvar : newLim
            },
            success:function(res){
                alert("Order limits changed!");
                location.reload();
            }
        })
    });

    //Items from orders are listed in table and total profit is calculated
    profBut.addEventListener("click", function(){
        var profbod = document.getElementById("profitbod");
        var proftot = document.getElementById("profitTot");

        var fill = "";
        var profTotal = 0;

        $.ajax({
            url: "/profit",
            type: "post",
            success:function(res){
                for (var i = 0; i < res.length; i++) {

                    var proAmt = res[i].amount;
                    var proDate = res[i].date;
                    var proTime = res[i].time;

                    profTotal = profTotal + parseInt(proAmt);

                    fill = fill + "<tr><td>" + proAmt + "<td>" + proDate.substr(0,10) + "<td>" + proTime.substr(0,8) + "<td><tr>";
                }
                profbod.innerHTML = fill;
                proftot.innerHTML = "$ " + profTotal
            }
        });
    });
});