import { CartItem } from './../../shared/models/CartItem';
import { Cart } from './../../shared/models/Cart';
import { CartService } from './../../services/cart/cart.service';
import { Component } from '@angular/core';

import deleteIcon from '@iconify-icons/fluent/delete-24-regular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart!: Cart;
  deleteIcon = deleteIcon;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id!);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, count: string) {
    const quantity = parseInt(count);
    this.cartService.changeQuantity(cartItem.food.id!, quantity);
    this.setCart();
  }
}
