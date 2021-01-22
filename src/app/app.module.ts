import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';
import { FooterComponent } from './home/footer/footer.component';
import { BarComponent } from './bar/bar.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RechercherFormationComponent } from './page/rechercher-formation/rechercher-formation.component';
import { EspaceCandidatComponent } from './page/espace-candidat/espace-candidat.component';
import { EspaceFormateurComponent } from './page/espace-formateur/espace-formateur.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import {HttpClientModule} from '@angular/common/http'; 
import { ReactiveFormsModule } from "@angular/forms";
import { DetailComponent } from './page/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { ErourComponent } from './page/erour/erour.component';
import { RegesterComponent } from './page/regester/regester.component';
import { MustMatchDirective } from './_helpers/must-match.directive';
import {NgxPaginationModule} from 'ngx-pagination';
// import { MustMatchDirective } from './_helpers/must-match.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BarComponent,
    LoginComponent,
    NotfoundComponent,
    RechercherFormationComponent,
    EspaceCandidatComponent,
    EspaceFormateurComponent,
    AdminComponent,
    AccueilComponent,
    DetailComponent,
    ErourComponent,
    RegesterComponent,
    // RegisterComponent,
     MustMatchDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
