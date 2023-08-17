import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loggedInStatus = JSON.parse(localStorage.getItem('usersData') || ('false'))
  constructor() { }

  setLoginStatus(value:any) {
    this.loggedInStatus = value;
    localStorage.setItem('usersData', 'true');
  }

  get LoginStatus() {
    return JSON.parse(localStorage.getItem('usersData') || 
    this.loggedInStatus.toString());
  }

  logInUser(data:any) {
    localStorage.setItem('usersData',data);
  }

  logOutUser(data:any) {
    localStorage.removeItem('usersData');
  }
}
