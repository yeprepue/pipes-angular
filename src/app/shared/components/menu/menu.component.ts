import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Textos y Fechas',
        icon: 'pi pi-aling-left',
        routerLink: '',
        items: [
          {
            label: 'Numeros',
            icon: 'pi pi-dollars',
            routerLink: 'numbers'
          },
          {
            label: 'Uncommon',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          }
        ]
      }
    ];
  }

}
