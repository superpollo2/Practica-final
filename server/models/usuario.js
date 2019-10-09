const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    name: { type: String},
    apellido: { type: String },
    identificacion: { type: String },
    correo: {type: String },
    pais: { type: String },
    password: { type: String}
});

module.exports = mongoose.model('usuario', UsuarioSchema);