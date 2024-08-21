import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'servicos', component: ServicesComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redireciona para Home ou uma página 404

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
