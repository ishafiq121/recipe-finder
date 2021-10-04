import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, name: 'Pizza' },
      { id: 12, name: 'Pasta' },
      { id: 13, name: 'Steak' },
      { id: 14, name: 'Salmon' },
      { id: 15, name: 'Chicken' },
      { id: 16, name: 'Cake' },
      { id: 17, name: 'Lasagna' },
      { id: 18, name: 'Pesto' },
      { id: 19, name: 'Garlic Bread' },
      { id: 20, name: 'Muffin' }
    ];
    return {recipes};
  }


  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 11;
  }
}


