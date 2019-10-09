const Producto = require('../models/producto');

const productoCtrl = {};

productoCtrl.allproductos = async (req, res, next) => {
    const es = await Producto.find();
    res.json(es);
    console.log(es)
};

productoCtrl.createProducto = async (req, res, next) => {
    const producto = new E({
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        disponibilidad: req.body.disponibilidad
    });
    await producto.save();
    res.json({status: 'producto created'});
};

productoCtrl.getProducto = async (req, res, next) => {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    res.json(producto);
};

productoCtrl.editProducto = async (req, res, next) => {
    const { id } = req.params;
    const producto = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        disponibilidad: req.body.disponibilidad
    };
    await Producto.findByIdAndUpdate(id, {$set: producto}, {new: true});
    res.json({status: 'Producto Updated'});
};

productoCtrl.deleteProducto = async (req, res, next) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Deleted'});
};


module.exports = productoCtrl;