import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './components/star/star.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent,
    CommonModule
  ]
})
export class SharedModule { }
