import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductSelectionComponent} from './store/product-selection.component';
import { CartDetailComponent } from './store/cart-detail.component';
import { CheckoutDetailsComponent } from './store/checkout/checkout-details.component';
import { CheckoutPaymentComponent } from './store/checkout/checkout-payment.component';
import { CheckoutSummaryComponent } from './store/checkout/checkout-summary.component';
import { CheckoutConfirmationComponent } from './store/checkout/checkout-confirmation.component';

const routes: Routes = [
  { path: "checkout/step1", component: CheckoutDetailsComponent},
  { path: "checkout/step2", component: CheckoutPaymentComponent},
  { path: "checkout/step3", component: CheckoutSummaryComponent},
  { path: "checkout/confirmation", component: CheckoutConfirmationComponent},
  { path: "checkout", redirectTo:"checkout/step1", pathMatch: "full"},
  { path: "cart", component: CartDetailComponent},
  { path: "store/:category/:page", component: ProductSelectionComponent},
  { path: "store/:categoryOrPage", component: ProductSelectionComponent},
  { path: "store", component: ProductSelectionComponent},
  { path: "", redirectTo: "/store", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
