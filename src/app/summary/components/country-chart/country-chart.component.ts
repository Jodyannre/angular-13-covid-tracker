import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.sass']
})
export class CountryChartComponent implements OnInit, OnChanges {

  @Input() country: any = 'India'
  barChartData: ChartDataSets[] = [ { data: [65, 59, 80, 81, 56, 55, 40] } ]

  barChartLabels: Label[] = ['USA', 'UK', 'Brazil', 'China', 'Nicaragua', 'Panama', 'Ivory Coast']
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar'
  barChartLegend = true
  barChartPlugins = []

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.country)
  }

}
