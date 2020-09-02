
require('./config/config');
require('./model/db');

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/routes'); // Imports routes for the products
const app = express();

// serve files in static' folder at root URL '/'
app.use('/', express.static('./'));

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://haoran:hding49@cluster0.l94hk.mongodb.net/test?retryWrites=true&w=majority';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    
});

//start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
