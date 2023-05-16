import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/services/authentication.service';

import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from 'src/app/services/models';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  authRequest : AuthenticationRequest = {};

  errorMessages: Array<string> = [];

  constructor(private authenticationService: AuthenticationService,
              private router : Router){}

  ngOnInit(): void {
    
  }

  login(){
    this.errorMessages = [];
    this.authenticationService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: async (data) => {
        localStorage.setItem('token', data.token as string);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(data.token as string);
        if( decodedToken.authorities[0].authority === 'ROLE_ADMIN'){
          await this.router.navigate(['admin/dashboard'])
        } else{
          await this.router.navigate(['user/dashboard'])
        }
        
      },
      error: (err) => {
        this.errorMessages.push(err.error.errorMessage)
      }
    })
  }

}
