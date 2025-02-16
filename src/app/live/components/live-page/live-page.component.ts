import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';
import { DataService } from 'src/app/shared/services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.sass']
})
export class LivePageComponent implements OnInit {

  liveData: any[] = []

  constructor(private _dataService: DataService) { }

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
    this._dataService.fetchDataCountriesRaw().subscribe((res: any) => {
      this.liveData = res.data.map((obj: any) => {
        return [obj.region.iso.toLowerCase().slice(0, 2), obj.confirmed]
      })

      this.chartOptions.series[0].data = this.liveData

      this.Highcharts.mapChart('container', this.chartOptions)
      console.log(this.liveData)
    })

  }

  translator (countryCode: string) {
    switch (countryCode) {
      case 'afg': return 'af'
      case 'dza': return 'dz'
      case 'alb': return 'al'
      default: return countryCode
    }
  }

}
