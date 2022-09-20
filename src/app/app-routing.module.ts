import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {path: 'informationpanel', component: PagesComponent},
  {path: '', redirectTo: 'informationpanel', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
