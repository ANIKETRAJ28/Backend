const express = require("express");
const PORT = 3000;
// this express contains the function
const app = express();
// we are calling this express function which returns an object
app.get("/", function (request, response){
    response.send("get request called for home");
});
app.post("/", function (request, response){
    response.send("post request called for home");
});
app.get("/xyz", function (request, response){
    response.send("get request called for xyz");
});
app.post("/xyz", function (request, response){
    response.send("post request called for xyz");
});
app.put("/", function (request, response){
    response.json({
        message: "put request sent for home",
        res: "success"
    });
});
app.listen(PORT, function (){
    console.log("Server started on port", PORT);
});