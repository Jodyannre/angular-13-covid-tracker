import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmed-by-country',
  templateUrl: './confirmed-by-country.component.html',
  styleUrls: ['./confirmed-by-country.component.sass']
})
export class ConfirmedByCountryComponent implements OnInit {

  @Output() country = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  passCountryData(searchTerm: string) {
    this.country.emit(searchTerm);
  } 

}
