import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServicesService } from './../../services/auth-services.service';
import { Usuarios } from './../../models/usuarios';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(public authService:AuthServicesService) { }

  ngOnInit(): void {
  }
  agregarUsuario(usuarioForm:NgForm){
    //console.log(usuarioForm.value);
    this.authService.agregarUsuario(usuarioForm.value)
    .subscribe(res=>{
      console.log("REGISTRADO CON EXITO");
    });
  }
}
