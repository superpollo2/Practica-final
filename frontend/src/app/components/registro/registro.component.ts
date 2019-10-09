import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/usuario.service';
import { NgForm,FormBuilder,FormGroup, Validators,FormControl} from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { createAotUrlResolver } from '@angular/compiler';

declare var N: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UsuarioService]
})

export class RegistroComponent implements OnInit {


  constructor(private usuarioService: UsuarioService) { }
  myForm: FormGroup; 

  ngOnInit() {
    this.getUsuarios();


  }

  

  addUsuario(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.usuarioService.putUsuario(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getUsuarios();

        });
    } else {
      const control = new FormControl('bad@', Validators.email);
      if (form.value.name == "") {
        alert("Debes llenar el campo nombres");
      } else if (form.value.apellido == "" ) {
        alert("Debes llenar el apellido");
      } else if (form.value.identificacion == "") {
        alert("Debes llenar el campo identificacion");
      } else if (form.value.correo == "") {
        alert("Debes llenar el campo Email" );
      } else if (form.value.pais == "") {
        alert("Debes llenar el campo Pais");
      } else if (form.value.contrasena == "") {
        alert("Debes llenar el campo nombres");
      } else {
        this.usuarioService.postUsuario(form.value)
          .subscribe(res => {
            this.getUsuarios();
            this.resetForm(form);
          });
      }

    }

  }


  getUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(res => {
        this.usuarioService.usuarios = res as Usuario[];
      });
  }

  editUsuario(usuario: Usuario) {
    this.usuarioService.selectedUsuario = usuario;
  }

  deleteUsuario(_id: string, form: NgForm) {
    if (confirm('Estas seguro que deseas borrar el usuario?')) {
      this.usuarioService.deleteUsuario(_id)
        .subscribe(res => {
          this.getUsuarios();
          this.resetForm(form);
        });
    }
  }
  
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }
  }


}

