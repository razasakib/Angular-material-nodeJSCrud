let mongodb=require("mongodb");

let sambaIT=mongodb.MongoClient;
//create custom module
let deleteEmployee=require("express").Router().delete("/",(req,res)=>{
    sambaIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err
        else{
            db.collection("employees").deleteOne({"empid":req.body.empid},(err,result)=>{
              if(err) throw err
              else{
                  res.send({"delete":"Sucess"});
              }
            });
        }
    });

});
//exports the empoyee module
module.exports=deleteEmployee;