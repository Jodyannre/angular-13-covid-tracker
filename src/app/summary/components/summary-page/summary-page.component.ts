import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.sass']
})
export class SummaryPageComponent implements OnInit {

  covidData: any = {}
  covidDataCountries: any = {}
  countryToSearch: string = 'Japan'

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.covidData = this.route.snapshot.data['summaryData'].covidData.data
    this.covidDataCountries = this.route.snapshot.data['summaryData'].covidDataCountries
   
    console.log(this.covidData)
    console.log(this.covidDataCountries)
  }

  searchForACountry(searchTerm: string) {
    this.countryToSearch = searchTerm
  }


}
