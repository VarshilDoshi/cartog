import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  cartItems: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param: any) => {
      this.getCartItemsById(param.id);
    });
  }

  getCartItemsById(productId: any) {
    let allProducts = this.shoppingCartService.getItems();
    allProducts.subscribe(product => {
      this.cartItems = product.filter(item => item.id == productId);
    })
  }

}
