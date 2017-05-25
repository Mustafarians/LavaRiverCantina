//require all modules
const express = require("express");
const port = process.env.PORT || 10000;
const path = require("path");

const bp = require("body-parser");
const session = require("express-session");

//start server
var app = express();
var server = require("http").createServer(app);

//Setup settings for db, server, and folders
var pub = path.resolve(__dirname, "public");
var io = require("socket.io")(server);
const pg = require("pg");
var dbURL = process.env.DATABASE_URL || "postgres://postgres:starwars7@localhost:5432/test1";
var orderName = 0;

//redirect /scripts to build folder
app.use("/scripts", express.static("build"));

//images
app.use("/styles", express.static("stylesheets"));

//redirect /imgs to img folder
app.use("/images", express.static("img"));

//body parser setting
app.use(bp.urlencoded({
    extended: true
}));

//session settings
app.use(session({
    secret:"meow",
    resave: true,
    saveUninitialized: true
}));

app.get("/", function(req, res){
        res.sendFile(pub+"/home.html");
});

app.get("/adminn", function(req, res){
    res.sendFile(pub+"/admin.html");
});

app.get("/authoritylevel", function(req, res){
    if(req.session.level == 1){
        res.sendFile(pub+"/kitchen.html");
    } else if (req.session.level == 2){
        res.sendFile(pub+"/admin.html");
    } else {
        res.sendFile(pub+"/home.html");
    }
});

app.get("/admin", function(req, res){
    if(req.session.level == 2){
        res.sendFile(pub+"/admin.html");
    } else {
        res.sendFile(pub+"/home.html");
    }
});

app.get("/kitchen", function(req,res){
//    if(req.session.level == 1){
        res.sendFile(pub+"/kitchen.html");
//    } else if (req.session.level == 2){
//        res.sendFile(pub+"/kitchen.html");
//    } else {
//        res.sendFile(pub+"/home.html");
//    }
})

app.get("/loginn", function(req, res){
    res.sendFile(pub+"/login.html");
});

app.get("/menu", function(req, res){
    res.sendFile(pub + "/menu.html");
});

app.get("/cart", function(req,res){
    res.sendFile(pub+"/cart.html");
});

app.get("/tracker", function(req,res){
    res.sendFile(pub+"/tracker.html");
});

io.on("connection", function(socket){

    socket.on("disconnect", function(){
        //when the user leaves my html, they "disconnect" by closing the connection
    });
});

app.post("/login", function(req, resp){
    var passC = req.body.passC;
    var uName = req.body.uName;
    pg.connect(dbURL, function(err, client, done){
        if(err){
            console.log(err);
            resp.end("FAIL");
        }
            client.query("SELECT * FROM staff WHERE passcode = $1 AND empid = $2", [passC, uName], function(err, result){
            done();
            if(err){
                console.log(err);
                resp.end("FAIL");
            }
            if(result.rows.length > 0){
                req.session.level = result.rows[0].level;
                
                var obj = {
                    status:"success",
                    level:result.rows[0].level
                }
                
                resp.send(obj);
            } else {
                console.log("err1");
                resp.end("FAIL");
            }
        })
        })
    
});

var storeStatus = "true";
app.post("/storing", function(req, resp){
    req.session.items = req.body.OrderItems;
    req.session.quant = req.body.OrderItemsQuant;

    if(storeStatus == "true") {
        var obj = {
            status: "success"
        }
    } else {
        var obj = {
            status: "closed"
        }
    }
    resp.send(obj);
})

app.post("/cartFill", function(req, resp){
    var OrderItems = req.session.items;
    var OrderItemsQuant = req.session.quant;
    var price = [];
    
    pg.connect(dbURL, function(err, client, done){
        if(err){
            console.log(err);
            console.log("1");
            resp.end("FAIL");
        }
        if(OrderItems) {
            for (i = 0; i < OrderItems.length; i++) {

                (function (index) {
                    client.query("SELECT * FROM menu WHERE foodname = $1", [OrderItems[index]], function (err, result) {
                        done();
                        if (err) {
                            console.log(err);
                            console.log("2");
                            resp.end("FAIL");
                        }
                        if (result.rows.length > 0) {
                            price.push(result.rows[0].price)
                        } else {
                            resp.end("FAIL");
                            console.log("3");
                        }
                        if (index == OrderItems.length - 1) {
                            var obj = {
                                status: "success",
                                OrderItems: OrderItems,
                                price: price,
                                OrderItemsQuant: OrderItemsQuant
                            }
                            resp.send(obj);
                        }
                    })
                })(i)
            }
        }
    })
})

app.post("/order66", function(req, resp){
    var OrderItems = req.session.items;
    var OrderItemsQuant = req.session.quant;
    var priceArray = req.body.priceArray;
    
    pg.connect(dbURL, function(err, client, done){
        if(err){
            console.log(err);
            resp.end("FAIL");
        }
        
        for(i = 0; i < OrderItems.length; i++){
         (function(index) {client.query("SELECT * FROM menu WHERE foodname = $1", [OrderItems[index]], function(err, result){
            done();
            if(err){
                console.log(err);
                resp.end("FAIL");
            }
            if(result.rows.length > 0){
                    client.query("INSERT INTO orders (itemnum, quantity, ordername, status) VALUES ($1, $2, $3, $4)", [result.rows[0].itemnum, OrderItemsQuant[index], orderName, "Processing"], function(err, result){
                        done();
                        if(err){
                            console.log(err);
                            resp.end("FAIL");
                        }
                    });
                    client.query("INSERT INTO profit(amount) VALUES ($1)", [priceArray[index]], function(err, result) {
                        done();
                        if (err) {
                            console.log(err);
                            resp.end("FAIL");
                        }
                    });
            } else {
                console.log("err1");
                resp.end("FAIL");
            }     
        })   
    }) (i);
        }
        orderName++;
        var obj = {
                status:"success",
                oName:orderName
                }
            resp.send(obj);
        })
})

app.post("/ordchek", function(req, res){
    pg.connect(dbURL, function(err, client, done){
        if(err){
            console.log(err);
            res.end("FAIL");
        }
        client.query("SELECT * FROM orders WHERE status = 'Processing' ORDER BY ordername ASC", [], function(err, result){
            done();
            if(err){
                console.log(err);
                res.send({status:"fail"});
            }
            
            res.send(result.rows);
            });
        });
});

app.post("/order", function(req, res){
    pg.connect(dbURL, function(err, client, done){
        if(err){
            console.log(err);
            res.end("FAIL");
        }
        client.query("SELECT * FROM orders ORDER BY status", [], function(err, result){
            done();
            if(err){
                console.log(err);
                res.send({status:"fail"});
            }

            res.send(result.rows);
        });
    });
});

app.post("/clrOrder", function(req, res) {
    pg.connect(dbURL, function (err, client, done) {
        if (err) {
            console.log(err);
            res.end("FAIL");
        }
        client.query("DELETE from orders *", function (err) {
            done();
            if (err) {
                console.log(err);
                res.send({status: "fail"});
            }
            res.send({status: "success"});
        });
    });
});

app.post("/menu", function(req, res){
    pg.connect(dbURL, function(err, client, done){
        if(err){
            console.log(err);
            res.end("FAIL");
        }
        client.query("SELECT * FROM menu", [], function(err, result){
            done();
            if(err){
                console.log(err);
                res.send({status:"fail"});
            }

            res.send(result.rows);
        });
    });
});

app.post("/menuChange", function(req, res){
    var itemName = req.body.itemName;
    var itemPrice = req.body.itemPrice;

    pg.connect(dbURL, function(err, client, done){
        if(err){
            console.log(err);
            res.end("FAIL");
        }
        client.query("UPDATE menu SET price = $2 WHERE foodname = $1", [itemName, itemPrice], function(err){
            done();
            if(err){
                console.log(err);
                res.send({
                    status:"fail",
                    msg:"There was an Error, please try again"
                });
            }
            res.send({
                status:"success",
                msg:"Price has been Updated"
            })
        });
    });
});

app.post("/profit", function(req, res){
    pg.connect(dbURL, function(err, client, done){
        if(err){
            console.log(err);
            res.end("FAIL");
        }
        client.query("SELECT * FROM profit", [], function(err, result){
            done();
            if(err){
                console.log(err);
                res.send({status:"fail"});
            }
            res.send(result.rows);
        });
    });
});

var ordLimit = 11;
app.post("/qtChange", function(req, res){
    var limEx = /^[0-9]{1,3}$/;
    var newLim = req.body.limitvar;
    if(limEx.test(newLim) == true) {
        ordLimit = parseInt(newLim) + 1;
        res.send({status: "success"});
    }
});

app.post("/g/limit", function(req, res){
    res.send({status: "success", ordLimit});
});

app.post("/g/stStatus", function(req, res){
    res.send({status: "success", storeStatus})
});

app.post("/openStore", function(req, res){
    var Status = req.body.storestatus;
    if(Status == "YES"){
        storeStatus = "true";
    }
    res.send({status:"success"});
});

app.post("/closeStore", function(req, res){
    var Status = req.body.storestatus;
    if(Status == "NO"){
        storeStatus = "false";
    }
    res.send({status:"success"});
});

//Signal for cooked orders
app.post("/cooked", function(req, res){
    pg.connect(dbURL, function(err, client, done){
        if(err){
            console.log(err);
            res.end("FAIL");
        }
        client.query("UPDATE orders SET status = 'Complete' WHERE ordername = $1", [req.body.ordNumber], function(err, result){
            done();
            if(err){
                console.log(err);
                res.send({status:"fail"});
            }
            
            res.send({status:"success"});
        })
    });
});

//listen to the server and open up a port
server.listen(port, function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log("Server is running PORT " +port);
});

module.exports = {
    port: port
};