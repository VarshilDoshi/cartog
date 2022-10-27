import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  cartItems: any;

  constructor(
  ) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    if (localStorage.getItem('__crt')) {
      this.cartItems = JSON.parse(localStorage.getItem('__crt') || '');
    }
  }

  deleteItem(item: any) {
    let storageProducts: any = JSON.parse(localStorage.getItem('__crt') || '');
    let products = storageProducts.filter((product: any) => product.id !== item.id );
    localStorage.setItem('__crt', JSON.stringify(products));
    this.getCartItems();
  }
}
