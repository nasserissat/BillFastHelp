import { Component, ElementRef, OnInit, ViewChild, Renderer2, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @ViewChild('subMenuTransactions') subMenuTransactions!: ElementRef ;
  @ViewChild('subMenuCatalogue') subMenuCatalogue!: ElementRef ;
  @ViewChild('subMenuCustomerService') subMenuCustomerService!: ElementRef ;
  @ViewChild('subMenuWorkManagement') subMenuWorkManagement!: ElementRef ;
  @ViewChild('subMenuPlanification') subMenuPlanification!: ElementRef ;
  menu: any;
  expandedDictionary: Array<any> = [
    ['subMenuTransactions', false], ['subMenuCatalogue', false], ['subMenuCustomerService', false], ['subMenuWorkManagement', false], ['subMenuPlanification', false],
  ]

  @Input() open = true;

  constructor( private rederer2: Renderer2) { 
    
  }

  ngOnInit(): void {

  }

  
  Transacciones = {
    Facturas: {name:'Facturas', icon: 'fa-solid fa-file-invoice ml-0.5', url: '/transacciones/facturas'},
    Pagos: {name: 'Pagos', icon: 'fa-solid fa-receipt', url: ''},
    CambioDeDivisas:{name: 'Cambios de divisas', icon: 'fa-solid fa-file-zipper', url: ''},
    NotasDeCredito:{name: 'Notas de crédito', icon: 'fa-solid fa-money-check-dollar', url: ''},
    NotasDeDebito:{name: 'Notas de débito', icon: 'fa-solid fa-file-invoice-dollar', url: ''},
    Cargos:{name: 'Cargos', icon: 'fa-solid fa-file-invoice-dollar', url: ''},
    LotesDeFacturacion:{name: 'Lotes de facturación', icon: 'fa-solid fa-file-zipper', url: ''},
    ImpresionMasiva:{name: 'Impresión masiva', icon: 'fa-solid fa-file-zipper', url: ''},
  }

  Catalogos = {
    Clientes: {name:'Clientes', icon: 'fa-solid fa-id-badge', url: ''},
    Direcciones: {name: 'Direcciones', icon: 'fa-solid fa-signs-post', url: ''},
    Suscripciones:{name: 'Suscripciones', icon: 'fa-solid fa-scroll', url: ''},
    Productos:{name: 'Productos', icon: 'fa-solid fa-boxes-stacked', url: ''},
    Materiales:{name: 'Materiales', icon: 'fa-solid fa-boxes-stacked', url: ''},
  }

  ServicioAlCliente = {
    Tickets: {name:'Tickets', icon: 'fa-solid fa-ticket', url: ''},
    Reclamaciones: {name: 'Reclamaciones', icon: 'fa-solid fa-id-badge', url: ''},
    AcuerdosDePago:{name: 'Acuerdos de Pago', icon: 'fa-solid fa-file-signature', url: ''},
    CertificadosDeNoAdeudo:{name: 'Certificados de No Adeudo', icon: 'fa-solid fa-stamp', url: ''},
  }

  GestionDeTrabajo = {
    OrdenesDeTrabajo: {name: 'Ordenes de Trabajo', icon: 'fa-solid fa-folder', url: ''},
    TiposDeOrdenesDeTrabajo: {name: 'Tipos de Ordenes de Trabajo', icon: 'fa-solid fa-folder-tree', url: ''},
  }
  Planificacion = {
    Rutas: {name: 'Rutas', icon: 'fa-solid fa-signs-post', url: ''},
    TiposDeRutas : {name: 'Tipos de rutas', icon: 'fa-solid fa-sitemap', url: ''},
    CiclosDeFacturacion: {name: 'Ciclos de facturación', icon: 'fa-solid fa-arrows-spin', url: ''},
    ProgramacionDeFacturacion: {name: 'Programación de facturación', icon: 'fa-solid fa-gears', url: ''},
  }
 
  dropdownMenus(){
  }

  dropdownTransactionMenu(){
    this.subMenuTransactions.nativeElement.classList.toggle('hidden')
    this.expandedDictionary[0] = !this.expandedDictionary[0]
  }
  dropdownCatalogueMenu(){
    this.subMenuCatalogue.nativeElement.classList.toggle('hidden');
    this.expandedDictionary[1] = !this.expandedDictionary[1]
  }
  dropdownCustomerServiceMenu(){
    this.subMenuCustomerService.nativeElement.classList.toggle('hidden');
    this.expandedDictionary[2] = !this.expandedDictionary[2]
  }
  dropdownWorkManagementMenu(){
    this.subMenuWorkManagement.nativeElement.classList.toggle('hidden');
    this.expandedDictionary[3] = !this.expandedDictionary[3]

  }
  dropdownPlanificationMenu(){
    this.subMenuPlanification.nativeElement.classList.toggle('hidden');
    this.expandedDictionary[4] = !this.expandedDictionary[4]
  }

}
