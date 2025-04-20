import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Models/Usuario';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:Usuario={
    displayName:'',
    apellidos:'',
    email:'',
    password:''
  };

recordar=false;

  constructor(
    private servicio:AuthService,
    private ruta:Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('email_l'),localStorage.getItem('password_l')) {
      this.usuario.email=localStorage.getItem('email_l') || '';
      this.usuario.password=localStorage.getItem('password_l') || '';
      this.recordar=true;
    }
  }

  /* iniciar_google(){
    this.servicio.login_google()
      .then(resp =>{
        console.log(resp);
        this.ruta.navigateByUrl('/index');
      })
      .catch(error => console.log(error));
  } */

  iniciar(form:NgForm){
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick:false,
      icon:'info',
      text:'Espere por favor...',
      heightAuto:false
    });
    Swal.showLoading();
    this.servicio.login(this.usuario)
      .subscribe((resp: any)=>{
        console.log(resp);
        Swal.close();

        if(this.recordar){
          localStorage.setItem('email_l', this.usuario.email);
          localStorage.setItem('password_l', this.usuario.password);
        }

        this.ruta.navigateByUrl('/index');
      },err=>{
        console.log(err.error.error.menssage);
          Swal.fire({
            icon:'error',
            title:'Datos Incorrectos',
            text: err.error.error.menssage,
            heightAuto:false
          });
      });
  }

}
