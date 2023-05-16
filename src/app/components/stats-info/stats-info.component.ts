import { Component, Input } from '@angular/core';

export interface statsInfoInputs{
  title :string,
  amount :number,
  infoStyle :object
}


@Component({
  selector: 'app-stats-info',
  templateUrl: './stats-info.component.html',
  styleUrls: ['./stats-info.component.css']
})
export class StatsInfoComponent {

  @Input() statsInputs!: statsInfoInputs;

}
