const {validationResult} = require('express-validator');
const MenuPost = require('../models/menu');
const path = require('path');
const fs = require('fs');

exports.createMenu = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Invalid Value');
        err.statusCode = 400;
        err.data = errors.array();
        throw err;
    }

    if (!req.file) {
        const err = new Error('Gambarnya upload dulu yang brow (jpg, png, jpeg)');
        err.statusCode = 422;
        throw err;
    }

    const namamenu = req.body.namamenu;
    const image = req.file.path;
    const deskripsi = req.body.deskripsi;
    const harga = req.body.harga;

    const Posting = new MenuPost({
        namamenu: namamenu,
        image: image,
        deskripsi: deskripsi,
        harga: harga
    });

    Posting.save()
    .then(result => {
        res.status(201).json(
            {
                message: 'Berhasil menambahkan menu',
                data: result
            }
        );
    })
    .catch(err => {
        next(err);
    });
}

exports.getAllMenu = (req, res, next) => {
    MenuPost.find()
    .then(result => {
        res.status(200).json(
            {
                message: 'Berhasil menampilkan menu',
                data: result
            }
        );
    })
    .catch(err => {
        next(err);
    });
}

exports.patchMenu = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('Input value tidak sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const stok = req.body.stok;
    const postId = req.params.postId;
    MenuPost.findById(postId)
    .then(patch => {
        if(!patch){
            const err = new Error('Menu post tidak ditemukan');
            err.errorStatus = 404;
            throw err;
        }

        patch.stok = stok;

        return patch.save();
    })
    .then(result => {
        res.status(200).json({
            message: 'Update berhasil',
            data: result,
        })
    })
    .catch(err => {
        next(err)
    })
}

exports.deleteMenu = (req, res, next) => {
    const postId = req.params.postId;

    MenuPost.findById(postId)
    .then(post => {
        if(!post){
            const err = new Error('Menu post tidak ditemukan');
            err.errorStatus = 404;
            throw err;
        }

        // removeImage(post.image);
        return MenuPost.findByIdAndDelete(postId);
    })
    .then(result => {
        res.status(200).json({
            message: 'Hapus Menu Berhasil',
            data : result
        })
    })
    .catch(err => {
        next(err);
    })
}

// const removeImage = (filePath) => {
//     console.log('filepath', filePath);
//     console.log('dir name: ', __dirname);

//     filePath = path.join(__dirname, '../..', filePath);
//     fs.unlinkSync(filePath, err => console.log(err));
// }