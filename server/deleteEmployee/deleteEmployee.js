//import mongodb module
let mongodb=require("mongodb");
//create the client
//mongodb databse follow the client server architecture
let sambaIt=mongodb.MongoClient;
//create module(custom module/routing )
let employees=require("express").Router().delete("/",(req,res)=>{
    sambaIt.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employee").deleteOne({"empId":req.body.empId},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            })
        }
    })
})
//export the employee module
module.exports=employees;