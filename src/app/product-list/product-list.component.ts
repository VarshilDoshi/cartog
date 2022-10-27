import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs';
import { Item } from '../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  items$: Observable<Item[]> | undefined;
  slideConfig = {};
  cartItems: Observable<Item[]> | undefined;
  addedInCart: any;

  constructor(
    private shoppingCartService: ShoppingCartService,
  ) { }

  ngOnInit(): void {
    this.items$ = this.shoppingCartService.getItems();
    this.slideConfig = { slidesToShow: 3, slidesToScroll: 3, arrows: true, };
  }

  slickInit(e: any) {
    // console.log('slick initialized');
  }
  breakpoint(e: any) {
    // console.log('breakpoint');
  }
  afterChange(e: any) {
    // console.log('afterChange');
  }
  beforeChange(e: any) {
    // console.log('beforeChange');
  }

  addProductToCart(cartItems: any) {
    let products = [];
    if (localStorage.getItem('__crt')) {
      products = JSON.parse(localStorage.getItem('__crt') || '');
    }
    products.push(cartItems);
    localStorage.setItem('__crt', JSON.stringify(products));
    this.addedInCart = cartItems.sku.title;
    setTimeout(() => {
      this.addedInCart = '';  
    }, 5000);
  }
}
