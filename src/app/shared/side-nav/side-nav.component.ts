import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  Transacciones = {
    Facturas: {name:'Facturas', icon: 'fa-solid fa-file-invoice ml-0.5'},
    Pagos: {name: 'Pagos', icon: 'fa-solid fa-receipt'},
    CambioDeDivisas:{name: 'Cambios de divisas', icon: 'fa-solid fa-file-zipper'},
    NotasDeCredito:{name: 'Notas de crédito', icon: 'fa-solid fa-money-check-dollar'},
    NotasDeDebito:{name: 'Notas de débito', icon: 'fa-solid fa-file-invoice-dollar'},
    Cargos:{name: 'Cargos', icon: 'fa-solid fa-file-invoice-dollar'},
    LotesDeFacturacion:{name: 'Lotes de facturación', icon: 'fa-solid fa-file-zipper'},
    ImpresionMasiva:{name: 'Impresión masiva', icon: 'fa-solid fa-file-zipper'},
  }

  Catalogos = {
    Clientes: {name:'Clientes', icon: 'fa-solid fa-id-badge'},
    Direcciones: {name: 'Direcciones', icon: 'fa-solid fa-signs-post'},
    Suscripciones:{name: 'Suscripciones', icon: 'fa-solid fa-scroll'},
    Productos:{name: 'Productos', icon: 'fa-solid fa-boxes-stacked'},
    Materiales:{name: 'Materiales', icon: 'fa-solid fa-boxes-stacked'},
  }

  ServicioAlCliente = {
    Tickets: {name:'Tickets', icon: 'fa-solid fa-ticket'},
    Reclamaciones: {name: 'Reclamaciones', icon: 'fa-solid fa-id-badge'},
    AcuerdosDePago:{name: 'Acuerdos de Pago', icon: 'fa-solid fa-file-signature'},
    CertificadosDeNoAdeudo:{name: 'Certificados de No Adeudo', icon: 'fa-solid fa-stamp'},
  }

  GestionDeTrabajo = {
    OrdenesDeTrabajo: {name: 'Ordenes de Trabajo', icon: 'fa-solid fa-folder'},
    TiposDeOrdenesDeTrabajo: {name: 'Tipos de Ordenes de Trabajo', icon: 'fa-solid fa-folder-tree'},
  }
  Planificacion = {
    Rutas: {name: 'Rutas', icon: 'fa-solid fa-signs-post'},
    TiposDeRutas : {name: 'Tipos de rutas', icon: 'fa-solid fa-sitemap'},
    CiclosDeFacturacion: {name: 'Ciclos de facturación', icon: 'fa-solid fa-arrows-spin'},
    ProgramacionDeFacturacion: {name: 'Programación de facturación', icon: 'fa-solid fa-gears'},
  }



  constructor() { 
  }

  ngOnInit(): void {
  }
 

}
