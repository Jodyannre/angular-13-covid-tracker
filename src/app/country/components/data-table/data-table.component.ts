import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit, OnChanges {

  @Input() countriesData: any;

  countries: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.countriesData) {
      this.countries = this.countriesData
      console.log(this.countries)
    }
  }

}
