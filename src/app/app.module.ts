import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './Components/searchbar/searchbar.component';
import { ObjToArrayPipe } from './pipes/objToArray.pipe';
import { SharedModule } from './shared/shared.module';
import { SideNavComponent } from './shared/side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    SideNavComponent,
    ObjToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
