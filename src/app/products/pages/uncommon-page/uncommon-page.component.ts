import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18n select
  public name: string = 'Fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap ={
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  public clientsMap ={
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # clientes esperando.'
  }

  changeClient():void{
    this.name = 'Melisa';
    this.gender ='female';
  }

  //i18Prural
  public clients:string[]=['maria','eduardo','javier','melisa', 'katerin', 'danilo', 'julian','juan','martha', 'camilo']

  deleteClient():void{
    this.clients.shift();
  }

  //KeyValuePipe
  public person ={
    name:'Esteban',
    age: 36,
    address: 'Bogota, Colombia'
  }
  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value)),
  );

  public promiseValue: Promise<string> = new Promise(( resolve, reject) => {
    setTimeout (()=>{
      resolve ('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa');
    }, 3500);
  })

}
