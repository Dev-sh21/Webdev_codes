const express=require("express");
const app=express();
function ageCheckerMiddleware(req,res,next)
{
  const age=req.query.age;
  if(age>=14)
    next();
  else{
    res.json({
      msg:"bade hoja beta"
    });
  }
}
app.get("/ride1", ageCheckerMiddleware,function(req,res){
  res.json({
    msg:"you are eligible for ride1"
  });
});
app.get("/ride2", ageCheckerMiddleware,function(req,res){
  res.json({
    msg:"you are eligible for ride2"
  });
});

app.listen(3000);