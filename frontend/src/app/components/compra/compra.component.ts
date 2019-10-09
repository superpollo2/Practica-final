import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  img:string;
  nombre: string;
  codigo:string;
  precio:string;
  especificacion:string;
  disponibilidad:string;

  constructor(private productoservice: ProductoService) { }

  ngOnInit() {

  }


}
