const express=require ("express");
const app=express();
function calculateSum(a,b)
{
  return (a+b);

}
app.get("/",function(req,res){
  const a=parseInt(req.query.a);
  const b=parseInt(req.query.b);
  const ans=calculateSum(a,b);
  res.json({
    sum:ans
  });

})
app.listen(3001);