import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from './shared/services/data.resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'summary',
    pathMatch: 'full',
  }
  ,
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then((m) => m.SummaryModule),
    resolve: { summaryData: DataResolver},
  },
  {
    path: 'live',
    loadChildren: () => import('./live/live.module').then((m) => m.LiveModule),
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.module').then((m) => m.CountryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
