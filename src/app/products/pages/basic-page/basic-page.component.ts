import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  public nameLower: string = 'Esteban';
  public nameUpper: string = 'PRETEL';
  public fullName: string = 'eStEbAn pReTeL';

  public customDate: Date = new Date();




}
