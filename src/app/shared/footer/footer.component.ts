import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() sidenavOpen = true;
  @Output() sidenav = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
}
