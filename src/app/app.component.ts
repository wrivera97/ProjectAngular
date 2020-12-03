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
  question: boolean;
  recipes: any;
  selectedRecipe: any;
  updateRecipe: any;
  newRecipe: Recipe;
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }
ngOnInit() {
    /*this.arrayRecipes = [
      { id: 0, name: '', instruction: '', state: '' , src: '', ingredients: ''}
      ];*/
    this.selectedRecipe = new Recipe();
    this.newRecipe = new Recipe();
    this.updateRecipe = new Recipe();
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
      });
  }
  postRecipe() {
    this.newRecipe.src = 'assets/img/example_img.jpg'; // default img not path for news recipes
    this.newRecipe.state = 'not read'; // default state false for news recipes
    this.recipeService.post('recipes', this.newRecipe).subscribe(
      (reponse) => {
        if (reponse) {alert('You successfully added a new recipe');
                      this.newRecipe = new Recipe();
                      this.getRecipes();
        } else {
          alert('There is an error');
        }

    });
  }
  deleteRecipe(dataRecipe) {
    this.question = confirm('¿Are you sure?');
    if (this.question) {
      this.recipeService.delete('recipes/' + dataRecipe.id).subscribe(
        (responde) => {
        });
  }
  }
  putRecipe(dataRecipe: Recipe) {
    this.updateRecipe = dataRecipe;
    this.recipeService.put( 'recipes/' + this.updateRecipe.id , this.updateRecipe).subscribe(
      (response) => {
        if (response) {
          alert('update successfully');
          this.getRecipe(this.selectedRecipe);
        }
      }
    );
  }
}
