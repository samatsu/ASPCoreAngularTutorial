import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';

@Component({
  templateUrl: './checkout-summary.component.html',
})
export class CheckoutSummaryComponent implements OnInit {

  constructor(private router: Router, public order: Order) {
    if(order.payment.cardNumber == null
        || order.payment.cardExpiry == null
        || order.payment.cardSecurityCode == null){
      router.navigateByUrl("/checkout/step2");
    }
  }

  ngOnInit(): void {
  }
  submitOrder(){
    this.order.submit();
    this.router.navigateByUrl("/checkout/confirmation");
  }
}
