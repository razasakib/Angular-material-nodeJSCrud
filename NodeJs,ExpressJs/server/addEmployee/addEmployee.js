let mongodb=require("mongodb");

let sambaIT=mongodb.MongoClient;
//create custom module
let addEmployee=require("express").Router().post("/",(req,res)=>{
    let newRecords={
           "Name":req.body.Name,
           "Age":req.body.Age,
           "empid":req.body.empid,
           "Salary":req.body.Salary,
           "Department":req.body.Department,
           "DOB":req.body.DOB,
           "Gender":req.body.Gender,
           "Language":req.body.Language
    };
    sambaIT.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        
              if(err) throw err;
              else{
                 db.collection("employees").insertOne(newRecords,(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({insert:"Sucess"});
                    }
                 });
              }
     });
});
//exports the empoyee module
module.exports=addEmployee;
