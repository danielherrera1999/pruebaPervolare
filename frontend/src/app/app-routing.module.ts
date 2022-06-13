import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './UI/pages/category/category.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  // { path: '', redirectTo: '/category', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
