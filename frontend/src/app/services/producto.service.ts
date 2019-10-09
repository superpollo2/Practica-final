import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  selectedProducto: Producto;
  productos: Producto[];

  readonly URL_API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
    this.selectedProducto = new Producto();
  }

  postProducto(producto: Producto) {
    return this.http.post(this.URL_API+'/productos', producto);
  }

  getProductos() {
    return this.http.get(this.URL_API + "/productos");
  }

  
  guardar(data: any){
    return this.http.post(this.URL_API+"/holi" , data)
  }

  //putProducto(producto: Producto) {
   // return this.http.put(this.URL_API + `/${producto.id}`, producto);
 // }

 //oneproduc(id:string){
 // return this.http.get(this.URL_API+"/one/"+id);
//}


}
