const _ = require('lodash');
const bcrypt = require('bcrypt');
const express = require('express');
const {User, validateRequest} = require('../Models/Users');

const router = express.Router();

// Fetch all Users
router.get('/', async(req, res) =>{
   try {
     const users = await User.find().select('-password');
     return res.status(200).send(users);
   } catch (error) {
     res.status(404).send(error);
   }
});

// Create new User
router.post('/', async(req, res) =>{
    try {
        // Validate User input
        const { error } = validateRequest(req.body);
        if(error) return   res.status(404).send(error.details[0].path[0] ==='repeat_password' ? 'Passwords do not Match!' : error.details[0].message);

        // Check if the user email and username already exists
        let user = await User.findOne({username : req.body.username});
        const userEmail = await User.findOne({email: req.body.email});
        if(user || userEmail) return res.status(404).send('User already exists');

        // Create new user using the Model 
        user = new User(_.pick(req.body, ['username', 'firstname', 'surname', 'email', 'password']));

        // Hash the Password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        // Save the Data to Database
        try {
           const result= await user.save();
           res.status(200).send(_.pick(result, ['username', 'firstname', 'surname', 'email']));

        } catch (error) {
            res.status(500).send(error);
            
        }
        
    } catch (error) {
        console.log(error);
        
    }
     
});

module.exports = router;