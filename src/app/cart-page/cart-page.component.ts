import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  constructor(
    public router: Router,
  ) {
  }

  goToCart() {
    this.router.navigateByUrl('item');
  }

}
