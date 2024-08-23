var express=require("express");
var app=express();


var registeri=require("./registered.js");
var logini=require("./login.js");
var addstudenti=require("./add student.js");
var addcti=require("./addct.js");

app.use("/register",registeri);
app.use("/login",logini);
app.use("/addstudent",addstudenti);
app.use("/addct",addcti);

app.listen(8080);