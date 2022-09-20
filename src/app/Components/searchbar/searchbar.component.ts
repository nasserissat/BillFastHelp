import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor() { }
  textWritten: string = '';
  ngOnInit(): void {
    console.log(this.searchText)
  }
  @Output() searchTextEmited = new EventEmitter<string>();
  searchText(){
    this.searchTextEmited.emit(this.textWritten);
  }

}
