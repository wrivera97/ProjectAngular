import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _http: HttpClient) { }
  // http methods
  get(url: string) {
    // get data from local json file
    return this._http.get(environment.API_URL + url);
  }
  post() {}
  put() {}
  delete() {}
}
