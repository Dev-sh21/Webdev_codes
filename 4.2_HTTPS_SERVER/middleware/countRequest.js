const express=require("express");
const app=express();
let reqCount=0;
app.get("/sum",function(req,res){
  reqCount+=1;
  console.log(`the total number of sum req sent is  ${reqCount}`);
  const a=parseInt(req.query.a);
  const b=parseInt(req.query.b);
  res.json({
    sum:a+b
  });
});
app.get("/multiply",function(req,res){
  reqCount+=1;
  console.log(`the total number of multiply req sent is  ${reqCount}`);
  const a=parseInt(req.query.a);
  const b=parseInt(req.query.b);
  res.json({
    product:a*b
  });
});

app.listen(3000);