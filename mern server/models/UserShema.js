const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    name : {required: false , type : String},
    email : {required: true , type : String},
    password : {required: true , type : String, select : false}



})

module.exports = mongoose.model("User", userSchema)