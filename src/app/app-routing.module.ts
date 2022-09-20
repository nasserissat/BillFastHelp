import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { NotpagefoundComponent } from './404/notpagefound/notpagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { ComponentsRoutingModule } from './Components/components.routing';

const routes: Routes = [
  {path: 'register', component: PagesComponent},
  {path: 'login', component: PagesComponent},

  {path: '**', component: NotpagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    PagesRoutingModule,
    ComponentsRoutingModule
  ]
})
export class AppRoutingModule { }
