webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var pet_list_component_1 = __webpack_require__("../../../../../src/app/pet-list/pet-list.component.ts");
var pet_addnew_component_1 = __webpack_require__("../../../../../src/app/pet-addnew/pet-addnew.component.ts");
var pet_details_component_1 = __webpack_require__("../../../../../src/app/pet-details/pet-details.component.ts");
var pet_edit_component_1 = __webpack_require__("../../../../../src/app/pet-edit/pet-edit.component.ts");
var routes = [
    { path: '', component: pet_list_component_1.PetListComponent },
    { path: 'new', component: pet_addnew_component_1.PetAddnewComponent },
    { path: 'edit/:id', component: pet_edit_component_1.PetEditComponent },
    { path: 'details/:id', component: pet_details_component_1.PetDetailsComponent },
    { path: '', pathMatch: 'full', redirectTo: '/' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* @import url(https://fonts.googleapis.com/css?family=Lato)\n@import url(https://fonts.googleapis.com/css?family=Oswald) */\n\n#wrapper {\n    font-family: 'Lato';\n    color: #404040;\n    padding: 15px;\n    width: 70%;\n    margin: 0px auto;\n}\n\n#space {\n    height: 30px;\n}\n\nh1 {\n    font-family: 'Oswald';\n    text-align: center;\n    color: #ff7f50;\n    font-size: 42px;\n    text-shadow: 3px 3px 3px #ffb499;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n\t\t<h1> Pet Shelter </h1> \n\t  \t\n\n\t\t<router-outlet></router-outlet>\n\n</div>\t"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var pet_list_component_1 = __webpack_require__("../../../../../src/app/pet-list/pet-list.component.ts");
var pet_addnew_component_1 = __webpack_require__("../../../../../src/app/pet-addnew/pet-addnew.component.ts");
var pet_details_component_1 = __webpack_require__("../../../../../src/app/pet-details/pet-details.component.ts");
var pet_edit_component_1 = __webpack_require__("../../../../../src/app/pet-edit/pet-edit.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                pet_list_component_1.PetListComponent,
                pet_addnew_component_1.PetAddnewComponent,
                pet_details_component_1.PetDetailsComponent,
                pet_edit_component_1.PetEditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.listPets = function () {
        return this._http.get('/pets');
    };
    HttpService.prototype.addPet = function (newPet) {
        return this._http.post('/new-pet', newPet);
    };
    HttpService.prototype.getOnePet = function (id) {
        console.log("I am in the service getOnePet");
        return this._http.get('/pet/' + id);
    };
    HttpService.prototype.editPet = function (editedPet) {
        return this._http.patch('/edit-pet/' + editedPet._id, editedPet);
    };
    HttpService.prototype.deletePet = function (id) {
        return this._http.delete('/delete-pet/' + id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "../../../../../src/app/pet-addnew/pet-addnew.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#add-wrapper {\n    margin: 0px auto; \n    width: 100%;\n}\nh2 {\n    text-align: center;\n}\n.form_field {\n    width: 400px;\n    height: 25px;\n    padding: 5px;\n    vertical-align: center;\n    border: 1px solid #8a8a8a;\n    border-radius: 3px;\n}\n.form_field_short {\n    width: 350px;\n    height: 25px;\n    padding: 5px;\n    vertical-align: center;\n    border: 1px solid #8a8a8a;\n    border-radius: 3px;\n}\n.center_form\n{\n     margin: 0 auto;\n     width: 468px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-addnew/pet-addnew.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"add_wrapper\">\n    <h2>Know a pet needing a home?</h2>\n     \n    <div class=\"center_form\">\n  \n        <div class=\"error\" *ngIf=\"errors\">  \n  \n            <ul style=\"list-style-type:none\">\n              <li>{{ errors.errors.name.message }}</li>\n              <li>{{ errors.errors.type.message }}</li>\n              <li>{{ errors.errors.description.message }}</li>\n            </ul>\n        </div>\t\t\n          \n          <form (submit) = \"addPet()\">\n        <p>Pet name:</p> \n        <p><input type=\"text\" class=\"form_field\" name=\"newPet.name\" [(ngModel)] = \"newPet.name\"/></p>\n        \n        <p>Pet Type:</p>\n        <p><input type=\"text\" class=\"form_field\" name=\"newPet.type\" [(ngModel)] = \"newPet.type\"/></p>\n         \n        <p>Description:</p>\n        <p><input type=\"text\" class=\"form_field\" name=\"newPet.description\" [(ngModel)] = \"newPet.description\"/></p>\n\n        <p>Skills (optional):</p>\n        \n        <p> Skill 1:&nbsp;&nbsp;<input type=\"text\" class=\"form_field_short\" name=\"newPet.skill1\" [(ngModel)] = \"newPet.skill1\"/></p>    \n        <p> Skill 2:&nbsp;&nbsp;<input type=\"text\" class=\"form_field_short\" name=\"newPet.skill2\" [(ngModel)] = \"newPet.skill2\"/></p> \n        <p> Skill 3:&nbsp;&nbsp;<input type=\"text\" class=\"form_field_short\" name=\"newPet.skill3\" [(ngModel)] = \"newPet.skill3\"/></p>    \n\n          <button class = \"button_norm\" type=\"submit\">Add Pet</button> &nbsp;&nbsp;\n          <button class = \"button_del\" type=\"reset\" [routerLink]=\"['/']\">Cancell</button>\n      </form>\n    </div>\n  \n  \n  </div>\t\n  \n  \n"

/***/ }),

/***/ "../../../../../src/app/pet-addnew/pet-addnew.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var PetAddnewComponent = /** @class */ (function () {
    function PetAddnewComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.newPet = {
            "name": "",
            "type": "",
            "description": "",
            "skills": {
                "skill1": "",
                "skill2": "",
                "skill3": "",
            }
        };
    }
    PetAddnewComponent.prototype.ngOnInit = function () { };
    PetAddnewComponent.prototype.addPet = function () {
        var _this = this;
        var obs = this._httpService.addPet(this.newPet);
        console.log("hello1:", this.newPet);
        obs.subscribe(function (data) {
            console.log("hello3:", obs);
            if (data['message'] == "Success") {
                _this.newPet = {
                    "name": "",
                    "type": "",
                    "description": "",
                    "skills": {
                        "skill1": "",
                        "skill2": "",
                        "skill3": ""
                    }
                };
                _this.router.navigate(['/']);
            }
            else if (data['err']) {
                _this.errors = data['err'];
            }
        });
    };
    PetAddnewComponent = __decorate([
        core_1.Component({
            selector: 'app-pet-addnew',
            template: __webpack_require__("../../../../../src/app/pet-addnew/pet-addnew.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pet-addnew/pet-addnew.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router])
    ], PetAddnewComponent);
    return PetAddnewComponent;
}());
exports.PetAddnewComponent = PetAddnewComponent;


/***/ }),

/***/ "../../../../../src/app/pet-details/pet-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#det-wrapper {\n    margin: 0px auto; \n    width: 40%;\n}\nh2 {\n    text-align: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-details/pet-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"det_wrapper\">\n  <p><a [routerLink]=\"['/']\">Home</a></p>\n  <h2>Details about {{selectedPet.name}}</h2>\n\n  <p><strong>Pet Type:</strong> {{selectedPet.type}}\n  <p><strong>Description:</strong> {{selectedPet.description}}\n  <p><strong>Skills:</strong> \n     <ul style=\"list-style-type:none\">\n        <li>{{selectedPet.skill1}}</li>\n        <li>{{selectedPet.skill2}}</li>\n        <li>{{selectedPet.skill3}}</li>\n      </ul>\n  <p><strong>Likes:</strong> {{like_count}} </p>\n\n    <button class = \"button_norm\" type=\"button\" (click)=\"incrementLikes((selectedPet._id))\">Like this pet</button> &nbsp;&nbsp;&nbsp;    \n    <button class = \"button_del\" type=\"button\" (click)=\"deletePet(selectedPet._id)\">Adopt this pet</button> &nbsp;&nbsp;&nbsp; \n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pet-details/pet-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var PetDetailsComponent = /** @class */ (function () {
    function PetDetailsComponent(_httpService, route, router) {
        this._httpService = _httpService;
        this.route = route;
        this.router = router;
        this.selectedPet = {
            "name": "",
            "type": "",
            "description": "",
            "skills": {
                "skill1": "",
                "skill2": "",
                "skill3": "",
                "like_count": 0,
            }
        };
    }
    PetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getOnePet(params['id']);
        });
    };
    PetDetailsComponent.prototype.getOnePet = function (id) {
        var _this = this;
        var obs = this._httpService.getOnePet(id);
        obs.subscribe(function (data) {
            console.log("Got data from getOnePet:", data);
            _this.selectedPet = data['data'];
            _this.id = _this.selectedPet['_id'];
            // this.like_count = this.selectedPet['like-count'];
            console.log("Pet to list details:", _this.selectedPet);
            console.log("id:", _this.id);
        });
    };
    PetDetailsComponent.prototype.deletePet = function (id) {
        var _this = this;
        var obs = this._httpService.deletePet(id);
        obs.subscribe(function (data) {
            console.log("pet to delete:", data['data']);
            if (data['message'] == "DeleteOne success") {
                _this.router.navigate(['/']);
            }
            else if (data['err']) {
                _this.errors = data['err'];
            }
        });
    };
    PetDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-pet-details',
            template: __webpack_require__("../../../../../src/app/pet-details/pet-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pet-details/pet-details.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], PetDetailsComponent);
    return PetDetailsComponent;
}());
exports.PetDetailsComponent = PetDetailsComponent;


/***/ }),

/***/ "../../../../../src/app/pet-edit/pet-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#edit-wrapper {\n    margin: 0px auto; \n    width: 100%;\n}\nh2 {\n    text-align: center;\n}\n.form_field {\n    width: 400px;\n    height: 25px;\n    padding: 5px;\n    vertical-align: center;\n    border: 1px solid #8a8a8a;\n    border-radius: 3px;\n}\n.form_field_short {\n    width: 350px;\n    height: 25px;\n    padding: 5px;\n    vertical-align: center;\n    border: 1px solid #8a8a8a;\n    border-radius: 3px;\n}\n.center_form\n{\n     margin: 0 auto;\n     width: 468px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-edit/pet-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"edit_wrapper\">\n    <h2>Edit this pet</h2>\n     \n    <div class=\"center_form\">\n  \n        <div class=\"error\" *ngIf=\"errors\">  \n  \n            <ul style=\"list-style-type:none\">\n              <li>{{ errors.errors.name.message }}</li>\n              <li>{{ errors.errors.type.message }}</li>\n              <li>{{ errors.errors.description.message }}</li>\n            </ul>\n        </div>\t\t\n          \n        <form (submit) = \"editPet()\">\n          <p>Pet name:</p> \n          <p><input type=\"text\" class=\"form_field\" name=\"editedPet.name\" [(ngModel)] = \"editedPet.name\"/></p>\n          \n          <p>Pet Type:</p>\n          <p><input type=\"text\" class=\"form_field\" name=\"editedPet.type\" [(ngModel)] = \"editedPet.type\"/></p>\n          \n          <p>Description:</p>\n          <p><input type=\"text\" class=\"form_field\" name=\"editedPet.description\" [(ngModel)] = \"editedPet.description\"/></p>\n\n          <p>Skills (optional):</p>\n          \n          <p> Skill 1:&nbsp;&nbsp;<input type=\"text\" class=\"form_field_short\" name=\"editedPet.skill1\" [(ngModel)] = \"editedPet.skill1\"/></p>    \n          <p> Skill 2:&nbsp;&nbsp;<input type=\"text\" class=\"form_field_short\" name=\"editedPet.skill2\" [(ngModel)] = \"editedPet.skill2\"/></p> \n          <p> Skill 3:&nbsp;&nbsp;<input type=\"text\" class=\"form_field_short\" name=\"editedPet.skill3\" [(ngModel)] = \"editedPet.skill3\"/></p>    \n\n          <button class = \"button_norm\" type=\"submit\">Edit Pet</button> &nbsp;&nbsp;\n          <button class = \"button_del\" type=\"reset\" [routerLink]=\"['/details/',editedPet._id]\">Cancell</button>\n      </form>\n    </div>\n  \n  \n  </div>\t\n  \n  "

/***/ }),

/***/ "../../../../../src/app/pet-edit/pet-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var PetEditComponent = /** @class */ (function () {
    function PetEditComponent(_httpService, route, router) {
        this._httpService = _httpService;
        this.route = route;
        this.router = router;
        this.editedPet = {
            "name": "",
            "type": "",
            "description": "",
            "skills": {
                "skill1": "",
                "skill2": "",
                "skill3": "",
            }
        };
    }
    PetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getOnePet(params['id']);
        });
    };
    PetEditComponent.prototype.getOnePet = function (id) {
        var _this = this;
        var obs = this._httpService.getOnePet(id);
        obs.subscribe(function (data) {
            console.log("Got data from getOnePet:", data);
            _this.editedPet = data['data'];
            _this.id = _this.editedPet['_id'];
            console.log("Pet to edit:", _this.editedPet);
            console.log("id:", _this, id);
        });
    };
    PetEditComponent.prototype.editPet = function () {
        var _this = this;
        var obs = this._httpService.editPet(this.editedPet);
        obs.subscribe(function (data) {
            console.log("Editing/data we got back:", data['message']);
            if (data['message'] == "Success") {
                _this.editedPet = {
                    "name": "",
                    "type": "",
                    "description": "",
                    "skills": {
                        "skill1": "",
                        "skill2": "",
                        "skill3": "",
                    }
                };
                _this.router.navigate(['/details/', _this.id]);
            }
            else if (data['err']) {
                console.log("Updating Errors:", data['err']);
                _this.errors = data['err'];
            }
        });
    };
    PetEditComponent = __decorate([
        core_1.Component({
            selector: 'app-pet-edit',
            template: __webpack_require__("../../../../../src/app/pet-edit/pet-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pet-edit/pet-edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], PetEditComponent);
    return PetEditComponent;
}());
exports.PetEditComponent = PetEditComponent;


/***/ }),

/***/ "../../../../../src/app/pet-list/pet-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "list-wrapper {\n    padding: 50px 0px;\n    font-size: 14px;\n    \n}\n\ntable, th, td  {\n    border:1px solid #b3b3b3;\n    border-collapse: collapse;\n    padding: 10px 15px; \n    \n}\n\ntable {\n    margin: 20px 0px;\n \n\n}\n\nth {\n    text-align: center;\n    height: 30px;\n    background-color: #cccccc;\n    font-weight: 500;\n}\n\ntd {\n    text-align: left;\n    height: 30px;\n}\n\n.t_reg {\n    width: 150px; \n}\n\n.t_actions {\n    width: 300px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-list/pet-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id =\"list_wrapper\">\n\n  <h2>These pets are looking for a home!</h2>\n\n    <a [routerLink]=\"['/new']\">Add a pet to the shelter</a>\n  \n    <table>\n      <thead>\n        <tr>\n          <th class = \"t_reg\">Name</th>\n          <th class = \"t_reg\">Type</th>\n          <th class = \"t_actions\">Actions Available</th>\n        </tr>\t\t\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let pet of pets\">\n          <td> {{ pet.name }} </td>\n          <td> {{ pet.type }} </td>\n          <td> \n            <button class=\"button_norm\" type=\"button\" [routerLink]=\"['/details/',pet._id]\">Details</button>&nbsp;&nbsp;&nbsp;\n            <button class=\"button_edit\" type=\"button\" [routerLink]=\"['/edit/',pet._id]\">Update</button>&nbsp;&nbsp;&nbsp;\n          </td>\t\t\n        </tr>\n      </tbody>\t\n    </table>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/pet-list/pet-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var PetListComponent = /** @class */ (function () {
    function PetListComponent(_httpService, route, router) {
        this._httpService = _httpService;
        this.route = route;
        this.router = router;
        this.pet = {
            "name": "",
            "type": "",
        };
    }
    PetListComponent.prototype.ngOnInit = function () {
        this.listPets();
    };
    PetListComponent.prototype.listPets = function () {
        var _this = this;
        var obs = this._httpService.listPets();
        obs.subscribe(function (data) {
            if (data['message'] == "Success") {
                _this.pets = data['data'];
            }
            else {
                _this.fetchError = " Something went wrong; we could not get the pets at this time.";
            }
        });
    };
    PetListComponent = __decorate([
        core_1.Component({
            selector: 'app-pet-list',
            template: __webpack_require__("../../../../../src/app/pet-list/pet-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pet-list/pet-list.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], PetListComponent);
    return PetListComponent;
}());
exports.PetListComponent = PetListComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map