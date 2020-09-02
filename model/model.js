const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var JobSchema = new Schema({
    title: {type: String},
    company: {type: String},
    summary: {type: String},

    
});


// Export the model
module.exports = mongoose.model('Job', JobSchema);