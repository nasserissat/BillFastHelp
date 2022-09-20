import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss'],
  host: {
    '(document:click)': 'onClickOutside($event)',
  },
})
export class FacturasComponent implements OnInit {
  @ViewChild("CloseActionMenu") dropdownAction!: ElementRef;
  isActionMenuOpened: boolean = false;
  textOfSearchBar: string = ''
  anulado: string = 'Anulado';
  facturado: string = 'Facturado';
 // ****CODIGO DE PRUEBA PARA INSERTAR REGISTROS EN LA TABLA*****
  invoiceRecords: Array<any> = [
    {
      id: 77551,
      name: 'OSCAR CUEVA',
      billingAddress: 'C/CENTRAL SABANA PERDIDA NO. 0 BRISA DE LOS PALMARES SABANA PERDIDA NO. 0 SECTOR 3 (SABANAPERDIDA) SABANA PERDIDA, SANTO DOMINGO NORTE, SANTO DOMINGO, Postal Code 11201',
      date: '05 dic, 2022',
      total: 100.00,
      status: 'Anulado',
    },
    {
      id: 77557,
      name: 'CARTY TAVERAS SANTOS',
      billingAddress: 'C/ JOSE BREA PEÃ‘A 2 DE ENERO NO. 11 SECTOR 3 (SABANAPERDIDA) SABANA PERDIDA, SANTO DOMINGO NORTE, SANTO DOMINGO, Postal Code 11201',
      date: '05 dic, 2022',
      total: 150.00,
      status: 'Anulado',
    },
    {
      id: 77548,
      name: 'NIDIA ESTHELA CIPRIAN	',
      billingAddress: 'C/ LAS MERCEDES NO. 7 BRISA DE LOS PALMARES NO. 7 SECTOR 12 (SABA NAPERDIDA NORTE) SABANA PERDIDA, SANTO DOMINGO NORTE, SANTO DOMINGO, Postal Code 11201',
      date: '05 dic, 2022',
      total: 100.00,
      status: 'Anulado',
    },
    {
      id: 77555,
      name: 'JUSTINA POLANCO SANCHEZ	',
      billingAddress: 'C/ SAN JOSE BREA PEÃ‘A 2 DE ENERO NO. 7 SECTOR 3 (SABANAPERDIDA) SABANA PERDIDA, SANTO DOMINGO NORTE, SANTO DOMINGO, Postal Code 11201',
      date: '05 dic, 2022',
      total: 150.00,
      status: 'Anulado',
    },
    {
      id: 77561,
      name: 'MARIA SANCHEZ	',
      billingAddress: 'C/ PROYECTO BRISA DE LOS PALMARES NO. 7 SECTOR 12 (SABA NAPERDIDA NORTE) SABANA PERDIDA, SANTO DOMINGO NORTE, SANTO DOMINGO, Postal Code 11201	',
      date: '05 dic, 2022',
      total: 100.00,
      status: 'Facturado',
    },
    {
      id: 77544,
      name: 'RAMON MARIANO	',
      billingAddress: 'C/ PROYECTO NO. 4 BRISA DE LOS PALMARES NO. 4 SECTOR 12 (SABA NAPERDIDA NORTE) SABANA PERDIDA, SANTO DOMINGO NORTE, SANTO DOMINGO, Postal Code 11201	',
      date: '05 dic, 2022',
      total: 100.00,
      status: 'Facturado',
    },
    {
      id: 77553,
      name: 'GABRIELA PERALTA',
      billingAddress: 'C/CENTRAL SABANA PERDIDA NO. 0 BRISA DE LOS PALMARES SABANA PERDIDA NO. 0 SECTOR 3 (SABANAPERDIDA) SABANA PERDIDA, SANTO DOMINGO NORTE, SANTO DOMINGO, Postal Code 11201',
      date: '05 dic, 2022',
      total: 100.00,
      status: 'Anulado',
    },
    {
      id: 77558,
      name: 'DANIS PENA	',
      billingAddress: 'C/ RESPALDO 22 BRISAS DEL PALMARES NO. 2 SECTOR 12 (SABA NAPERDIDA NORTE) SABANA PERDIDA, SANTO DOMINGO NORTE, SANTO DOMINGO, Postal Code 11201',
      date: '05 dic, 2022',
      total: 100.00,
      status: 'Anulado',
    },
    {
      id: 77563,
      name: 'CARTY TAVERAS SANTOS	',
      billingAddress: 'C/CENTRAL SABANA PERDIDA NO. 0 BRISA DE LOS PALMARES SABANA PERDIDA NO. 0 SECTOR 3 (SABANAPERDIDA) SABANA PERDIDA, SANTO DOMINGO NORTE, SANTO DOMINGO, Postal Code 11201',
      date: '05 dic, 2022',
      total: 100.00,
      status: 'Facturado',
    },
    {
      id: 77567,
      name: 'MARIA ALTAGRACIA MARTINEZ',
      billingAddress: 'C/CENTRAL SABANA PERDIDA NO. 0 BRISA DE LOS PALMARES SABANA PERDIDA NO. 0 SECTOR 3 (SABANAPERDIDA) SABANA PERDIDA, SANTO DOMINGO NORTE, SANTO DOMINGO, Postal Code 11201',
      date: '05 dic, 2022',
      total: '100.00',
      status: 'Facturado',
    },
    
  ];
  // **** FIN CODIGO DE PRUEBA****

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
    
  }

  toogleActionMenu(): void{
    this.isActionMenuOpened = !this.isActionMenuOpened;
  }
  // ESTO HACE QUE AL HACER CLICK EN EL DOCUMENT SE CIERE EL DROPDOWN DE <TD>Acciones</TD> DE LA TABLA.
  onClickOutside(event: { target: any; }){
    const ActionMenu = this.dropdownAction.nativeElement;
    if(!this._eref.nativeElement.contains(event.target))
    ActionMenu.classList.add('hidden');
  }
  reciveTextEmited(info: string){
    this.textOfSearchBar = info
  }
  // TODO: hacer que el dropdown de acciones se cierre haciendo clic fuera de el.
  // CloseActionMenu(){
  //   if(this.isActionMenuOpened == true){
  //     this.isActionMenuOpened = !this.isActionMenuOpened;
  //   }
  // }
}


