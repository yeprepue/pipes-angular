import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponets } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';




@NgModule({
  declarations: [MenuComponets],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [ MenuComponets],
  providers: [],
})
export class SharedModule { }
