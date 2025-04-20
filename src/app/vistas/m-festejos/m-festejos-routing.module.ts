import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MFestejosPage } from './m-festejos.page';

const routes: Routes = [
  {
    path: '',
    component: MFestejosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MFestejosPageRoutingModule {}
