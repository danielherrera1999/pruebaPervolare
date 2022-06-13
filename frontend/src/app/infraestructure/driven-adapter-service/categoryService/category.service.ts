import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Category, SelectCategory } from 'src/app/domain/models/Category/Category';
import { CategoryGateway } from 'src/app/domain/models/Category/Gateway/Category-gateway';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CategoryGateway {

  private _url = environment.API_URL;

  constructor(private http: HttpClient) { super(); }

  getAll(): Observable<Category[]> {
    return this.http.get<Array<Category>>(this._url+'/managerCategory');
  }

  getOnlySelect(): Observable<SelectCategory[]> {
    return this.http.get<Array<SelectCategory>>(this._url+'/selectCategory');
  }

  save(_cat: Category): Observable<void> {
    return this.http.post<any>(`${this._url}/addCategory`, _cat);
  }

  update(_cat: Category): Observable<void> {
    return this.http.post<any>(`${this._url}/editCategory`, _cat);
  }
}
