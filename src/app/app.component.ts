import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cartog';

  count$: Observable<number> | undefined;

  constructor(
    public router: Router,
  ) {
    this.getCartItems();
  }
  
  getCartItems() {
    if (localStorage.getItem('__crt')) {
      let cartItems = JSON.parse(localStorage.getItem('__crt') || '');
      this.count$ = cartItems.length;
    }
  }

  ngDoCheck() {
    this.getCartItems();
  }

  goToCart() {
    this.router.navigateByUrl('cart-page');
  }
}
