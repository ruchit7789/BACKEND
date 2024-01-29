var express = require("express");
var app = express();
require("dotenv").config();

app.get(
  "/student",
  (req, res, next) => {
    console.log(req.query);
    req.query.name = req.query.name.toUpperCase();
    next();
  },
  (req, res) => {
    let std1 = req.query.name;
    res.json({ msg: `${std1}` });
  }
);

let PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(` server running in port no ${PORT}`);
});
