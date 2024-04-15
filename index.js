const express = require("express");
const app = express();
const port = 4000;
const Loginform = require("./models/db");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.static("views"));

app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1/SELAB";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/", (req, res) => {
  res.redirect("login.html");
});
app.get("/home",(req,res)=>{
    res.send("Welcoem hoem")
})

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    const user = await Loginform.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(404).send("User not found");
    }

    if (password !== user.password) {
      return res.status(401).send("Incorrect password");
    }

    res.redirect("/home");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(4000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
