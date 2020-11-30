let mongodb=require("mongodb");
let sambaIt=mongodb.MongoClient;
let employees=require("express").Router().post ("/",(res,req)=>{
    let newRecords={
        "Name":req.body.Name,
        "Age":req.body.Age,
        "empId":req.body.empId,
        "salary":req.body.Salary,
        "Department":req.body.Department,
        "DOB":req.body.DOB,
        "gender":req.body.Gender,
        "language":req.body.language
    };
    sambaIt.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employee").insertOne(newRecords,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({insert:"success"});
                }
            })
        }
    })
});

module.exports=employees;