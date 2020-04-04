import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';

@Component({
  templateUrl: './cart-detail.component.html'
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit(): void {
  }

}
