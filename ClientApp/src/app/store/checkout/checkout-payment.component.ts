import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html'
})
export class CheckoutPaymentComponent implements OnInit {

  constructor(private router: Router,
              public order: Order) {
    if(order.name == null || order.address == null){
      router.navigateByUrl("/checkout/step1");
    }
  }

  ngOnInit(): void {
  }

}
