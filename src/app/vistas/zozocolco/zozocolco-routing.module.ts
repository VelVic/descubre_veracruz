import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZozocolcoPage } from './zozocolco.page';

const routes: Routes = [
  {
    path: '',
    component: ZozocolcoPage
  },
  {
    path: 'z-fest',
    loadChildren: () => import('./z-fest/z-fest.module').then( m => m.ZFestPageModule)
  },
  {
    path: 'z-place',
    loadChildren: () => import('./z-place/z-place.module').then( m => m.ZPlacePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZozocolcoPageRoutingModule {}
