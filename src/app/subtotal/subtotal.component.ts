import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss']
})
export class SubtotalComponent implements OnInit {

  count: any;
  subTotal: any;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.getSubTotalAndCount();  
  }

  getSubTotalAndCount() {
    this.subTotal = this.shoppingCartService.getSubTotal();
    if (localStorage.getItem('__crt')) {
      let cartItems = JSON.parse(localStorage.getItem('__crt') || '');
      this.count = cartItems.length;
    }
  }

  ngDoCheck() {
    this.getSubTotalAndCount();
  }

}
