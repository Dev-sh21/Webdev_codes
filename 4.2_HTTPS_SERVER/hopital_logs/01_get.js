const express = require("express");
const app = express();

const users = [{
  name: "devesh",
  kidneys: [{
    healthy: false
  }]
}];

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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
