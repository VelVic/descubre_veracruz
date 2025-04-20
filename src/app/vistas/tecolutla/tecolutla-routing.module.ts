import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecolutlaPage } from './tecolutla.page';

const routes: Routes = [
  {
    path: '',
    component: TecolutlaPage
  },
  {
    path: 'tt-fest',
    loadChildren: () => import('./tt-fest/tt-fest.module').then( m => m.TtFestPageModule)
  },
  {
    path: 'tt-place',
    loadChildren: () => import('./tt-place/tt-place.module').then( m => m.TtPlacePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecolutlaPageRoutingModule {}
