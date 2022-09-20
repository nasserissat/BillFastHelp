import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationPanelComponent } from './information-panel/information-panel.component';
import { FacturasComponent } from './Transacciones/facturas/facturas.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';
import { ComponentsModule } from '../Components/components.module';
import { ObjToArrayPipe } from '../pipes/objToArray.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PagesComponent,
    FacturasComponent,
    InformationPanelComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ObjToArrayPipe,
  ],
  exports: [
    PagesComponent,
    FacturasComponent,
    InformationPanelComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ObjToArrayPipe,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    Ng2SearchPipeModule,
    RouterModule
    
  ]
})
export class PagesModule { }
