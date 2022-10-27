import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item, ShoppingCart } from '../models';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCart$: BehaviorSubject<ShoppingCart>;

  constructor(
    private httpClient: HttpClient
  ) {

    // Initialize shopping cart with default value
    this.shoppingCart$ = new BehaviorSubject<ShoppingCart>({ id: '', items: [], subTotal: 0 });

    // Load shopping cart data
    this.getShoppingCart();
  }

  public getShoppingCart() {
    this.httpClient.get<ShoppingCart>('/assets/data.json').subscribe((shoppingCart) => {
      this.shoppingCart$.next(shoppingCart);
    },
      () => {
        console.error('Shopping cart data could not be loaded.');
      });
  }

  getItems(): Observable<Item[]> {
    return this.shoppingCart$.pipe(
      pluck('items')
    );
  }

  getSubTotal() {
    let cartItems: any;
    if (localStorage.getItem('__crt')) {
      cartItems = JSON.parse(localStorage.getItem('__crt') || '');
      const subTotal = cartItems.map((item: any) => item.quantity * item.sku.price)
        .reduce((p: any, c: any) => p + c, 0);
      return subTotal;
    }
  }
}
