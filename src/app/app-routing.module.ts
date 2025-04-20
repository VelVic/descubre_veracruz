import { AuthGuard } from './guardias/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrance',
    pathMatch: 'full'
  },
  {
    path: 'entrance',
    loadChildren: () => import('./vistas/entrance/entrance.module').then( m => m.EntrancePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./vistas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./vistas/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./vistas/index/index.module').then( m => m.IndexPageModule),
    /* canActivate: [AngularFireAuthGuard] */
    canActivate:[AuthGuard]
  },
  {
    path: 'info',
    loadChildren: () => import('./vistas/info/info.module').then( m => m.InfoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'papantla',
    loadChildren: () => import('./vistas/papantla/papantla.module').then( m => m.PapantlaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'tuxpan',
    loadChildren: () => import('./vistas/tuxpan/tuxpan.module').then( m => m.TuxpanPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'tecolutla',
    loadChildren: () => import('./vistas/tecolutla/tecolutla.module').then( m => m.TecolutlaPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'zozocolco',
    loadChildren: () => import('./vistas/zozocolco/zozocolco.module').then( m => m.ZozocolcoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'm-festejos',
    loadChildren: () => import('./vistas/m-festejos/m-festejos.module').then( m => m.MFestejosPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'm-lugares',
    loadChildren: () => import('./vistas/m-lugares/m-lugares.module').then( m => m.MLugaresPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'm-gastronomia',
    loadChildren: () => import('./vistas/m-gastronomia/m-gastronomia.module').then( m => m.MGastronomiaPageModule),
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
