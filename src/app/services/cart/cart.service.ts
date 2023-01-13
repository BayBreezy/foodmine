import { Food } from './../../shared/models/Food';
import { Cart } from './../../shared/models/Cart';
import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/shared/models/CartItem';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  constructor(private toastr: ToastrService) {}

  addToCart(food: Food) {
    let cartItem = this.cart.items.find((f) => f.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(cartItem.food.id!, cartItem.quantity + 1);

      return;
    }
    this.cart.items.push(new CartItem(food));
    this.toastr.success(`Item was added to your cart`, 'Item added');
  }

  removeFromCart(id: number) {
    this.cart.items = this.cart.items.filter((i) => i.food.id !== id);
    this.toastr.info(`Item was removed from your cart`, 'Item removed');
  }

  changeQuantity(id: number, count: number) {
    let cartItem = this.cart.items.find((i) => i.food.id == id);
    if (!cartItem) return;
    cartItem.quantity = count;
    this.toastr.info(`Quantity updated to ${count}`, 'Item updated');
  }

  getCart() {
    return this.cart;
  }
}
