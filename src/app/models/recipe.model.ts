import {Ingredient} from './ingredient.model';

export class Recipe {
  id: number;
  name: string;
  instruction: string;
  state: string;
  ingredients: any;
  src: any;

  constructor() {
    this.name = '';
    this.instruction = '';
    this.state = '';
    this.src = '';
  }
}

