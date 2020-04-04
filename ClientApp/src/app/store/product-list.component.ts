import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'store-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  constructor(private repo: Repository, private cart: Cart) { }

  ngOnInit(): void {
  }

  get products() : Product[]{
    if(this.repo.products != null && this.repo.products.length > 0){
      let pageIndex = (this.repo.paginationObject.currentPage  - 1)
        * this.repo.paginationObject.productsPerPage;
        return this.repo.products.slice(pageIndex, pageIndex + this.repo.paginationObject.productsPerPage);
    }
    return null;
  }
  addToCart(product: Product){
    this.cart.addProduct(product);
  }
}
