import { Component } from '@angular/core';
import { Repository } from './models/repository';
import { Product } from './models/product.model';
import { Supplier } from './models/supplier.model';
import { ErrorHandlerService } from './error-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private lastError: string[];

  constructor(private repo: Repository,
              private errorService: ErrorHandlerService){
    this.errorService.errors.subscribe(error => {
      this.lastError = error;
    });
  }

  get error() : string[]{
    return this.lastError;
  }
  clearError(){
    this.lastError = null;
  }
  get product(): Product{
    return this.repo.product;
  }
  get products(): Product[]{
    return this.repo.products;
  }

  createProduct(){
    this.repo.createProduct(new Product(0, "X-Ray Scab Mask", "Watersports"
          , "See what the fish are hiding", 49.99, this.repo.products[0].supplier));
  }
  createProductAndSupplier(){
    let s = new Supplier(0, "Rocket Show Corp", "Boston", "MA");
    let p = new Product(0, "ROcket-Powered Shoes", "Running", "Set a new record", 100, s);
    this.repo.createProductAndSupplier(p, s);
  }
  replaceProduct(){
    let p = this.repo.products[0];
    p.name = "Modified Product";
    p.category = "Modified Category";
    p.price = 23.0;
    this.repo.replaceProduct(p);
  }
  replaceSupplier(){
    let s = new Supplier(3, "Modified Supplier", "New York", "NY");
    this.repo.replaceSupplier(s);
  }
  updateProduct(){
    let changes = new Map<string, any>();
    changes.set("name", "green Kayak");
    changes.set("supplier", null);
    this.repo.updateProduct(1, changes);
  }
  deleteProduct(){
    this.repo.deleteProduct(1);
  }
  deleteSupplier(){
    this.repo.deleteSupplier(2);
  }
}
