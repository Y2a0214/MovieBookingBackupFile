const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://yash0214:yash0214@cluster0.grzeyny.mongodb.net/")
.then(() => { console.log("connection established with mongodb server online"); })
.catch(err => {
    console.log("error while connection", err)
});