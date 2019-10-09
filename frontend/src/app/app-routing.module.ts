import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { CompraComponent } from './components/compra/compra.component';



const routes: Routes = [
    { path: "", redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: InicioComponent},
    {path: 'user/sign-in', component: SignInComponent},
    {path: 'user/registro', component: RegistroComponent},
    {path: 'user/perfil', component: PerfilusuarioComponent}, // paginas de vista para usuario
    {path: 'compra', component:CompraComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
