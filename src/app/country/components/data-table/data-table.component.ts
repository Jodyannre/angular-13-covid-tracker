import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit, OnChanges, OnDestroy {

  @Input() countriesData: any;

  subscription = new Subscription()

  countries: any[] = [];

  constructor(
    private _searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.subscription = this._searchService.getCountries().subscribe((data: any) => {
      this.countries = data
    })
  }

  ngOnChanges(): void {
      this.countries = this.countriesData
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
