//age checker without middleware fucntion
const express=require("express");
const app=express();
function isValidAge(age)
{
  if(age>=14)
    return true;
  else
    return false;
}
app.get("/ride1", function(req,res){
  if(isValidAge(req.query.age))
  {
    res.json({
      msg:"you are eligible to go for ride 1"
    })
  }else
  {
    res.status(401).json({
      msg: "you are not eligible for the ride"
    })
  }
})
app.listen(3000);