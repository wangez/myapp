import mongoose from 'mongoose'

var ShowMenuSchema = new mongoose.Schema({
    id: String,
    name: String,
    title: String,
    index: Number,
    parent: String,
    bz: String
});

export default mongoose.model('showmenu', ShowMenuSchema, 'showmenu')