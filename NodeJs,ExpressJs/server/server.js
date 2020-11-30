//collaborate diffirent module
let express=require("express");
//master object collaborate the module
let app=express();
//body-parser module use to accept the data from client application
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
// parse requests of content-type - application/json
app.use(bodyParser.json());
// const { json, urlencoded } = require("body-parser");
// app.use(bodyparser,json());
// app.use(bodyparser,urlencoded({extended:true}));//read client app data

//enable port communication
let cors=require("cors");
app.use(cors());

//use getAllEmployees module
app.use("/fetch",require("./employee/getAllEmployees"));
//use addEmployee module
app.use("/insert",require("./addEmployee/addEmployee"));
//use updateEmployee module
app.use("/update",require("./updateEmployee/updateEmployee"));
//use deleteEmployee module
app.use("/dalete",require("./deleteEmployee/deleteEmployee"));

//assign port number
app.listen(8080);
console.log("Server Listening the port number 8080....");

