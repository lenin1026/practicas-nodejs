const express = require("express");
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./db");
require("ejs");

connectDB()

const app = express();

const homeroutes = require('../src/routes/home.js')
const useroutes = require('../src/routes/user.js')

// strings
app.set('case sensitive routing', true);
app.set('appname', 'express course');
app.set('port', 4000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




// middleware
app.use(express.json());
app.use(morgan("dev"));

app.use(homeroutes)
app.use(useroutes)

// routers

console.log(__dirname)

app.use("/public", express.static(path.join(__dirname, '/public')))
app.use("/uploads", express.static(path.join(__dirname, '/uploads')))

app.listen(4000);
console.log(`server on pot ${4000}`);

// app.listen(3000);
// console.log("Server on port ${3000}");
