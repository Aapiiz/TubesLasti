// Import library express
const express = require('express');
const {body} = require('express-validator');

// Import controller
const menuController = require('../controllers/menu');

// Deklarasi variabel untuk pemanggilan endpoint
const router = express.Router();

// Endpoint 1 : POST -> CREATE [localhost:4000/menu/createmenu]
router.post('/createmenu',
    [body('namamenu').isLength({min: 3}).withMessage('Nama menu harus lebih dari 3 karakter yah brow')], 
    menuController.createMenu);

// Endpoint 2 : GET -> READ [localhost:4000/menu/readmenu]
router.get('/readmenu', 
    menuController.getAllMenu);

// Endpoint 3 : PATCH Menu -> PATCH [localhost:4000/menu/patchmenu]
router.patch('/patchmenu/:postId',[
    body('stok').isNumeric()],
    menuController.patchMenu);

// Endpoint 4 : DELETE menu -> DELETE [localhost:4000/menu/deletemenu/:postId]
router.delete('/deletemenu/:postId', 
    menuController.deleteMenu);

module.exports = router;