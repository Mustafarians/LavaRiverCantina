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
var dbURL = process.env.DATABASE_URL || "postgres://postgres:webdev@localhost:5432/lrc";

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
        res.sendFile(pub+"/home2.html");
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
    if(req.session.level == 1){
        res.sendFile(pub+"/kitchen.html");
    } else if (req.session.level == 2){
        res.sendFile(pub+"/kitchen.html");
    } else {
        res.sendFile(pub+"/home.html");
    }
})

app.get("/login", function(req, res){
    res.sendFile(pub+"/login.html");
});

app.get("/menu", function(req, res){
    res.sendFile(pub+"/menu.html");
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
    
})

app.post("/order66", function(req, resp){
    var OrderItems = req.body.OrderItems;
    var OrderItemsQuant = req.body.OrderItemsQuant;
    
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
                    client.query("INSERT INTO orders (itemnum, quantity, ordername) VALUES ($1, $2, $3)", [result.rows[0].itemnum, OrderItemsQuant[index], orderName], function(err, result){
                    done();
                    if(err){
                        console.log(err);
                        resp.end("FAIL");
                    }
                    
                })
            } else {
                console.log("err1");
                resp.end("FAIL");
            }     
        })   
    }) (i);
        }
        orderName++;
        var obj = {
                status:"success"
                }
            resp.send(obj);
        })
})

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