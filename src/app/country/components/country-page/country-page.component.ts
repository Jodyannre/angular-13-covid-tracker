import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.sass']
})
export class CountryPageComponent implements OnInit {

  countriesData: any;

  constructor(
    private _dataService: DataService,
    private _searchService: SearchService
  ) { }

  ngOnInit(): void {
    this._dataService.fetchCountries().subscribe((res: any) => {
      this.countriesData = res.data
    })
  }

  searchCountry(country: string) {
    const countries = this.countriesData.filter((c: any) => c.name.toLowerCase().includes(country.toLowerCase()))
    this._searchService.setCountries(countries)
  }

}
