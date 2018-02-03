import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {

  	constructor(private _http: HttpClient){	
	}

    listPets() {
		return this._http.get('/pets');
	}
	
	addPet(newPet){ 
		return this._http.post('/new-pet', newPet);	
	} 
	getOnePet(id) {  
		console.log("I am in the service getOnePet"); 
		return this._http.get('/pet/'+id);
	}
	editPet(editedPet) {
		return this._http.patch('/edit-pet/'+editedPet._id, editedPet);
	}

	deletePet(id) {
		return this._http.delete('/delete-pet/'+id);
	}
	
}
