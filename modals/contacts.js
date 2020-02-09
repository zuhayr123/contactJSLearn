const mongoose = require('mongoose');


const ContactsSchema = mongoose.Schema({
    first_name:{
        type : String,
        required: true
    },
    last_name:{
        type : String,
        required : true
    }
});

const Contact = module.exports = mongoose.model('contacts', ContactsSchema)