import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { OverviewComponent } from './overview.component';
import { ProductAdminComponent } from './product-admin.component';
import { OrderAdminComponent } from './order-admin.component';
import { FormsModule } from '@angular/forms';
import { ProductEditorComponent } from './product-editor.component';
import { AuthModule } from '../auth/auth.module';
import { AuthenticationComponent } from '../auth/authentication.component';
import { AuthenticationGuard } from '../auth/authentication.guard';

const routes : Routes = [
  { path: "login", component: AuthenticationComponent},
  { path: "", component: AdminComponent,
    canActivateChild: [AuthenticationGuard],
    children: [
      { path: "products", component: ProductAdminComponent},
      { path: "orders", component: OrderAdminComponent},
      { path: "overview", component: OverviewComponent},
      { path: "", component: OverviewComponent}    
    ]
  }
];
 

@NgModule({
  declarations: [AdminComponent, OverviewComponent, ProductAdminComponent, OrderAdminComponent, ProductEditorComponent ],
  imports: [
    CommonModule, FormsModule, RouterModule, RouterModule.forChild(routes), AuthModule
  ]
})
export class AdminModule { }
