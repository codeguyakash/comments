const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors());
const port = process.env.PORT || 3000;
const ApiData = require("./Data.json");

app.get("/",(req,res)=>{
    res.send("Hello Guys");
});

app.get("/data",(req,res)=>{
    res.send(ApiData);
});

app.listen(port,()=>{
console.log("Server Running");
});