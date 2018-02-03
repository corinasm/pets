import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-pet-addnew',
	templateUrl: './pet-addnew.component.html',
	styleUrls: ['./pet-addnew.component.css']
})

export class PetAddnewComponent implements OnInit {
	errors: any;
	skills: [any];
	newPet = {
		"name": "",
		"type": "",
		"description":"", 
		"skills": {
			"skill1": "",
			"skill2": "",
			"skill3": "",
		}
}	  
	
	constructor(private _httpService: HttpService,
		private router: Router ){ 
		}

  	ngOnInit() {}

  	addPet() {			
		let obs = this._httpService.addPet(this.newPet);
		console.log("hello1:", this.newPet )
		obs.subscribe(data => {
		console.log("hello3:", obs )
      	if (data['message'] == "Success") {
        	this.newPet = {
				"name": "",
				"type": "",
				"description":"", 
				"skills": {
					"skill1": "",
					"skill2": "",
					"skill3": ""
				}	
			}
        	this.router.navigate(['/']);
      	} else if (data['err']) {
        	this.errors = data['err']
      	}
    });
  }

}
