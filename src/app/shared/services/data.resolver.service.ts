import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any>{

  constructor(private _dataService: DataService) { }

  resolve(): Observable<any> {
      return forkJoin({
          covidData: this._dataService.fetchAllData(),
          covidDataCountries: this._dataService.fetchDataCountries(),
      })
  }

}