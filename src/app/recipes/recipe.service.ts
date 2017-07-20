import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';


export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Grunt', 'This is grunt logo', 'https://amsterdam.luminis.eu/wp-content/uploads/2014/12/grunt_logo.jpg'),
    new Recipe('bower', 'This is bower logo', 'https://bower.io/img/bower-logo.png')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
