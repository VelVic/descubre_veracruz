import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuxpanPage } from './tuxpan.page';

const routes: Routes = [
  {
    path: '',
    component: TuxpanPage
  },
  {
    path: 't-place',
    loadChildren: () => import('./t-place/t-place.module').then( m => m.TPlacePageModule)
  },
  {
    path: 't-fest',
    loadChildren: () => import('./t-fest/t-fest.module').then( m => m.TFestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuxpanPageRoutingModule {}
