import { Route, Router } from '@angular/router';
import { TransactionDto } from './../../services/models/transaction-dto';
import { JwtService } from './../../services/utils/jwt.service';
import { StatisticsService } from './../../services/services/statistics.service';
import { TransactionService } from './../../services/services/transaction.service';
import { ContactService } from './../../services/services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ContactDto } from 'src/app/services/models';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit{

  contacts : Array<ContactDto> = [];
  transactions: TransactionDto = {};
  accountBalance: number = 0;

  constructor(private contactService: ContactService,
              private transactionService: TransactionService,
              private statisticsService: StatisticsService,
              private jwtService: JwtService,
              private router: Router){}

  ngOnInit(): void {
    this.getAllContacts();
    this.statisticsService.getAccountBalance({'user-id': this.jwtService.getUserId()}).subscribe({
      next: (data) =>{
        this.accountBalance = data;
      }
    })
  }

  getAllContacts(){
    this.contactService.findAllContactsByUserId({'user-id': this.jwtService.getUserId()}).subscribe({
      next: (data) =>{
        this.contacts = data;
      }
    })
  }

  save(){
    this.transactions.userId = this.jwtService.getUserId();
    this.transactionService.saveTransaction({
      body: this.transactions
    }).subscribe({
      next: (data) =>{
        this.router.navigate(['user','transactions']);
      }
    })
  }

}
