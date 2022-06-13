import { Observable } from 'rxjs';
import { Category, SelectCategory } from "../Category";

export abstract class CategoryGateway {
  abstract getAll(): Observable<Array<Category>>;
  abstract getOnlySelect(): Observable<Array<SelectCategory>>;
  abstract save (_cat :Category) : Observable<void>;
  abstract update (_cat :Category) : Observable<void>;
}
