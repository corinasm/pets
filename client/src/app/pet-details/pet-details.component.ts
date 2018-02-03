import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})


export class PetDetailsComponent implements OnInit {
  errors: any;
  fetchError: any;
	id: any;	
	skills: [any];
	selectedPet = {
		"name": "",
		"type": "",
		"description":"", 
		"skills": {
			"skill1": "",
			"skill2": "",
      "skill3": "",
      "like_count": 0,
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
			this.selectedPet = data['data']; 
      this.id  = this.selectedPet['_id'];
      // this.like_count = this.selectedPet['like-count'];
			console.log("Pet to list details:", this.selectedPet);
			console.log("id:", this.id);
		});
	} 

	deletePet(id) {  
		let obs = this._httpService.deletePet(id);
		obs.subscribe(data => {
		console.log("pet to delete:", data['data']);
		if (data['message'] == "DeleteOne success") {
			this.router.navigate(['/']);
		} else if (data['err']) {
			this.errors = data['err']
		}
	})	
	}
  // incrementLikes(id){ 
  //   this.like_count++;


  // }

}
