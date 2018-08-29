"use strict"; 
const express = require("express"); 
const app = express(); 
const router = require("./routes/router"); 
console.log(router); 
app.use(express.json()); 
app.use(express.static("./public")); 
app.use("/", router); 

const port = 5000; 
app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
  });