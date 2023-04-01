const express = require("express");
const app = express();
const bodyparser = require("body-parser");

// to allow cross origin requests
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

// this is an middleware added for requests to get the post data
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(allowCrossDomain);

// to access database
const mongojs=  require("mongojs");
const cs = "mongodb+srv://abhishek:abhishek@cluster0.gimxr.mongodb.net/netflixclone?retryWrites=true&w=majority"
const collections = mongojs(cs,["netflixclone"]);

app.post("/login",(req,res)=>{
    console.log("inside login backend");
    var d = {
        email: req.body.email,
        password: req.body.password
    }
    collections.netflixclonelogin.find(d,function(err,docs){
		if(docs.length==0){
            console.log("login failed");
			res.send(false)
		}
		else{
            console.log("login success");
			res.send(true);
		}	
	})
    
})

app.post("/signup",(req,res)=>{
    var d = {
        email: req.body.email,
        password: req.body.password
    }
    collections.netflixclonelogin.insert(d,function(err,doc){
		if(err){
			res.send("Error occured");
		}
		else{
			res.send(true);
		}
	})
})
app.listen(8000,()=>{
    console.log("server started");
})
