import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumerosComponent } from './numeros/numeros.component';

const routes: Routes = [
  {path: 'numeros', component:NumerosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
