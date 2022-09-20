import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchbarComponent,
  ],
  exports: [SearchbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
