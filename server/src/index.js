const mongoose = require('mongoose');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

// Database Connection
mongoose.connect('mongodb://localhost/friendscon')
    .then(()=>console.log('Connected Successfully to db'))
    .catch(err => console.log('There was an Error'+err));
    



// Route Handlers
const userRoutes = require('./Routes/users');
const { urlencoded } = require('express');

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(urlencoded({extended: true}))

// Routes
app.use('/api/users', userRoutes);









const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT} ....`);
});