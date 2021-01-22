import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { DetailComponent } from './page/detail/detail.component';
import { EspaceCandidatComponent } from './page/espace-candidat/espace-candidat.component';
import { EspaceFormateurComponent } from './page/espace-formateur/espace-formateur.component';
import { RechercherFormationComponent } from './page/rechercher-formation/rechercher-formation.component';
import { RegesterComponent } from './page/regester/regester.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:AccueilComponent},
  { path: 'RechercherFormat', component:RechercherFormationComponent},
  { path: 'EspaceCandidat', component:EspaceCandidatComponent  },
  { path: 'EspaceFormateur', component:EspaceFormateurComponent  },
  { path: 'login/:type', component:LoginComponent  },
  {path:'detail/:id',component:DetailComponent},
  {path:'Regester',component:RegesterComponent},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
