import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-t-place',
  templateUrl: './t-place.page.html',
  styleUrls: ['./t-place.page.scss'],
})
export class TPlacePage implements OnInit {

  comp : Comp [] = [
    {
      icon: 'information-circle-outline',
      nombre: 'Leer más',
      ruta: '/index',
      color:'light'
    },
    {
      icon: 'airplane-outline',
      nombre: 'Turismo',
      ruta: '/index',
      color:'light'
    },
    {
      icon: 'sparkles-outline',
      nombre: 'Festividades',
      ruta: '/index',
      color:'light'
    }
  ];

  constructor(
    private ruta:Router,
    private servicio:AuthService,
    public menu:MenuController
  ) { }

  ngOnInit() {
  }

  llamarMenu(){
    this.menu.open('menu');
  }

  cerrarMenu(){
    this.menu.close('menu');
  }

  salir(){
    this.servicio.logout();
    this.ruta.navigateByUrl('/entrance');
  }

}
interface Comp{
  icon:string;
  nombre:string;
  ruta:string;
  color:string;

}
