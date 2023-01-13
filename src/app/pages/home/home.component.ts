import { Tag } from './../../shared/models/Tag';
import { Food } from '../../shared/models/Food';
import { FoodService } from '../../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import searchIcon from '@iconify-icons/fluent/search-24-regular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  searchIcon = searchIcon;

  foods: Food[] = [];
  tags: Tag[] = [];
  searchTerm: string = '';
  currentTag: string = 'All';

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
    this.tags = this.foodService.getAllTags();
    this.route.queryParams.subscribe((v) => {
      const search = v['search'];

      if (!search) {
        this.foods = this.foodService.getAll();
        return;
      }
      this.foods = this.foodService
        .getAll()
        .filter((f) => f.name.toLowerCase().includes(search.toLowerCase()));
    });
  }

  searchFood() {
    const search = this.searchTerm || '';
    if (!search) {
      this.foods = this.foodService.getAll();
      return;
    }
    this.router.navigate([], { queryParams: { search } });
    let s = search.toLowerCase();
    this.foods = this.foodService
      .getAll()
      .filter((f) => f.name.toLowerCase().includes(s));
  }

  setTag(tagName: string) {
    this.currentTag = tagName;
    this.foods = this.foodService.getAllFoodByTag(tagName);
  }
}
