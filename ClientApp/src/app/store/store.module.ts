import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductSelectionComponent } from './product-selection.component';
import { CartSummaryComponent } from './cart-summary.component';
import { PaginationComponent } from './pagination.component';
import { ProductListComponent } from './product-list.component';
import { CategoryFilterComponent } from './category-filter.component';
import { RatingsComponent } from './ratings.component';



@NgModule({
  declarations: [ CategoryFilterComponent,
    ProductListComponent,
    PaginationComponent,
    CartSummaryComponent,
    ProductSelectionComponent,
    RatingsComponent],
  imports: [
    BrowserModule
  ],
  exports:[
    ProductSelectionComponent
  ]
})
export class StoreModule { }
