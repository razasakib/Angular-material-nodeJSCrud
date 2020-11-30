//import mongodb module
let mongodb=require("mongodb");
//create the client
//mongodb databse follow the client server architecture
let sambaIt=mongodb.MongoClient;
//create module(custom module/routing )
let employees=require("express").Router().get("/",(req,res)=>{
    sambaIt.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employee").find().toArray((err,array=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            }))
        }
    })
})
//export the employee module
module.exports=employees;