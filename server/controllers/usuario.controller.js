const Usuario = require('../models/usuario');

const usuarioCtrl = {};


usuarioCtrl.getUsuarios = async (req, res, next) => {
    const usuarios = await Usuario.find();
 
    res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res, next) => {
    
    const usuario = new Usuario({
        name: req.body.name,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        correo: req.body.correo,
        pais: req.body.pais,
        password: req.body.contrasena

    });

    await usuario.save();
    res.json({ status: 'Usuario created' });
};

//un registro puntual
usuarioCtrl.getUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    res.json(usuario);
};

usuarioCtrl.editUsuario = async (req, res, next) => {
    const { id } = req.params;
    const usuario = {
        name: req.body.name,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        correo: req.body.correo,
        pais: req.body.pais,
        contrasena: req.boby.contrasena,
    };
    await Usuario.findByIdAndUpdate(id, { $set: usuario }, { new: true });
    res.json({ status: 'Usuario Updated' });
};

usuarioCtrl.deleteUsuario = async (req, res, next) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({ status: 'Usuario Deleted' });
};

usuarioCtrl.singIn = async (req, res, next) =>{
    const usuario = await Usuario.findOne(req.body);
    if(usuario!= null){
        res.json({ data: usuario, result: true});
        
    }else{
        res.json({ data: usuario, result: false});

    }
}
    
usuarioCtrl.datousuario = async (req, res, next) =>{
    const id = req.params.id
    const usuario = await Usuario.findOne({_id:id});
    res.json(usuario);
    console.log()    
}

module.exports = usuarioCtrl;