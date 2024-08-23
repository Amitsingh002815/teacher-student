var express=require("express");
var mysql=require("mysql2");
var router=express.Router();

router.get("/",function(req,res){
    con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"seedit",
        database:"teacher"

    });
    var a,b,c,d,e,f;
    a=req.query.Rno;
    b=req.query.Name;
    c=req.query.Branch;
    d=req.query.Semester;
    e=req.query.Email;
    f=req.query.Mobile;

    con.connect(function(err){
        var q="insert into addstudent values(?,?,?,?,?,?)";
    con.query(q,[a,b,c,d,e,f],function(err,result){
        if(err) throw err;
        res.send("add successfully");
        res.end();
    });
    });
})
module.exports=router;