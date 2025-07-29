const express=require("express");
const app=express();
app.get("/",function(req,res){
  res.send("kya bolu")
}); 
app.listen(3000);
