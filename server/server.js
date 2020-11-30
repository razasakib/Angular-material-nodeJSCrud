//import express module
//express module used to collabrate the module(custom module)
let express=require("express");

//create master object using express module
//master object used to collabrate the module
//where app is the master object
let app=express();

//import body-parser
//body-parser used to accept data from cleint application
let bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//enable the port cmmunication
let cors=require("cors");
app.use(cors());

app.use("/fetch",require("./employee/getAllEmployees"));
app.use("/insert",require("./addEmployee/addEmployee"));
app.use("/update",require("./updateEmployee/updateEmployee"));
app.use("/delete",require("./deleteEmployee/deleteEmployee"));

//assign the port
app.listen(8080);
console.log("server listen the port no-8080");


