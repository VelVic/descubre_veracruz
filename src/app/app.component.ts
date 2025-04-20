import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from './servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  comp : Comp [] = [
    {
      icon: 'home-outline',
      nombre: 'Inicio',
      ruta: '/index',
      color:'dark'
    },
    {
      icon: 'sparkles-outline',
      nombre: 'Festividades',
      ruta: '/m-festejos',
      color:'dark'
    },
    {
      icon: 'airplane-outline',
      nombre: 'Zonas Turisticas',
      ruta: '/m-lugares',
      color:'dark'
    },
    {
      icon: 'restaurant-outline',
      nombre: 'Gastronomia',
      ruta: '/m-gastronomia',
      color:'dark'
    },
    {
      icon: 'logo-ionic',
      nombre: 'Contacto',
      ruta: '/info',
      color:'primary'
    }
  ];

  constructor(
    public menu: MenuController,
    public servicio: AuthService,
    public ruta: Router
  ) {}

  llamarMenu(){
    this.menu.open('menu');
  }
  cerrarMenu(){
    this.menu.close('menu');
  }
  cerrarsesion(){
    this.servicio.logout();
    this.ruta.navigateByUrl('/entrance');
    this.menu.close('menu');
  }
}

interface Comp{
  icon:string;
  nombre:string;
  ruta:string;
  color:string;
}
