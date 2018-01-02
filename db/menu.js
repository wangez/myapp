import mongoose from 'mongoose'

var MenuSchema = new mongoose.Schema({
    name: String,
    title: String,
    path: String,
    bz: String
});

export default mongoose.model('menu', MenuSchema, 'menu')