import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: [

  ]
})
export class OrderComponent implements OnInit{
  public isUpperCase: boolean = false;
  public heroes: Hero[]=[
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Linterna',
      canFly: true,
      color: Color.greeen
    },
  ]

  ngOnInit(): void {
  }

  toggleUpperCase(){
    this.isUpperCase = !this.isUpperCase;
  }

}
