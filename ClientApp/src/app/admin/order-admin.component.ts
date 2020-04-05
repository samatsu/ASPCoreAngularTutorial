import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { Repository } from '../models/repository';


@Component({
  templateUrl: './order-admin.component.html'
})
export class OrderAdminComponent implements OnInit {

  constructor(private repo: Repository) { }

  ngOnInit(): void {
  }
  get orders() : Order[]{
    return this.repo.orders;
  }
  markShipped(order: Order){
    this.repo.shipOrder(order);
  }
}
