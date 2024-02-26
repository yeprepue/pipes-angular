import { NgModule } from '@angular/core';
// import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';

import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import { ButtonModule } from 'primeng/button';







@NgModule({
  exports: [
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule
  ],
})
export class PrimeNgModule { }
