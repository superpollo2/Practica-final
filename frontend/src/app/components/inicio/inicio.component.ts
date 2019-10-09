import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var $: any


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  productos: any
  
  constructor(private productoservice: ProductoService) { }
  data = {
    codigo: '',
  }

  ngOnInit() {
    this.datos()

    $(document).ready(function () {
      $('.carousel').carousel({
        interval: 2000
      })
    });
  }


  datos() {
    this.productoservice.getProductos().subscribe((rest: any) => {
      this.productos = rest;
      console.log(rest)
    })
  }



}
