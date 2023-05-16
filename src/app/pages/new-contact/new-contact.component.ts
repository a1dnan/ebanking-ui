import { JwtService } from './../../services/utils/jwt.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDto } from './../../services/models/contact-dto';
import { ContactService } from './../../services/services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit{

  contact: ContactDto = {}; 
  errorMessages: Array<string> = [];

  constructor(private contactService : ContactService,
              private router: Router,
              private jwtService: JwtService,
              private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    const contactId = this.activatedRoute.snapshot.params['idContact'];
    if(contactId){
      this.contactService.findContactById({'contact-id': contactId}).subscribe({
        next: (data) =>{
          this.contact = data;
        }
      })
    }
    
  }

  save(){
    this.errorMessages = [];
    this.contact.userId = this.jwtService.getUserId();
    this.contactService.saveContact({
      body : this.contact
    }).subscribe({
      next: async () =>{
        await this.router.navigate(['user/contacts'])
      },
      error: (err) =>{
        this.errorMessages = err.error.validationErrors
      }
    })
  }
}
