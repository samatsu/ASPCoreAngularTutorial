import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html'
})
export class ProductTableComponent implements OnInit {

  constructor(private repo:Repository, private router: Router) { }

  ngOnInit(): void {
  }
  selectProduct(id: number){
    this.repo.getProduct(id);
    this.router.navigateByUrl("/detail");
  }
  get products(): Product[]{
    return this.repo.products;
  }
}
