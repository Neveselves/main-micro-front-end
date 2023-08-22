import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mf1Component } from './components/mf1/mf1.component';

const routes: Routes = [
  {
    path: '',
    component: Mf1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mf1RoutingModule {}
