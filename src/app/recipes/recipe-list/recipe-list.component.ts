import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Grunt', 'This is grunt logo', 'https://amsterdam.luminis.eu/wp-content/uploads/2014/12/grunt_logo.jpg'),
    new Recipe('bower', 'This is bower logo', 'https://bower.io/img/bower-logo.png')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onWasSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
