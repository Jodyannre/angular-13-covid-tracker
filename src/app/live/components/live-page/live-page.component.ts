import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';


@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.sass']
})
export class LivePageComponent implements OnInit {

  constructor() { }

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';

  chartOptions: Highcharts.Options | any = {
    chart: {
      map: worldMap 
    },
    title: 'Covid 19 world data',
    subtitle: 'Confirmed cases live',
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    Legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [{
      type: 'map',
      name: 'Covid 19 data',
      states: {
        hover: {
          color: '#a4edba'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}' 
      },
      allAreas: false,
      data: [
        ["fo", 0],
        ["um", 1],
        ["us", 2],
        ["jp", 3],
        ["sc", 4],
      ]
    }
  ]
  }

  ngOnInit(): void {
  }

}
