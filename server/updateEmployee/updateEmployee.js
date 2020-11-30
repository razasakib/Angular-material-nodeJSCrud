let mongodb=require("mongodb");
let sambaIt=mongodb.MongoClient;
let updateEmployees=require("express").Router().put("/",(res,req)=>{
    let basedOnProperty={empId:req.body.empId};
    let newProperty={
        "Name":req.body.Name,
        "Age":req.body.Age,
        "empId":req.body.empId,
        "Salary":req.body.Salary,
        "Department":req.body.Department,
        "DOB":req.body.DOB,
        "Gender":req.body.Gender,
        "language":req.body.language
    };
    sambaIt.connect("mongodb://localhost:27017/miniprojectdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("employee").updateOne(basedOnProperty,newProperty,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({update:"success"});
                }
            })
        }
    })
});

module.exports=updateEmployees;