import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './Components/searchbar/searchbar.component';
import { InformationPanelComponent } from './pages/information-panel/information-panel.component';
import { PagesComponent } from './pages/pages.component';
import { ObjToArrayPipe } from './pipes/objToArray.pipe';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FacturasComponent } from './pages/Transacciones/facturas/facturas.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    PagesComponent,
    SideNavComponent,
    ObjToArrayPipe,
    InformationPanelComponent,
    HeaderComponent,
    FooterComponent,
    FacturasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
