const express = require("express");
const app = express();
const port = 3000;
const Loginform = require("./models/db");
const adminForm = require("./models/dbadmin");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(express.static("views"));

app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

const mongourl = "mongodb://localhost:27017/";

mongoose
  .connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/student", (req, res) => {
  res.redirect("login.html");
});

app.get("/admin", (req, res) => {
  res.redirect("adminlogin.html");
});

app.get("/", (req, res) => {
  res.send(
    "Welcome /ADMIN to give students update on marks+attendence by entering students rollno, /student to register your details"
  );
});

app.post("/student", async (req, res) => {
  try {
    const { rollno, password } = req.body;
    if (!rollno || !password) {
      return res.status(400).send("Email and password are required");
    }

    const user = await Loginform.insertMany({ rollno, password });
    console.log(user);
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.json("successfully registred as student");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/teacher", async (req, res) => {
  try {
    const { username, password, rollno, marksm1, attendence } = req.body;
    if (!rollno || !password) {
      return res.status(400).send("Email and password are required");
    }

    const student = await Loginform.findOne({ rollno });

    const studentupdate = await student.updateOne({ marksm1, attendence });

    const teacherdata = await adminForm.insertMany({
      rollno,
      password,
      username,
    });

    console.log(teacherdata);
    console.log(studentupdate);

    res.json("succesfully updated studnets credentials");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});
