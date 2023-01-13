import { CartService } from './../../services/cart/cart.service';
import { Food } from './../../shared/models/Food';
import { FoodService } from './../../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import heartFilled from '@iconify-icons/fluent/heart-24-filled';
import heartRegular from '@iconify-icons/fluent/heart-24-regular';
import starFilled from '@iconify-icons/fluent/star-24-filled';
import clockIcon from '@iconify-icons/fluent/clock-24-regular';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
})
export class FoodComponent {
  food!: Food;

  heartFilled = heartFilled;
  heartRegular = heartRegular;
  starFilled = starFilled;
  clockIcon = clockIcon;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    route.params.subscribe((v) => {
      const id = v['id'];
      if (id) {
        const item = foodService.getFoodById(id);
        if (item) {
          this.food = item;
        } else {
          router.navigate(['']);
        }
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
}
