import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthenticated: ReplaySubject<boolean> = new ReplaySubject<boolean>(0);
  constructor() { }

  login():void{
    this.isAuthenticated.next(true);
  }

  logout():void{
    this.isAuthenticated.next(false);
  }


}
