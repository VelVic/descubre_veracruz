import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PapantlaPage } from './papantla.page';

const routes: Routes = [
  {
    path: '',
    component: PapantlaPage
  },
  {
    path: 'p-fest',
    loadChildren: () => import('./p-fest/p-fest.module').then( m => m.PFestPageModule)
  },
  {
    path: 'p-place',
    loadChildren: () => import('./p-place/p-place.module').then( m => m.PPlacePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapantlaPageRoutingModule {}
