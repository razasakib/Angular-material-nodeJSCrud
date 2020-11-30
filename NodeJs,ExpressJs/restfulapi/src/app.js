const express=require("express");
const app=express();
const port=process.env.PORT || 8000

//db
require("./db/conn");

const Student=require("./models/student");

app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("Hello from other Sides by Sk Saukat");
// })

app.post("/students",(req,res)=>{
    console.log(req.body);
    const user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
   
})
//get all data from db
app.get("/fetch",async (req,res)=>{
    try {
        const studentData=await Student.find();
        res.send(studentData);
        } catch (err) {
         res.send(e);
    }
})
//get Individual Student Data using Id
app.get("/oneData/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const singleStudent=await Student.findById(_id);
        if(!singleStudent){
            return res.status(404).send();
        }else{
            res.send(singleStudent);
        }
    } catch (err) {
        res.status(500).send(err);
    }
})
//update data usng Id
app.patch("/update/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const updateStudent=await Student.findByIdAndUpdate(_id, req.body, {new:true});
            res.send(updateStudent);
    } catch (err) {
        res.status(400).send(err);
    }
})

//delete data from student db
app.delete("/delete/:id",async (req,res)=>{
    try {
        const _id=req.params.id;
        const deleteStudent=await Student.findByIdAndDelete(_id);
        if(!deleteStudent){
            return res.status(400).send();
        }else{
            res.status(200).send(deleteStudent);
        }
   } catch (err) {
       res.status(500).send(e);
   }
})


app.listen(port,()=>{
    console.log(`Connection is Setup at ${port}`);
})