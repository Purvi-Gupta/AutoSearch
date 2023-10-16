const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "nor-id" : String,
    "name":String,
    "items":[],
    "address":String,
    "pincode":String,
});

module.exports = new mongoose.model('User',userSchema);