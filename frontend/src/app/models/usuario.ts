export class Usuario {

    constructor(_id = '', name = '', apellido = '', identificacion = '', correo = '',  pais = '', password= '') {
        this._id = _id;
        this.name = name;
        this.apellido = apellido;
        this.identificacion = identificacion;
        this.correo = correo;
        this.pais = pais;
        this.password = password;
    }

    _id: string;
    name: string;
    apellido: string;
    identificacion: string;
    correo: String;
    pais: string;
    password: string;


}