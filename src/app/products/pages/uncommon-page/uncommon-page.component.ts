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
    'male':'invitarlo',
    'female':'invitarla'
  }
  changeClient(): void {
    this.name ="Sharon"
    this.gender = 'female';
  }
}
