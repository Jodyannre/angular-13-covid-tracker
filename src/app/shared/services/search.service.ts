import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  countries = new Subject<any>()

  constructor() { }

  setCountries(countries: any) {
    this.countries.next(countries)
  }

  getCountries() {
    return this.countries.asObservable()
  }
}
