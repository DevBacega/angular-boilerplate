import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BuscaDocentesComponent } from './pages/busca-docentes/busca-docentes.component';
import { ProducaoCientificaComponent } from './pages/producao-cientifica/producao-cientifica.component';
import { TemasTendenciasComponent } from './pages/temas-tendencias/temas-tendencias.component';
import { BuscaResultadoComponent } from './pages/busca-docentes/views/busca-resultado/busca-resultado.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  {
    path: 'dashboard/:id/busca-docentes',
    component: BuscaDocentesComponent,
  },
  {
    path: 'dashboard/:id/busca-docentes/:docente',
    component: BuscaResultadoComponent,
  },
  {
    path: 'dashboard/:id/producao-cientifica',
    component: ProducaoCientificaComponent,
  },
  {
    path: 'dashboard/:id/temas-tendencias',
    component: TemasTendenciasComponent,
  },
  { path: '**', redirectTo: 'home' },
];
