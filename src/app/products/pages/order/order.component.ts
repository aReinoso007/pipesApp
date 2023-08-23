import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: [

  ]
})
export class OrderComponent implements OnInit{
  public isUpperCase: boolean = false;
  ngOnInit(): void {
  }

  toggleUpperCase(){
    this.isUpperCase = !this.isUpperCase;
  }

}
