import { Component } from '@angular/core';
import { PrimeNGConfig} from 'primeng/api'

@Component({
  selector: 'shared-menu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private primengCofig: PrimeNGConfig){}
}
