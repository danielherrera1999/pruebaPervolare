import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, SelectCategory } from '../models/Category/Category';
import { CategoryGateway } from '../models/Category/Gateway/Category-gateway';

@Injectable({
  providedIn: 'root'
})

export class GetCategoryUseCases {
  constructor( private _categoryGateWay: CategoryGateway) {}

  getAllCategory () : Observable <Array<Category>> {
    return this._categoryGateWay.getAll();
  }

  getSelectCategory () : Observable <Array<SelectCategory>> {
    return this._categoryGateWay.getOnlySelect();
  }

  saveCategory(category: Category): Observable<void>{
    return this._categoryGateWay.save(category);
  }

  updateCategory(category: Category): Observable<void>{
    return this._categoryGateWay.update(category);
  }
}
