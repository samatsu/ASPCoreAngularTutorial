import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductSelectionComponent} from './store/product-selection.component';


const routes: Routes = [
  { path: "store/:category/:page", component: ProductSelectionComponent},
  { path: "store/:categoryOrPage", component: ProductSelectionComponent},
  { path: "", redirectTo: "/store", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
