const mongoose = require('mongoose');
const registerSchema=new mongoose.Schema({
    event_name:{ type: String,required:true},
    domain_id: { type: Number},
     domain_name: { type: String },
    name:{ type: String,required:true},
    usn:{ type: String,required:true},
    contact:{ type: Number},
    email:{ type: String,required:true}
})

const User = mongoose.model('sports_registration', registerSchema);
module.exports = User;