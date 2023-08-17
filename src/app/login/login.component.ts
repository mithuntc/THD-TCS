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


  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
      
  }

  loginClick() {
    this.authService.logInUser(true)
        this.authService.setLoginStatus(true);
        this.router.navigateByUrl('/dashboard')
  }

}
