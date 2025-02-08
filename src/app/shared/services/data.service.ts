import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  fetchAllData() {
    return this.http.get(`${this.apiUrl}/reports/total`)
  }


  fetchCountries() {
    return this.http.get(`${this.apiUrl}//regions`)
  }

  getCountryDataByDate(country: string, date: string) {
    return this.http.get(`${this.apiUrl}/reports?date=${date}&iso=${country}&per_page=20`)
  }

  fetchDataCountries() {
    const res = this.http.get(`${this.apiUrl}/reports?&per_page=20`)
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
