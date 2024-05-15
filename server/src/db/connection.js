const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/bookMovie")
.then(() => { console.log("connection established with mongodb server online"); })
.catch(err => {
    console.log("error while connection", err)
});