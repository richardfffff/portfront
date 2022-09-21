import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArgprogComponent } from './components/argprog/argprog.component';
import { HeaderComponent } from './components/header/header.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HSComponent } from './components/h-s/h-s.component';
import { HttpClientModule, JsonpInterceptor } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SocialRedesComponent } from './components/social-redes/social-redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDmiComponent } from './components/acerca-dmi/acerca-dmi.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia/editexperiencia.component';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia/newexperiencia.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto/editproyecto.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto/newproyecto.component';
import { EditskillComponent } from './components/h-s/editskill/editskill.component';
import { NewskillComponent } from './components/h-s/newskill/newskill.component';

@NgModule({
  declarations: [
    AppComponent,
    ArgprogComponent,
    HeaderComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HSComponent,
    HomeComponent,
    LoginComponent,
    ProyectosComponent,
    SocialRedesComponent,
    BannerComponent,
    AcercaDmiComponent,
    EditeducacionComponent,
    NeweducacionComponent,
    EditexperienciaComponent,
    NewexperienciaComponent,
    EditproyectoComponent,
    NewproyectoComponent,
    EditskillComponent,
    NewskillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
