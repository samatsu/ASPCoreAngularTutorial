import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './models/model.module';
import { ProductTableComponent } from './product-table/product-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
