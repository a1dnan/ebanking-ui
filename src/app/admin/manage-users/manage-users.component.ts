import { UserDto } from './../../services/models/user-dto';
import { UserService } from './../../services/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit{

  customers : Array<UserDto> = [];
  showOnlyInactiveUsers = false;


constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.findAllUsers().subscribe({
      next : (data) =>{
        this.customers = data;
      }
    })
  }

  filterUsers(){
    if(this.showOnlyInactiveUsers){
      this.customers = this.customers.filter((c) => !c.active);
    }else{
      this.getAllUsers();
    }
  }

  changeUserState(active ?: boolean, id ?: number){
    if(!active){
      this.userService.validateAccount({'user-id': id as number}).subscribe({
        next : (data) =>{
          this.getAllUsers();
        }
      });
    } else{
      this.userService.invalidateAccount({'user-id': id as number}).subscribe({
        next : (data) =>{
          this.getAllUsers();
        }
      });
    }
  }

}
