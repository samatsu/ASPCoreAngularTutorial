import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductSelectionComponent } from './product-selection.component';
import { CartSummaryComponent } from './cart-summary.component';
import { PaginationComponent } from './pagination.component';
import { ProductListComponent } from './product-list.component';
import { CategoryFilterComponent } from './category-filter.component';
import { RatingsComponent } from './ratings.component';
import { CartDetailComponent } from './cart-detail.component';
import { CheckoutDetailsComponent } from './checkout/checkout-details.component';
import { CheckoutPaymentComponent } from './checkout/checkout-payment.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckoutSummaryComponent } from './checkout/checkout-summary.component';
import { CheckoutConfirmationComponent } from './checkout/checkout-confirmation.component';



@NgModule({
  declarations: [ CategoryFilterComponent,
    ProductListComponent,
    PaginationComponent,
    CartSummaryComponent,
    ProductSelectionComponent,
    RatingsComponent,
    CartDetailComponent,
    CheckoutDetailsComponent,
    CheckoutPaymentComponent,
    CheckoutSummaryComponent,
    CheckoutConfirmationComponent],
  imports: [
    BrowserModule, FormsModule, RouterModule
  ],
  exports:[
    ProductSelectionComponent
  ]
})
export class StoreModule { }
