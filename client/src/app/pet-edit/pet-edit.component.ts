import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-pet-edit',
	templateUrl: './pet-edit.component.html',
	styleUrls: ['./pet-edit.component.css']
})

export class PetEditComponent implements OnInit {
	errors: any;
	id: any;	
	skills: [any];
	editedPet = {
		"name": "",
		"type": "",
		"description":"", 
		"skills": {
			"skill1": "",
			"skill2": "",
			"skill3": "",
		}
	}

	constructor(
		private _httpService: HttpService,
		private route: ActivatedRoute,
		private router: Router
		) {   }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
		this.getOnePet(params['id']);
		})		
	}

	getOnePet(id) {  
		let obs = this._httpService.getOnePet(id);
		obs.subscribe(data => {
			console.log("Got data from getOnePet:", data);
			this.editedPet = data['data']; 
			this.id  = this.editedPet['_id'];
			console.log("Pet to edit:", this.editedPet);
			console.log("id:", this,id);
		});
	} 

	editPet() {
		let obs = this._httpService.editPet(this.editedPet);
        obs.subscribe(data => {
			console.log("Editing/data we got back:", data['message']);
          	if (data['message'] == "Success") {
            	this.editedPet = {
						"name": "",
						"type": "",
						"description":"", 
						"skills": {
							"skill1": "",
							"skill2": "",
							"skill3": "",
						}
				}	
				this.router.navigate(['/details/',this.id]);
          	} else if (data['err']) {
				console.log("Updating Errors:", data['err'] ) ; 
				this.errors = data['err']
				}
		})
    }
}



