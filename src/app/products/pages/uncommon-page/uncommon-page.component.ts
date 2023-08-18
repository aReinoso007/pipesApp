import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.sass']
})
export class UncommonPageComponent {

  //i18nSelect
  public name: String = 'Alex';
  public gender: 'male' | 'female' = 'male';
  public invitationMap ={
    male:'invitarlo',
    female:'invitarla'
  }



  changeClient(): void {
    this.name ="Sharon"
    this.gender = 'female';
  }

  //i18Plural
  public clients: string[] =[ 'Maria','Alex', 'Edisson','Sharon','Chifle','Tuno'];
  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 personas esperando',
    'other':'tenemos # clientes esperando',
  }
  deleteClient(): void{
    this.clients.shift();
  }

  //KeyValue pipe
  public person ={
    name:'Alex',
    age:'25',
    address: 'Macas'
  }

  //async pipe
  public myObservable = interval(2000).pipe(
    tap( value=> console.log(value))
  );


  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
      this.person.name = 'Bebecito'
    }, 3500)
  })

}
