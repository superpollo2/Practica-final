import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {
nombre:string;
apellido: string;
identificacion:string;
correo:string;
pais:string;



  constructor( private usuarioservice:UsuarioService) { }

  ngOnInit() {
    this.traerdatosusuario()
    this.actualizarinformacion()
  
  }

  traerdatosusuario(){
    let idd = localStorage.getItem('idusuario')
    this.usuarioservice.onedatos(idd).subscribe((res:any)=>{
    console.log(res)
    this.nombre= res.name;
    this.apellido=res.apellido;
    this.identificacion=res.identificacion;
    this.correo=res.correo;
    this.pais=res.pais;
 
 })
  }

  actualizarinformacion() {
    const h = this.traerdatosusuario();

    console.log(h)
  }


  
}
