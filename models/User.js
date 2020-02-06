const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
      },
      email: {
        type : String,
        required: true,
        unique : true
      },
      password: {
        type: String,
        required: true,
        
      },
     
    avatar: {
      type : String
    }
  });

module.exports = User = mongoose.model('users', UserSchema); 