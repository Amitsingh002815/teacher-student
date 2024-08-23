var mysql=require("mysql2");
var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
    con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"seedit",
        database:"teacher"
    });

    var a,b;
    a=req.query.name;
    b=req.query.password;

    con.connect(function(err){
          var q="insert into teach values(?,?)";
    con.query(q,[a,b],function(err,result){
        if(err) throw err;
        res.send("successfully save");
        res.end();
    });
    });
})
module.exports=router;
