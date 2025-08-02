const express=require("express");
const jwt=require("jsonwebtoken");
const JWT_Secret="pidsjfvnsdoifjvb";
const app=express();
const userData=[];
app.use(express.json());


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

    const token=jwt.sign({
      username: username
    },JWT_Secret);

    
    
    res.json({
      msg:"you are signed in, swagatam!!", token:token
    });
  }

    else{
    res.json({
      msg:"nikal yaha se!!"
    });
  }
  

})
app.get("/me", function(req, res) {
  const token = req.header("token");

  try {
    const decodedInfo = jwt.verify(token, JWT_Secret);
    const username = decodedInfo.username;

    const userFound = userData.find(u => u.name === username);

    if (userFound) {
      res.json({
        username: userFound.name
      });
    } else {
      res.status(401).json({
        msg: "nikal beye tu nhi hai"
      });
    }
  } catch (err) {
    res.status(401).json({
      msg: "invalid ya missing token, bhaag",
      error: err.message
    });
  }
});
app.listen(3000);

