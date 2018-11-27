import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RajatAuthorComponent} from './rajat-author/rajat-author.component';

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  routes: Routes = [
  { path: 'author', component: RajatAuthorComponent }
];

}
