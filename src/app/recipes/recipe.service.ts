import { EventEmitter , Injectable} from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Grunt',
      'This is grunt logo',
      'https://amsterdam.luminis.eu/wp-content/uploads/2014/12/grunt_logo.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'bower',
      'This is bower logo',
      'https://bower.io/img/bower-logo.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meats', 1)
      ])
  ];

  constructor(private slService: ShoppingListService){};

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
