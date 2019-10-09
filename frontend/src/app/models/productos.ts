export class Producto {

    constructor(_id = '', codigo = '',  nombre= '', descripcion = '', precio = 0, disponibilidad= true) {
        this._id =_id;
        this.codigo=codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }

    _id: string;
    codigo: string;
    nombre: string;
    descripcion: string;
    precio: number;
    disponibilidad: boolean;
}
