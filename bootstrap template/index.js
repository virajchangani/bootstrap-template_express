const express = require("express");
const port = "4000";
const path = require("path")

const app = express();

app.set("view engine","ejs")
app.use("/public",express.static(path.join(__dirname,"public")));
app.use("/assets",express.static(path.join(__dirname,"assets")));

app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(port,(err)=>{
    err ? console.log (err): console.log("Server Start on Port" + port);
    
});
