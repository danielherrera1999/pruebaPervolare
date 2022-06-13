import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category , SelectCategory} from 'src/app/domain/models/Category/Category';
import { GetCategoryUseCases } from 'src/app/domain/useCase/get-categories-use-case';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public response: Category[] = [];
  public select$?: Observable<SelectCategory[]>;
  public form!: FormGroup;
  type= 1;

  constructor(private _getCategoryUseCase: GetCategoryUseCases,private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null],
      code: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      idParentCategory: ['', Validators.required],
      createDate: [''],
      updateDate: [''],
    })
  }


  loadData(){
    this._getCategoryUseCase.getAllCategory().subscribe((res) => {
      this.response = res
    });

    this.select$ = this._getCategoryUseCase.getSelectCategory();
  }


  ngOnInit(): void {
    this.loadData();
  }

  onSubmit(){
    const category = this.form.value;
    const data = category as Category;

    this._getCategoryUseCase.saveCategory(data).subscribe((res) => {
      console.log(res);
      this.loadData();
    });
  }

  onUpdate(){
    const category = this.form.value;
    const data = category as Category;

    this._getCategoryUseCase.updateCategory(data).subscribe((res) => {
      console.log(res);
      this.loadData();
    });
  }

  clear(){
    this.type =1;
    this.form.controls['id'].setValue([null]);
    this.form.controls['code'].setValue(['']);
    this.form.controls['title'].setValue(['']);
    this.form.controls['description'].setValue(['']);
    this.form.controls['idParentCategory'].setValue([0]);
    this.form.controls['createDate'].setValue(['']);
    this.form.controls['updateDate'].setValue(['']);
  }

  edit(item: Category){
    this.type = 2;
    console.log(item);
    this.form.controls['id'].setValue(item.id);
    this.form.controls['code'].setValue(item.code);
    this.form.controls['title'].setValue(item.title);
    this.form.controls['description'].setValue(item.description);
    this.form.controls['idParentCategory'].setValue(item.idParentCategory);
    this.form.controls['createDate'].setValue(item.createDate);
    this.form.controls['updateDate'].setValue(item.updateDate);
  }
}
