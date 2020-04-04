import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../models/order.model';

@Component({
  templateUrl: './checkout-details.component.html',
})
export class CheckoutDetailsComponent implements OnInit {

  constructor(private router: Router,
              public order: Order) {
    if(order.products.length == 0){
      this.router.navigateByUrl("/cart");
    }
  }

  ngOnInit(): void {
  }

}
