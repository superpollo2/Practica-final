import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {
  data = {
    correo: '',
    password: ''
  }
  constructor(private ingreso: UsuarioService, private router:Router) {

  }

  ngOnInit() {
  }
   


 
  signIn() {
    
    this.ingreso.ingresar(this.data).subscribe((rest: any) => {
      if (rest.result == true) {
        localStorage.setItem('idusuario',rest.data._id);
        window.location.replace('/user/perfil');
        console.log(rest)
      }else {
        console.log(rest.result)
        alert("el correo o la contraseña son incorrectos")
      }
    }
    )
  }
  
  rr(){
    window.location.replace('/user/registro');
  }

  






}
