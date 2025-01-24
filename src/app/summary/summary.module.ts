import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';
import { DecimalPipe } from '@angular/common';


@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardsComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
  ]
})
export class SummaryModule { }
