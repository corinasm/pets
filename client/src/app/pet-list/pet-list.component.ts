import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-pet-list',
	templateUrl: './pet-list.component.html',
	styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  	pets: [any];
	errors: any;
	fetchError:string;
	id: any;
	pet = {
		"name": "",
		"type": "",
	}
  	constructor(
		private _httpService: HttpService,
		private route: ActivatedRoute,
		private router: Router
		) { }

  	ngOnInit() {
    	this.listPets();
  	}
	  
  	listPets() {
		let obs = this._httpService.listPets();
		obs.subscribe(data => {
			if(data['message'] == "Success") {
				this.pets = data['data']; 
			} else {
				this.fetchError =" Something went wrong; we could not get the pets at this time."
			}	
	}); 
  }     
}
