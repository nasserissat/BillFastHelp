import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { InformationPanelComponent } from './information-panel/information-panel.component';
import { PagesComponent } from './pages.component';
import { FacturasComponent } from './Transacciones/facturas/facturas.component';

const routes:  Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'panel-informativo', component: InformationPanelComponent},
            {path: 'transacciones/facturas', component: FacturasComponent},
            {path: '', redirectTo: '/panel-informativo', pathMatch: 'full'}
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule{}