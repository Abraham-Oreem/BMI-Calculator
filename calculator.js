const express = require("express");
const bodyParser = require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res) {
    res.sendFile(__dirname+"/index.html")    
})
app.post("/",function (req,res) {
    var n1=Number(req.body.Height);
    var n2=Number(req.body.Weight);
    var result=n2/(n1*n1);
    res.send("The BMI is " + result);
})
app.listen(3000, function(){
    console.log("Server started on port 3000");
});

