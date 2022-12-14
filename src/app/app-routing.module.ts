import { EditskillComponent } from './components/h-s/editskill/editskill.component';
import { NewskillComponent } from './components/h-s/newskill/newskill.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/editexperiencia/editexperiencia.component';
import { NewExperienciaComponent } from './components/experiencia/newexperiencia/newexperiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto/editproyecto.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto/newproyecto.component';

const routes: Routes = [
  {path:'',component: HomeComponent },
  {path:'login',component: LoginComponent },
  {path:'nuevaexp',component: NewExperienciaComponent },
  {path:'editexp/:id',component: EditExperienciaComponent },
  {path:'nuevaedu',component: NeweducacionComponent },
  {path:'editedu/:id',component: EditeducacionComponent },
  {path:'nuevoproy',component: NewproyectoComponent },
  {path:'editproy/:id',component: EditproyectoComponent },
  {path:'nuevaha',component: NewskillComponent },
  {path:'editha/:id',component: EditskillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
