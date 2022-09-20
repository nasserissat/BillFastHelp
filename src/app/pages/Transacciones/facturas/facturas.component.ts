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
 // ****CODIGO DE PRUEBA PARA INSERTAR REGISTROS EN LA TABLA*****
  datas: Array<number> = [];
  // **** FIN CODIGO DE PRUEBA****

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
    // ****CODIGO DE PRUEBA PARA INSERTAR REGISTROS EN LA TABLA*****
    for(let i=0; i<305;i++){
      this.datas.push(i);
    }
    // **** FIN CODIGO DE PRUEBA****
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
  // TODO: hacer que el dropdown de acciones se cierre haciendo clic fuera de el.
  // CloseActionMenu(){
  //   if(this.isActionMenuOpened == true){
  //     this.isActionMenuOpened = !this.isActionMenuOpened;
  //   }
  // }
}


