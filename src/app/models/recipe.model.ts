import {Ingredient} from './ingredient.model';

export class Recipe {
  id?: number;
  name: string;
  instruction: string;
  state: string;
  ingredients: Ingredient;
  src: any;
  constructor() {
    this.id = 0;
    this.name = '';
    this.instruction = '';
    this.state = '';
    this.src = '';
    this.ingredients = new  Ingredient();
  }
}

