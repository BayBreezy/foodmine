import { CartItem } from './CartItem';
export class Cart {
  items: CartItem[] = [];

  get totalPrice() {
    let total = 0;
    total = this.items.reduce((prev, curr) => prev + curr.price, total);
    return total;
  }
}
