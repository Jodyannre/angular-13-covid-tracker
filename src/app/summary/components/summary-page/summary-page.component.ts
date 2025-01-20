import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.sass']
})
export class SummaryPageComponent implements OnInit, OnDestroy {

  constructor(private _dataService: DataService) { }

  covidData: any = {}

  ngOnInit(): void {
    const data = this._dataService.getAllData()
    .subscribe((data:any)=>{
      this.covidData = data.data
    })
  }

  ngOnDestroy(): void {
    console.log('destroyed')
  }

}
