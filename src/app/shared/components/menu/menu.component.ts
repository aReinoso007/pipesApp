import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{
  public menuItems: MenuItem[] = []

  ngOnInit(){
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: PrimeIcons.DESKTOP,
        items:[
          {label: 'Textos y fechas', icon: PrimeIcons.ALIGN_LEFT},
          {label: 'Numeros', icon: PrimeIcons.DOLLAR},
          {label: 'No Comunes', icon: PrimeIcons.GLOBE}
        ]
    },
    {
      label: 'Pipes Personalizados',
      icon: PrimeIcons.COG,
      items:[
        {label: 'Otro', icon: PrimeIcons.COG},
        {label: 'Otro', icon: PrimeIcons.DOLLAR},
        {label: 'No Otro', icon: PrimeIcons.GLOBE}
      ]
    }
    ]
  }



}
