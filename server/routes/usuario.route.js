const express = require('express');
const router = express.Router();

const usuario = require('../controllers/usuario.controller');
const producto = require('../controllers/producto.controller');


router.get('/', usuario.getUsuarios);
router.post('/', usuario.createUsuario);
//router.get('/:id', usuario.getUsuario);
router.put('/:id', usuario.editUsuario);
router.delete('/:id', usuario.deleteUsuario);
router.post('/signIn', usuario.singIn);
router.get('/one/:id', usuario.datousuario);


router.get('/productos',producto.allproductos);
router.post('/productos', producto.createProducto);


//router.get('/holi',producto.getProducto);
//router.put('/:id',producto.editProducto);
//router.delete('/:id',producto.deleteProducto);

module.exports = router;