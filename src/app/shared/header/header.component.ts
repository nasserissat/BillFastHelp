import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(document:click)': 'onClickOutside($event)',
  },
})
export class HeaderComponent implements OnInit {
  @ViewChild("AsDropdown") Dropdown!: ElementRef;
  @ViewChild("AsSideNav") SideNav!: ElementRef;

  isLanguageMenuOpened: boolean = false;
  isUserMenuOpened: boolean = false;
  constructor(
    private _eref: ElementRef
    ) { }

  ngOnInit(): void {
  }

  toggleUserMenu(): void{
    if(this.isLanguageMenuOpened == true){
      this.isLanguageMenuOpened = !this.isLanguageMenuOpened;
    }
    this.isUserMenuOpened = !this.isUserMenuOpened;
    
  }
  toogleLanguageMenu():void{
    if(this.isUserMenuOpened == true){
      this.isUserMenuOpened = !this.isUserMenuOpened;
    }
    this.isLanguageMenuOpened = !this.isLanguageMenuOpened;
   
  }
  onClickOutside(event: { target: any; }){
    const AsDropdown = this.Dropdown.nativeElement;
    if(!this._eref.nativeElement.contains(event.target))
    AsDropdown.classList.add('hidden');
  }

}
