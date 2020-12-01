import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from './models/recipe.model';
import {RecipeService} from './shared/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recipes: any ;
  selectedRecipe: any;
  recipe: Recipe;


  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }
ngOnInit() {
    this.selectedRecipe = new Recipe();
    this.getRecipes();
}
  getRecipes() {
    this.recipeService.get('recipes').subscribe(
      (response) => {
        this.recipes = response;
      }
    );
  }
  getRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.recipeService.get('recipes?id=' + this.selectedRecipe).subscribe(
      (response)   => {
    this.selectedRecipe  = response;
    console.log(response);
      });
  }
  postRecipe() {
    this.recipeService.post();
  }
  deleteRecipe() {
    this.recipeService.delete();
  }
  updateRecipe() {
    this.recipeService.put();

  }
}

