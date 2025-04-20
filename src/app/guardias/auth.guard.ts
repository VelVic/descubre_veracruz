import { Injectable } from '@angular/core';
import { AuthService } from './../servicios/auth.service';
import { Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private servicio:AuthService,
    private ruta:Router
   ){}

  canActivate():boolean{
    if(this.servicio.autenticado()){
      return true;
    }else{
      this.ruta.navigateByUrl('/entrance');
      return false;
     }
    }
}
