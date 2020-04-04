import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';

@Component({
  templateUrl: './checkout-confirmation.component.html',
})
export class CheckoutConfirmationComponent implements OnInit {

  constructor(private router: Router, public order: Order) { 
    if(!order.submitted){
      router.navigateByUrl("/checkout/step3");
    }
  }

  ngOnInit(): void {
  }

}
