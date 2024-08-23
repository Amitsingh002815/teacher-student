var express=require("express");
var router=express.Router();
var mysql=require("mysql2");

router.get("/",function(req,res){
    con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"seedit",
        database:"teacher"

    });

    var a,b,c;
    a=req.query.Rno;
    b=req.query.Semester;
    c=req.query.Marks;

    con.connect(function(err){
        var q="insert into addct values(?,?,?)";
    con.query(q,[a,b,c],function(err,result){
        if(err) throw err;
        res.send("addct successfully");
        res.end();
    });
    });
})
module.exports=router;