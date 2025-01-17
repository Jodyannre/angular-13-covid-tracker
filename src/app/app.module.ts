import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CountryModule } from './country/country.module';
import { LiveModule } from './live/live.module';
import { SummaryModule } from './summary/summary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CountryModule,
    LiveModule,
    SummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
