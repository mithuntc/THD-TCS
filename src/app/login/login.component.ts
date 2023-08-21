import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  message="Login Failed!!!!!";
  loginCliked = 0;
  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
      
  }

  loginClick() {
    if(this.username=='abc@abc.com' && this.password=='1234'){
      this.authService.logInUser(true)
      this.authService.setLoginStatus(true);
      this.router.navigateByUrl('/dashboard');
      this.loginCliked = 0;
    } else {
      this.loginCliked = 1;
    }
  }

}
