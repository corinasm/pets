import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetListComponent } from './pet-list/pet-list.component';
import { PetAddnewComponent } from './pet-addnew/pet-addnew.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

const routes: Routes = [
  { path: '',component: PetListComponent },
  { path: 'new',component: PetAddnewComponent },
  { path: 'edit/:id',component: PetEditComponent },
  { path: 'details/:id',component: PetDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/'},
  //{path: '**', component: RestaurantListComponent }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
