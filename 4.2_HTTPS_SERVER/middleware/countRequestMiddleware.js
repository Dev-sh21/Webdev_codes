const express=require("express");
const app=express();
const requestCount=0;
function requestCounter(req,res,next){

  requestCount+=1;
  console.log(`total number of request is ${requestCount}`);
  next();
}
function realSumHandler(req,res){
  const a=parseInt(req.query.a);
  const b=parseInt(req.query.b);
  res.json({
    sum:a+b
  });
}

app.get("/sum",requestCounter,realSumHandler);
app.listen(3000);