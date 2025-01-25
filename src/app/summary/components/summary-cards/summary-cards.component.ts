import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.sass']
})
export class SummaryCardsComponent implements OnInit {

  @Input() covidData: any = {}

  summaryData: any = {}

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.summaryData = this.covidData
  }

}
