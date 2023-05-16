import { AuthenticationService } from './../../services/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/services/models';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user: UserDto={
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  };

  errorMessages : Array<string> = [];

  constructor(private authService: AuthenticationService,
              private router: Router){}


  ngOnInit(): void {
    
  }

  register(){
    this.errorMessages = [];
    this.authService.register(
      {
        body: this.user
      }).subscribe({
      next:(data) =>{
        this.router.navigate(['register-confirmation']);
      },
      error:(err)=>{
        this.errorMessages = err.error.validationErrors;
      }
    })
  }

}
