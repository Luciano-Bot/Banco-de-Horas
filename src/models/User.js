const mongoose = require('../database');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique:  true,
        lowercase: true,
        required: true
    },
    password:{
        type: String,
        select:false,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;