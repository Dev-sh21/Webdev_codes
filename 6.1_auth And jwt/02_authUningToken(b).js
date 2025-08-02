const express=require("express");
const app=express();
const userData=[];
app.use(express.json());
function generateToken()
{
  const char="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let token='';
  for(let i=0;i<32;i++)
  {
    token+=char.charAt(Math.floor(Math.random()*char.length)); 
  }
  return token;
}
app.post("/signup",function(req,res){
  const username= req.body.username
  const password= req.body.password

  userData.push({
    name: username,
    pass: password
  })
  res.json({
    msg:"you are signed up"
  });
  console.log(userData);

})

app.post("/signin", function(req,res){
  const username = req.body.username
  const password= req.body.password
  
  const userFound=userData.find(u=>(u.name===username)&&(u.pass===password));
  if(userFound)

  {
    const token=generateToken();
    userFound.token=token;
    res.json({
      msg:"you are signed in, swagatam!!"
    })
  }else{
    res.json({
      msg:"nikal yaha se!!"
    });
  }
  console.log(userData);

});
app.listen(3000);

