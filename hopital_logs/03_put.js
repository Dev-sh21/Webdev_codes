const express = require("express");
const app = express();

const users = [{
  name: "devesh",
  kidneys: [{
    healthy: false
  }]
}];
app.use(express.json());

app.get("/", function(req, res) {
  const kidneys = users[0].kidneys;
  const totalKidneys = kidneys.length;
  let totalHealthyKidney = 0;
  for (let i = 0; i < totalKidneys; i++) {
    if (kidneys[i].healthy) 
      totalHealthyKidney += 1;
  }
  const totalUnhealthyKidneys = totalKidneys - totalHealthyKidney;
  res.json({
    kidneys,
    totalKidneys,
    totalHealthyKidney,
    totalUnhealthyKidneys,
  });
});

app.post("/",function(req,res){
  const isHealthy=req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg:"kidney added succesfully "
  });

});

app.put("/",function(req,res){
  const kidneys=users[0].kidneys;
  for(let i=0;i<kidneys.length;i++)
    kidneys[i].healthy=true;

  res.json({
    msg:"all kidneys are healthy now sir!!"
  });
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
