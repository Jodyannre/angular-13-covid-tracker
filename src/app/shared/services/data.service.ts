import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchAllData() {
    return this.http.get('https://covid-api.com/api/reports/total')
  }

  fetchDataCountries() {
    const res = this.http.get('https://covid-api.com/api/reports?&per_page=40')
    .pipe(
      map((res: any) => {
        return res.data.filter((item:any) => {
          return item
        })
      })
    )
    /* top 5 filter by confirmed cases*/
    const confirmed = res.pipe(
      map((res: any) => {
        return res.sort((a: any, b: any) => {
          return b.confirmed - a.confirmed
        }).slice(0, 5)
      })
    )
    /* top 5 filter by deaths */
    const deaths = res.pipe(
      map((res: any) => {
        return res.sort((a: any, b: any) => {
          return b.deaths - a.deaths
        }).slice(0, 5)
      })
    )

    /* top 5 filter by recovered */
    const recovered = res.pipe(
      map((res: any) => {
        return res.sort((a: any, b: any) => {
          return b.recovered - a.recovered
        }).slice(0, 5)
      })
    )

    return forkJoin({
      confirmed,
      deaths,
      recovered
    })
  }

}
