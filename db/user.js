import mongoose from 'mongoose'

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// const User = db => db.model('user', UserSchema, 'user')

export default mongoose.model('user', UserSchema, 'user')