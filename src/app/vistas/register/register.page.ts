import { AuthService } from './../../servicios/auth.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
  }

  registrar(form:NgForm){

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
    this.servicio.registrar(this.usuario)
      .subscribe(resp=>{
        console.log(resp);
        Swal.close();

        if(this.recordar){
          localStorage.setItem('email_r', this.usuario.email);
        }

        this.ruta.navigateByUrl('/index');
      },err=>{
        console.log(err.error.error.menssage);
          Swal.fire({
            icon:'error',
            title:'Error al aunteticar',
            text: err.error.error.menssage,
            heightAuto:false
          });
      })
  }
}
