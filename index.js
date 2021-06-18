// lib and imports
const express = require("express");
const app = express();

const manager = require("./controllers/manager")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/',(req, res) => {
  // callback
  res.render('manager.ejs');
});

app.get('/planYourWeek',(req, res) => {
  // callback
  res.render('day.ejs');
});

app.get('/tasksOfTheDay',(req, res) => {
  // callback
  res.render('today.ejs');
});


// Create here your api setup
app.post('/api/addtask', (req, res) => {
  manager.addingTask(req.body)
});
app.post('/api/loadtask', manager.displayingTask);



app.listen(3000, () => console.log("Server Up and running"));
