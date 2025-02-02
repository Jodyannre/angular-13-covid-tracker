import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.sass']
})
export class CountryPageComponent implements OnInit {

  countriesData: any;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.fetchCountries().subscribe((res: any) => {
      this.countriesData = res.data
    })
  }

}
