import { Router } from '@angular/router';
import { JwtService } from './../../services/utils/jwt.service';
import { UserDto } from './../../services/models/user-dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  @Input() isAdmin:boolean = false;
  role = 'user';

  fullname: string = '';
  constructor(private jwtService: JwtService,
              private router: Router){}

  ngOnInit(): void {
    if(this.isAdmin){
      this.role = 'admin'
    }
    this.fullname = this.jwtService.getFullName();
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}
