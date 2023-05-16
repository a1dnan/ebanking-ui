import { Router } from '@angular/router';
import { JwtService } from './../../services/utils/jwt.service';
import { ContactService } from './../../services/services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ContactDto } from 'src/app/services/models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  contacts: Array<ContactDto> = [];
  userToDelete: any = -1;

  constructor(private contactService: ContactService,
              private jwtService: JwtService,
              private router: Router){}

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this.contactService.findAllContactsByUserId({'user-id': this.jwtService.getUserId()}).subscribe({
      next: (data) =>{
        this.contacts = data;
      }
    })
  }

  async update(id?: number){
    await this.router.navigate(['user','new-contact',id]);
  }

  delete(){
    if(this.userToDelete){
      this.contactService.deleteContact({'contact-id': this.userToDelete}).subscribe({
        next:()=>{
          this.getAllContacts();
        }
      })
    }
  }

}
