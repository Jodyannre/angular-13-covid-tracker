import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.sass']
})
export class TopCountriesComponent implements OnInit {

  @Input() covidDataCountries: any

  constructor() { }

  ngOnInit(): void {
  }

}
