import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetAddnewComponent } from './pet-addnew/pet-addnew.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetAddnewComponent,
    PetDetailsComponent,
    PetEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
