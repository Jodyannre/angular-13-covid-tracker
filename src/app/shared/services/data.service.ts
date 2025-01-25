import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchAllData() {
    return this.http.get('https://covid-api.com/api/reports/total')
  }

  fetchDataCountries() {
    return this.http.get('https://covid-api.com/api/reports?&per_page=40')
    .pipe(
      map((res: any) => {
        return res.data.filter((item:any) => {
          return item
        }).sort( (a:any, b:any) => {
          return b.confirmed - a.confirmed
        }).slice(0, 5)
      })
    )
  }

}
