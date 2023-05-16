import { JwtService } from './../../services/utils/jwt.service';
import { StatisticsService } from './../../services/services/statistics.service';
import { statsInfoInputs } from './../../components/stats-info/stats-info.component';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ChartConfiguration, ChartOptions, ChartData, ChartDataset } from 'chart.js';
import { DatePipe } from '@angular/common';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

  accountInfo!: Array<statsInfoInputs>
  private accountBalance = 0;
  private highestDeposit = 0;
  private highestTransfer = 0;

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [

    ],
    datasets: [
      
    ]
  };

  lineChartOptions: ChartOptions<'line'> = {
  };
  
  


  startDate: Date = new Date();
  endDate: Date = new Date(); 
  now: Date = new Date(); 

  constructor(private statisticsService : StatisticsService,
              private jwtService: JwtService,
              private datepipe: DatePipe){}

  ngOnInit(): void {
    this.initializeAccountInfo();
    this.filterStatistics();
  }

  filterStatistics() {
    this.statisticsService.findSumTransactionsByDate({
      'user-id': this.jwtService.getUserId(),
      'start-date': this.datepipe.transform(this.startDate, 'yyyy-MM-dd') as string, 
      'end-date': this.datepipe.transform(this.endDate, 'yyyy-MM-dd') as string
    }).subscribe({
       next: (values) => {
        this.lineChartData = {
          datasets: [],
          labels: []
        };
        const chartDataSet: any = {
            data: [],
            label: '',
            fill: true,
            tension: 0.3,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            categoryPercentage: 0.6

          };
        const dataValues: Array<number> = [];
        for(let record of values) {
          this.lineChartData.labels!.push(record.transactionDate as string);
          dataValues.push(record.amount as number);
        }
        chartDataSet.data = dataValues;
        chartDataSet.label = 'Sum transactions by day';

        this.lineChartData.datasets.push(chartDataSet);
        this.lineChartOptions.responsive=true;
        this.lineChartOptions.maintainAspectRatio= false;
        // this.lineChartOptions.scales = {

        //   yAxes:{
        //     ticks:{
        //         stepSize: 100,
                
        //     }
        //   }
        // }
        

      }
    });
  }

  private async initializeAccountInfo(){

    this.accountBalance = await lastValueFrom(this.statisticsService.getAccountBalance(
      {
        'user-id': this.jwtService.getUserId()
      }));

    this.highestDeposit = await lastValueFrom(this.statisticsService.highestDeposit(
      {
          'user-id': this.jwtService.getUserId()
      }));
    this.highestTransfer = await lastValueFrom(this.statisticsService.highestTransfert(
      {
            'user-id': this.jwtService.getUserId()
      }));



    this.accountInfo = [
      {
        title: 'Account balance',
        amount:this.accountBalance,
        infoStyle:{'background-color': ''}
      },
      {
        title: 'Highest transfer',
        amount:this.highestTransfer,
        infoStyle:{'background-color': ''}
      },
      {
        title: 'Highest deposit',
        amount:this.highestDeposit,
        infoStyle:{'background-color': ''}
      }
    ]
  }
}
