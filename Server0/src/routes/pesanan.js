const express = require('express');
const {body} = require('express-validator');

//Import controller
const pesananController = require('../controllers/pesanan');

//Deklarasi variabel untuk pemanggilan endpoint
const router = express.Router();

//Endpoint 1 : GET -> READ [localhost:4000/pesanan/readpesanan]
router.get('/readpesanan', pesananController.getAllPesanan);

// ENDPOINT 2 : Create pesanan [localhost:4000/pesanan/pesan]
router.post('/pesan', pesananController.createPesanan)

//ENDPOINT 3 : Update pesanan
router.patch('/updatepesanan/:postId',
    pesananController.patchPesanan)

router.patch('/updatehargatotal/:postId',
    [body('hargatotal').isNumeric()],
    pesananController.patchHargaTotal)

//ENDPOINT 4 : GET By Id -> READ [localhost:4000/pesanan/readpesananunique/:postId]
router.get('/readpesananunique/:postId', pesananController.getPesananById);

module.exports = router;