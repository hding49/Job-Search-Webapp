const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title: {type: String, required: true,max: 100},
    company: {type: String, required: true, max: 100},
    summary: {type: String, required: true},
    
    
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);