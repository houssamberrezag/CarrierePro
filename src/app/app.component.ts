import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CarrierePro';
  isAuthenticated:boolean = false;
  constructor(private loginservice:LoginService, private router :Router){

  }

  ngOnInit(): void {
     // this.loginservice.isAuthenticated.subscribe(v=>this.isAuthenticated = v);
  }

  isSignInPage(): boolean {
    return this.router.url.startsWith('/login') 
  }
}
