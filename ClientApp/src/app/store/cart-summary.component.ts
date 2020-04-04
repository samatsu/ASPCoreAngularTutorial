import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'store-cartsummary',
  templateUrl: './cart-summary.component.html'
})
export class CartSummaryComponent implements OnInit {

  constructor(private cart: Cart) {}

  ngOnInit(): void {
  }

  get itemCount(): number{
    return this.cart.itemCount;
  }
  get totalPrice(): number{
    return this.cart.totalPrice;
  }

}
