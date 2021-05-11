import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServicesService } from './../../services/auth-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public authServie: AuthServicesService) {}

  ngOnInit(): void {}
  loginUsuario(formLogin): void {
    this.authServie.loginUsuario(formLogin.value).subscribe(
      (res) => {
        console.log(res);
        console.log('Bienvenido usuario');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
