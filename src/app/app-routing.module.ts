
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ConfirmaCriacaoComponent } from './confirma-criacao/confirma-criacao.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{
    path:'home',
    component: MainComponent
},
{
    path: 'criar-nota',
    component: ConfirmaCriacaoComponent
},
{
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
