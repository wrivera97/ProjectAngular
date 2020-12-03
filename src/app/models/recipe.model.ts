import {Ingredient} from './ingredient.model';

export class Recipe {
  id?: number;
  name: string;
  instruction: string;
  state: string;
  ingredient: Ingredient;
  src: any;
  constructor() {
    this.id = 0;
    this.name = '';
    this.instruction = '';
    this.state = '';
    this.src = '';
    this.ingredient = new  Ingredient();
  }
}

