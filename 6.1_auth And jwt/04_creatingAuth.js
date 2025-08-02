const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");

const JWT_SECRET = "devesh123";
const app = express();
app.use(express.json());

const users = [];

// Serve HTML frontend
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "auth website/public/index.html"));
});

// Signup route
app.post("/signup", function (req, res) {
  const { username, password } = req.body;
  users.push({ username, password });
  res.json({ message: "you are signed up" });
});

// Signin route
app.post("/signin", function (req, res) {
  const { username, password } = req.body;

  const userFound = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!userFound) {
    return res.status(404).json({ message: "Credentials Incorrect" });
  }

  const token = jwt.sign({ username: userFound.username }, JWT_SECRET);

  res.json({
    message: "you are signed in",
    token: token,
  });
});

// Auth middleware
function auth(req, res, next) {
  const token = req.header("token");
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.username = decoded.username;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}

// User info route
app.get("/me", auth, function (req, res) {
  const userFound = users.find((u) => u.username === req.username);

  if (userFound) {
    res.json({
      username: userFound.username,
      password: userFound.password,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});