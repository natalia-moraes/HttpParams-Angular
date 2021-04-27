import { ReactiveSearchModule } from './reactive-search/reactive-search.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'busca-reativa',
    loadChildren:() => import('./reactive-search/reactive-search.module').then(m => m.ReactiveSearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
