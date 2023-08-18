import { Component } from '@angular/core';

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

}
