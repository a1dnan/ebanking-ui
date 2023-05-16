import { JwtService } from './../../services/utils/jwt.service';
import { TransactionDto } from './../../services/models/transaction-dto';
import { TransactionService } from './../../services/services/transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{

  transactions: Array<TransactionDto> = [];

  constructor(private transactionService: TransactionService,
              private jwtService: JwtService){}

  ngOnInit(): void {
    this.transactionService.findAllTransactionsByUserId({'user-id': this.jwtService.getUserId()}).subscribe({
      next: (data) =>{
        this.transactions = data;
      }
    })
  }

}
