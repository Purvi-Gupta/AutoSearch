const mongoose = require("mongoose");

const dbcon = async() =>{
    mongoose.connect("mongodb://127.0.0.1:27017/usersdb")
    .then(()=>console.log(`db is connected`))
    .catch(err => console.log(`Error : ${err}`));
        
}

module.exports = dbcon;