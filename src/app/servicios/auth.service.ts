import { Injectable } from '@angular/core';
import { Usuario } from './../Models/Usuario';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

/* import { signInWithPopup, GoogleAuthProvider, Auth } from "@angular/fire/auth";*/

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=

  private AUTH="https://identitytoolkit.googleapis.com/v1/accounts:";
  private apikey="AIzaSyBG_Ne7MIuOSJQQPgyuhGhnh5cWpblA3A0";

  private database="https://descubre-veracruz-default-rtdb.firebaseio.com/";
  userToken:string='';

  constructor(
    private http:HttpClient,
    /* private auth:Auth */
  ) { }

  /* login_google(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  async login_google(email:string, password:string){
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("Error al iniciar sesion: ", err);
      return null;
    }
  }*/

  login(usuario:Usuario){
    const authDatos={
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${this.AUTH}signInWithPassword?key=${this.apikey}`,authDatos)
    .pipe(
      map(
        (resp:any)=>{
          console.log(resp);
          this.almacenarToken(resp['idToken']);
          localStorage.setItem('uid', resp['localId']);
          return resp;
        }
      )
    );
  }
//metodo de registrar
  registrar(usuario:Usuario){
    const authDatos={
      ...usuario,
      returnSecureToken: true
    };

   return this.http.post(`${this.AUTH}signUp?key=${this.apikey}`,authDatos)
    .pipe(
      map(
        (resp:any)=>{
          console.log(resp);
          this.almacenarToken(resp['idToken']);
          localStorage.setItem('uid', resp['localId']);

          const datos={
            ...usuario,
            tipo:"normal",
            uid:resp['localId']
          };

          this.http.post(`${this.database}usuarios.json`,datos)
            .subscribe(res=>{
              console.log(res);
            });
            return resp;
        }
      )
    );
  }
  //metodo de salir o cerrar sesion
  logout(){
    /* localStorage.removeItem('token');
    localStorage.removeItem('uid'); */
    localStorage.clear();
  }
  //metodo de leer token
  leerToken(){
    if (localStorage.getItem('token')) {
      this.userToken=localStorage.getItem('token') || '';
    }else{
      return this.userToken='';
    }
    return this.userToken;
  }
  //metodo de autenticado
  autenticado():boolean{
    if(this.userToken.length < 2){
      return false;
    }
    let expira=Number(localStorage.getItem('expira'));
    let expiraFecha=new Date();
    expiraFecha.setTime(expira);

    if(expiraFecha > new Date()){
      return true;
    } else{
      return false;
    }
  }
//metodo de almecenar token
  private almacenarToken(idToken:string){
    this.userToken=idToken;
    localStorage.setItem('token',idToken);

    //fecha de expiracion
    let hoy=new Date();
    hoy.setSeconds(3600);
    console.log(hoy);

    localStorage.setItem('expira',hoy.getTime().toString());
  }
}
