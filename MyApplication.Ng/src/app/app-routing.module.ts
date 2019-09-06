
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdApartmentComponent } from './ad-apartment/ad-apartment.component';

const routes: Routes = [

  { path: '', component: AdApartmentComponent },
  { path: 'dashboard', component: AdApartmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
