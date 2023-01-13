import { Tag } from './../../shared/models/Tag';
import { Food } from '../../shared/models/Food';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  private foods: Food[] = [
    {
      id: 1,
      name: 'Awesome Salad',
      price: 20,
      cookTime: '40-50',
      favorite: false,
      stars: 4,
      origins: ['malaysia', 'india'],
      imageUrl:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=680&h=480&dpr=1',
      tags: ['salad', 'vegetables'],
    },
    {
      id: 2,
      name: 'Super Wrap',
      price: 50,
      cookTime: '7-14',
      favorite: true,
      stars: 2,
      origins: ['mexico'],
      imageUrl:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=680&h=480&dpr=1',
      tags: ['wrap', 'spicy'],
    },
    {
      id: 3,
      name: 'Glossy Pancakes',
      price: 26,
      cookTime: '20-25',
      favorite: false,
      stars: 3,
      origins: ['usa'],
      imageUrl:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=680&h=480&dpr=1',
      tags: ['breakfast', 'sweet'],
    },
    {
      id: 4,
      name: 'Pink Cereal',
      price: 75.25,
      cookTime: '5-8',
      favorite: false,
      stars: 4,
      origins: ['usa'],
      imageUrl:
        'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=680&h=480&dpr=1',
      tags: ['breakfast', 'sweet'],
    },
    {
      id: 5,
      name: 'Wombo Combo',
      price: 19.99,
      cookTime: '30-40',
      favorite: false,
      stars: 5,
      origins: ['china'],
      imageUrl:
        'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=680&h=480&dpr=1',
      tags: ['dinner'],
    },
    {
      id: 6,
      name: 'Shrimp Soup',
      price: 52.2,
      cookTime: '35-40',
      favorite: false,
      stars: 5,
      origins: ['china'],
      imageUrl:
        'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=680&h=480&dpr=1',
      tags: ['soup', 'dinner'],
    },
  ];

  getAll(): Food[] {
    return this.foods;
  }

  getAllFoodByTag(tag: string) {
    if (tag.toLowerCase() == 'all' || !tag) {
      return this.foods;
    }
    return this.foods.filter((f) =>
      f.tags?.map((t) => t.toLowerCase())?.includes(tag.toLowerCase())
    );
  }

  getFoodById(id: string) {
    return this.foods.find((f) => f.id === parseInt(id));
  }

  getAllTags() {
    const allTags: Tag[] = [];
    this.foods.forEach((food) => {
      if (!food.tags) return;
      food.tags.forEach((tag) => {
        const existingTag = allTags.find((t) => t.name === tag);
        if (existingTag) {
          existingTag.count++;
        } else {
          allTags.push({ name: tag, count: 1 });
        }
      });
    });
    return allTags;
  }
}
