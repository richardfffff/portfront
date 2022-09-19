import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArgprogComponent } from './components/argprog/argprog.component';
import { HeaderComponent } from './components/header/header.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { HSComponent } from './components/h-s/h-s.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SocialRedesComponent } from './components/social-redes/social-redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDmiComponent } from './components/acerca-dmi/acerca-dmi.component';

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
    AcercaDmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
