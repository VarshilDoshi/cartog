import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemsComponent } from './items/items.component';
import { SubtotalComponent } from './subtotal/subtotal.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    SubtotalComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    SlickCarouselModule
  ],
  exports: [
    ItemsComponent,
    SubtotalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
