const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pesanan = new Schema({
    namapemesan: {
        type: String,
        required: true
    },
    listmenu: {
        type: [{
            namamenu: {
                type: String,
                required: true
            },
            harga: {
                type: Number,
                required: true
            },
            jumlah: {
                type: Number,
                required: true
            }
        }],
        default: [],
    },    
    hargatotal: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Pesanan', Pesanan);