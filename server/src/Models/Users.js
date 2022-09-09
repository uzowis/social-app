const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username : { 
        type: String,
        unique : true,
        min : 5,
        max : 20,
        required : true
    },
    firstname : { 
        type: String,
        min : 3,
        max : 100,
        required : true
    },
    surname : { 
        type: String,
        min : 3,
        max : 100,
        required : true
    },
    email : { 
        type: String,
        min : 5,
        max : 255,
        required : true,
        unique : true
    },
    password : { 
        type: String,
        min : 6,
        max : 1024,
        required : true,
    },
    followers : {type : Array, default : []},
    followings : {type : Array, default : []},
    coverPicture : {type : Array, default : ''},
    profilePicture : {type : Array, default : ''},
    city : {type : Array, default : ''},
    from : {type : Array, default : ''},
    relationship : {type : Array, default : 1 },




});

const User = new mongoose.model('User', userSchema);

// Validate input using Joi

const validateRequest = (request)=>{

    const joiSchema = Joi.object({
        username : Joi.string().alphanum().min(5).max(20).required(),
        firstname : Joi.string().min(3).max(100).required(),
        surname : Joi.string().min(3).max(100).required(),
        email : Joi.string().email().min(5).max(255).required(),
        password : Joi.string().min(6).max(1024).required(),
        repeat_password : Joi.ref('password'),
        
        
    }).with('password', 'repeat_password');

    return joiSchema.validate(request);
    
}



module.exports = {User, validateRequest};