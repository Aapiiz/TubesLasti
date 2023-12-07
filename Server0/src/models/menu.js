// Import library
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const MenuPost = new schema({
    namamenu: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    stok: {
        type: Number,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('MenuPost', MenuPost);