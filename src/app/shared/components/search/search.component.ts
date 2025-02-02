import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  searchTerm: String = ''

  @Output() countryToSearch = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }


  search() {
    this.countryToSearch.emit(this.searchTerm)
  }

}
