const mongoose = require('mongoose');

const USER_MODEL = new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true, unique:true},
    password:{type:String,require:true,minLength:4},
    last_broadcast:{type:String, default:"never"}
})

module.exports = mongoose.model('user',USER_MODEL);