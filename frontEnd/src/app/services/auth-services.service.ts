import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from './../models/usuarios';
import { JwtResponse } from './../models/jwt-response';
import{tap} from'rxjs/operators';
import { Observable,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  readonly url_api='http://localhost:3000/api/auth/registrar';
  readonly url_api_login='http://localhost:3000/api/auth/login';
  private token:string;
  autenticarToken= new BehaviorSubject(false);
  constructor(private http:HttpClient) { }

  agregarUsuario(usuario:Usuarios):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.url_api,usuario)
    .pipe(tap(
      (res:JwtResponse)=>{
        if(res){
          //GUARDAR TOKENS
          this.guardarToken(res.datosUsuarios.accessToken,res.datosUsuarios.expiresIn);
        }
      }
    ));
  }
  //LOGIN EMPLEADO
  loginUsuario(usuario:Usuarios):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.url_api_login,usuario)
    .pipe(tap(
      (res:JwtResponse)=>{
        if(res){
          //GUARDAR TOKENS
          this.guardarToken(res.datosUsuarios.accessToken,res.datosUsuarios.expiresIn);
        }
      }
    ));
  }
  private guardarToken(token:string,expireIn:string):void{
    //GUARDO EL TOKEN EN EL LOCALSTORAGE
    localStorage.setItem("ACCESS_TOKEN",token);
    //GUARDO LA EXPEDICION DE LA SESION
    localStorage.setItem("EXPIRES_IN",expireIn);
    this.token=token;
  }
  //DEVOLVER EL TOKEN OBTENIDO
  private getToken():string{
    if(!this.token){
      this.token=localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
  logout():void{
    this.token='';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }
}
