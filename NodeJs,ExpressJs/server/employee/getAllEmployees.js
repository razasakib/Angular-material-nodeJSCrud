let mongodb=require("mongodb");

let sambaIT=mongodb.MongoClient;
//create custom module
let employees=require("express").Router().get("/",(req,res)=>{
     sambaIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
         db.collection("employee").find().toArray((err,array)=>{
              if(err) throw err;
              else{
                  res.send(array);
              }
         });

     });

});
//exports the empoyee module
module.exports=employees;
