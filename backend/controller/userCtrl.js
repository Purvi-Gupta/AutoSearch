const mongoose = require("mongoose");
const User = require("../models/userModel");

const findUser = async(req,res) =>{
    try {
        let q = req.query.query;
    let query = {
        "$or":[
            {"nor-id":{"$regex":q,"$options":"i"}},
            {"name":{"$regex":q,"$options":"i"}},
            {"address":{"$regex":q,"$options":"i"}},
            {"pincode":{"$regex":q,"$options":"i"}},
            { "items": { "$elemMatch": { "$regex": q,"$options":"i" } } }
        ]
    };
    if (q) {
        let output = await User.find(query);
        // console.log(output);
        res.json(output);
    }

    } catch (error) {
        console.log(`error : ${error}`);
    }
}

const findSingleUser = async(req,res) =>{
    try {
        const id = req.params.id;
        const user = await User.find({"nor-id":id});
        // console.log(user);
        res.json(user)
    } catch (error) {
        console.log(error);
    }
}

module.exports ={findUser,findSingleUser};