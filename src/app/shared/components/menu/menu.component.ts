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
          {
            label: 'Textos y fechas',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink:'/'
          },
          {
            label: 'Numeros',
            icon: PrimeIcons.DOLLAR,
            routerLink: '/numbers'
          },
          {
            label: 'No Comunes',
            icon: PrimeIcons.GLOBE,
            routerLink:'/uncommon'
          }
        ]
    },
    {
      label: 'Pipes Personalizados',
      icon: PrimeIcons.COG,
      items:[
        {label: 'Custom pipes',
        icon: PrimeIcons.COG,
        routerLink:'/custom'
      },

      ]
    }
    ]
  }



}
