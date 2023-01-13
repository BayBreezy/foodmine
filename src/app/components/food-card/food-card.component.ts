import { CartService } from './../../services/cart/cart.service';
import { Food } from './../../shared/models/Food';
import { Component, Input } from '@angular/core';
import heartFilled from '@iconify-icons/fluent/heart-24-filled';
import heartRegular from '@iconify-icons/fluent/heart-24-regular';
import starFilled from '@iconify-icons/fluent/star-24-filled';
import clockIcon from '@iconify-icons/fluent/clock-24-regular';
import cartIcon from '@iconify-icons/fluent/cart-24-regular';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
})
export class FoodCardComponent {
  @Input() food!: Food;

  constructor(private cartService: CartService) {}

  heartFilled = heartFilled;
  heartRegular = heartRegular;
  starFilled = starFilled;
  clockIcon = clockIcon;
  cartIcon = cartIcon;

  addToCart() {
    this.cartService.addToCart(this.food);
  }
}
