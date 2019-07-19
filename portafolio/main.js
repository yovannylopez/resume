(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    }
];
var config = {
    useHash: true,
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, config),
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_5__["ProfileModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/profile/about/about.component.html":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"about\">\n  <div class=\"container\">\n    <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"card-body\">\n            <div class=\"h4 mt-0 title\">Sobre mí</div>\n            <p>Hola!, Soy Yovanny López.</p>\n            <p>Colombiano, de origen campesino nacido en la Vereda Tambores del municipio de Balboa, Risaralda. Fui agricultor, mesero,\n            barrendero, electricista, reparador de neveras y lavadoras; luego fui docente por vocación y ahora soy desarrollador de\n            software por pasión y por proyecto de vida. Me gusta el aprendizaje continuo, compartir y recibir conocimiento, trabajar\n            en equipo, asumir retos y mucho más...</p>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-12\">\n          <div class=\"card-body\">\n            <div class=\"h4 mt-0 title\">Datos básicos</div>\n            <div class=\"row\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Edad:</strong>\n              </div>\n              <div class=\"col-sm-8\">38 años</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Email:</strong>\n              </div>\n              <div class=\"col-sm-8\">yovannylopez_22@hotmail.com</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Celular:</strong>\n              </div>\n              <div class=\"col-sm-8\">+57 3162696771</div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-sm-4\">\n                <strong class=\"text-uppercase\">Ciudad:</strong>\n              </div>\n              <div class=\"col-sm-8\">Armenia, Colombia.\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/about/about.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/profile/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/profile/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/profile/contact/contact.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile/contact/contact.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"contact\">\n  <div class=\"cc-contact-information\" style=\"background-image: url('assets/images/contact.jpg');\">\n    <div class=\"container\">\n      <div class=\"cc-contact\">\n        <div class=\"row\">\n          <div class=\"col-md-9\">\n            <div class=\"card mb-0\" data-aos=\"zoom-in\">\n              <div class=\"h4 text-center title\">Contacto</div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"card-body\">\n                    <img src=\"assets/images/yovanny.jpeg\"/>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"card-body\">\n                    <p class=\"mb-0\">\n                      <strong>Celular: </strong>\n                    </p>\n                    <p class=\"pb-2\">+57 3162696771</p>\n                    <p class=\"mb-0\">\n                      <strong>Email: </strong>\n                    </p>\n                    <p>yovannylopez_22@hotmail.com</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-snotify class=\"material\"></ng-snotify>"

/***/ }),

/***/ "./src/app/profile/contact/contact.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile/contact/contact.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(profile, snotify) {
        this.profile = profile;
        this.snotify = snotify;
        this.snotifyConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].snotifyConfig;
        this.model = {};
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.contact = function () {
        var _this = this;
        this.profile.contactus(this.model).subscribe(function (data) {
            if (data.status) {
                _this.snotify.success(data.message, 'Success', _this.snotifyConfig);
            }
            else {
                _this.snotify.warning(data.message, 'Warning', _this.snotifyConfig);
            }
        }, function (err) {
            _this.snotify.error('Something went wrong. Try again later.', 'Error', _this.snotifyConfig);
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/profile/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/profile/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/profile/education/education.component.html":
/*!************************************************************!*\
  !*** ./src/app/profile/education/education.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"education\">\n    <div class=\"container cc-education\">\n      <div class=\"h4 text-center mb-4 title\">Educación</div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2013</p>\n              <div class=\"h5\">Profesional</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Ingeniería de Sistemas</div>\n              <p class=\"category\">Universidad Nacional Abierta y a Distancia</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2012</p>\n              <div class=\"h5\">Tecnología</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Tecnología en Análisis y Desarrollo de Sistemas de Información.</div>\n              <p class=\"category\">Servicio Nacional de Aprendizaje SENA</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body cc-education-header\">\n              <p>2013</p>\n              <div class=\"h5\">Tecnología</div>\n            </div>\n          </div>\n          <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Especialización Tecnológica en Gestión de Proyectos</div>\n              <p class=\"category\">Servicio Nacional de Aprendizaje SENA</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/profile/education/education.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/education/education.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/education/education.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/education/education.component.ts ***!
  \**********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EducationComponent = /** @class */ (function () {
    function EducationComponent(profile) {
        this.profile = profile;
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.getEducation();
    };
    EducationComponent.prototype.getEducation = function () {
        // this.profile.education().subscribe(data => {
        //   this.educationData = data.response;
        // });
        this.educationData = this.profile.education();
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/profile/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/profile/education/education.component.scss")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/profile/experience/experience.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"experience\">\n  <div class=\"container cc-experience\">\n    <div class=\"h4 text-center mb-4 title\">Experiencia laboral</div>\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-experience-header\">\n            <p>Junio de 2006 - Actualidad</p>\n            <div class=\"h5\">Freelance</div>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">Frontend Developer - Backend Developer</div>\n            <p class=\"category\">Desarrollos del lado del cliente y del lado del servidor, tanto para aplicaciones monolito como aplicaciones con\n            arquitectura REST y/o microservicios, con tecnologías como NodeJS, PHP, Java SE, Javascript, JQuery, Angular, React,\n            NodeJS, GraphQL, HTML, CSS, Actionscript,MySQL, MongoDB.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-experience-header\">\n            <p>Febrero de 2012 - Diciembre de 2016</p>\n            <div class=\"h5\">Brújulaweb</div>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">Frontend Developer - Backend Developer</div>\n            <p class=\"category\">Desarrollos del lado del cliente y del lado del servidor, tanto para aplicaciones monolito como aplicaciones con\n            arquitectura REST y/o microservicios, con tecnologías como NodeJS, PHP, Java SE, Javascript, JQuery, Angular, React,\n            NodeJS, GraphQL, HTML, CSS, Actionscript,MySQL, MongoDB.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body cc-experience-header\">\n            <p>Septiembre de 2018 - Noviembre de 2018 / Febrero de 2019 - Mayo de 2019</p>\n            <div class=\"h5\">Institución Universitaria EAM</div>\n          </div>\n        </div>\n        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n          <div class=\"card-body\">\n            <div class=\"h5\">Docente catedrático</div>\n            <p class=\"category\">Docente de las electivas de Angular y NodeJS del Programa de Ingeniería de Software.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n              <div class=\"card-body cc-experience-header\">\n                <p>Octubre de 2004 - Marzo de 2019</p>\n                <div class=\"h5\">Servicio Nacional de Aprendizaje - SENA</div>\n              </div>\n            </div>\n            <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n              <div class=\"card-body\">\n                <div class=\"h5\">Instructor Medio Tiempo</div>\n                <p class=\"category\">Instructor de Algoritmos, PHP, Javascript, HTML, CSS, UML, Bases de datos, en el programa de Técnico en Programación de\n                Software y Tecnología en Análisis y Desarrollo de Sistemas de Información.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/experience/experience.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/experience/experience.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/experience/experience.component.ts ***!
  \************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(profile) {
        this.profile = profile;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.getExprience();
    };
    ExperienceComponent.prototype.getExprience = function () {
        // this.profile.exprience().subscribe(data => {
        //   this.exprienceData = data.response;
        // });
        this.exprienceData = this.profile.exprience();
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/profile/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/profile/experience/experience.component.scss")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/profile/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container text-center\">\n    <a class=\"cc-twitter btn btn-link \" href=\"https://twitter.com/yovannysoy\" target=\"_blank\">\n      <i class=\"fa fa-twitter fa-2x \" aria-hidden=\"true\"></i>\n    </a>\n    <a class=\"cc-linkedin btn btn-link\" href=\"https://www.linkedin.com/in/yovanny-lopez-010016ab/\" target=\"_blank\">\n      <i class=\"fa fa-linkedin fa-2x \" aria-hidden=\"true\"></i>\n    </a>\n    <a class=\"cc-github btn btn-link\" href=\"http://github.com/yovannylopez\" target=\"_blank\">\n      <i class=\"fa fa-github fa-2x\" aria-hidden=\"true\"></i>\n    </a>\n    <a class=\"cc-facebook btn btn-link\" href=\"https://www.facebook.com/hylopezc\" target=\"_blank\">\n      <i class=\"fa fa-facebook fa-2x \" aria-hidden=\"true\"></i>\n    </a>\n    <a class=\"cc-youtube btn btn-link\" href=\"https://www.youtube.com/channel/UCM2h_EMgfpVma7p1T1NU8Rg/playlists?view_as=subscriber\" target=\"_blank\">\n      <i class=\"fa fa-youtube fa-2x \" aria-hidden=\"true\"></i>\n    </a>\n\n  </div>\n  <div class=\"text-center text-muted\">\n    <p>&copy; Derechos reservados.\n    </p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/profile/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/footer/footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/profile/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/profile/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/profile/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"profile-page sidebar-collapse\">\n    <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n      <div class=\"container\">\n        <div class=\"navbar-translate\">\n          <a class=\"navbar-brand\" href=\"#\" rel=\"tooltip\">Yovanny CV</a>\n          <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\"\n            aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar bar1\"></span>\n            <span class=\"navbar-toggler-bar bar2\"></span>\n            <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n        </div>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" href=\"#about\">Sobre mí</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" href=\"#skill\">Habilidades</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" href=\"#experience\">Experiencia</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" href=\"#education\">Educación</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" href=\"#contact\">Contacto</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/profile/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/profile/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/profile/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/profile/intro/intro.component.html":
/*!****************************************************!*\
  !*** ./src/app/profile/intro/intro.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-page\">\n  <div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" filter-color=\"green\">\n      <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('assets/images/intro.jpg');\">\n      </div>\n      <div class=\"container\">\n        <div class=\"content-center\">\n          <div class=\"cc-profile-image\">\n            <a href=\"#\">\n              <img src=\"assets/images/yovanny.jpeg\" alt=\"Foto Yovanny López\" />\n            </a>\n          </div>\n          <div class=\"h2 title\">Yovanny López</div>\n          <p class=\"category text-white\">Angular Developer</p>\n          <a class=\"btn btn-primary\"\n            href=\"assets/images/proyectos.pdf\" target=\"_blank\"\n            data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Ver Proyectos</a>\n        </div>\n      </div>\n      <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"button-container\">\n\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://twitter.com/yovannysoy\"\n              target=\"_blank\" rel=\"tooltip\" title=\"Sígueme en Twitter\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.linkedin.com/in/yovanny-lopez-010016ab/\"\n              target=\"_blank\" rel=\"tooltip\" title=\"Sígueme en Linkedin\">\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"http://github.com/yovannylopez\"\n              target=\"_blank\" rel=\"tooltip\" title=\"Sígueme en Github\">\n              <i class=\"fa fa-github\"></i>\n            </a>\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.youtube.com/channel/UCM2h_EMgfpVma7p1T1NU8Rg/playlists?view_as=subscriber\" target=\"_blank\" rel=\"tooltip\"\n              title=\"Sígueme en Youtube\">\n              <i class=\"fa fa-youtube\"></i>\n            </a>\n            <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://www.facebook.com/hylopezc\" target=\"_blank\"\n              rel=\"tooltip\" title=\"Sígueme en Facebook\">\n              <i class=\"fa fa-facebook\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/intro/intro.component.scss":
/*!****************************************************!*\
  !*** ./src/app/profile/intro/intro.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/intro/intro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/intro/intro.component.ts ***!
  \**************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/profile/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/profile/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/profile/portfolio/portfolio.component.html":
/*!************************************************************!*\
  !*** ./src/app/profile/portfolio/portfolio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"portfolio\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 ml-auto mr-auto\">\n        <div class=\"h4 text-center mb-4 title\">Portfolio</div>\n        <div class=\"nav-align-center\">\n          <ul class=\"nav nav-pills nav-pills-primary\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#web-development\" role=\"tablist\">\n                <i class=\"fa fa-laptop\" aria-hidden=\"true\"></i>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#graphic-design\" role=\"tablist\">\n                <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"tab-content gallery mt-5\">\n      <div class=\"tab-pane active\" id=\"web-development\">\n        <div class=\"ml-auto mr-auto\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                <a href=\"#web-development\">\n                  <figure class=\"cc-effect\">\n                    <img src=\"assets/images/ic.jpg\" alt=\"Image\" />\n                    <figcaption>\n                      <div class=\"h4\">College Event</div>\n                      <p>Web Development</p>\n                    </figcaption>\n                  </figure>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                <a href=\"#web-development\">\n                  <figure class=\"cc-effect\">\n                    <img src=\"assets/images/mitsvah.jpg\" alt=\"Image\" />\n                    <figcaption>\n                      <div class=\"h4\">College Fest</div>\n                      <p>Web Development</p>\n                    </figcaption>\n                  </figure>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"graphic-design\" role=\"tabpanel\">\n        <div class=\"ml-auto mr-auto\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                <a href=\"#graphic-design\">\n                  <figure class=\"cc-effect\">\n                    <img src=\"assets/images/cafe.jpeg\" alt=\"Image\" />\n                    <figcaption>\n                      <div class=\"h4\">Sheetal Cafe</div>\n                      <p>Poster Design</p>\n                    </figcaption>\n                  </figure>\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"cc-porfolio-image img-raised\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n                <a href=\"#graphic-design\">\n                  <figure class=\"cc-effect\">\n                    <img src=\"assets/images/pycon.jpeg\" alt=\"Image\" />\n                    <figcaption>\n                      <div class=\"h4\">Codewar Club</div>\n                      <p>Graphic Design</p>\n                    </figcaption>\n                  </figure>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/portfolio/portfolio.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/portfolio/portfolio.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/portfolio/portfolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/portfolio/portfolio.component.ts ***!
  \**********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/profile/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/profile/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"page-content\">\n    <app-intro></app-intro>\n    <app-about></app-about>\n    <app-skills></app-skills>\n    <app-education></app-education>\n    <app-experience></app-experience>\n    <!-- <app-portfolio></app-portfolio> -->\n    <!-- <app-reference></app-reference> -->\n    <app-contact></app-contact>\n</div>\n<app-footer></app-footer>\n<ngx-spinner bdColor=\"rgba(255,255,255,1)\" size=\"medium\" color=\"#033d5b\" type=\"ball-spin-clockwise\"></ngx-spinner>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(spinner) {
        this.spinner = spinner;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
        }, 2000);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/profile/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/profile/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/profile/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/profile/skills/skills.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/profile/portfolio/portfolio.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/profile/experience/experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./education/education.component */ "./src/app/profile/education/education.component.ts");
/* harmony import */ var _reference_reference_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reference/reference.component */ "./src/app/profile/reference/reference.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/profile/contact/contact.component.ts");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyModule"],
                _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"]
            ],
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_12__["EducationComponent"],
                _reference_reference_component__WEBPACK_IMPORTED_MODULE_13__["ReferenceComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]
            ],
            providers: [
                { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["ToastDefaults"] },
                ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"],
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.skillsData = [
            {
                'id': '1',
                'skill': 'ANGULAR 6',
                'progress': '85%'
            },
            {
                'id': '2',
                'skill': 'PHP\/CODEIGNITER',
                'progress': '80%'
            },
            {
                'id': '3',
                'skill': 'C++',
                'progress': '80%'
            },
            {
                'id': '4',
                'skill': 'PYTHON',
                'progress': '75%'
            },
            {
                'id': '5',
                'skill': 'ADOBE ILLUSTRATOR',
                'progress': '75%'
            },
            {
                'id': '6',
                'skill': 'DATA STRUCTURE',
                'progress': '70%'
            }
        ];
        this.educationData = [
            {
                'id': '1',
                'from_to_year': '2016 - 2020',
                'education': 'Bachelor\'s Degree',
                'stream': 'Bachelor of Engineering',
                'institution': 'MADHAV INSTITUTE OF TECHNOLOGY AND SCIENCE, GWALIOR'
            },
            {
                'id': '2',
                'from_to_year': '2014 - 2015',
                'education': 'Higher Secondary',
                'stream': 'Science and Mathematics',
                'institution': 'GOVT. BOYS H.S. SCHOOL, DHAMNOD, DHAR'
            },
            {
                'id': '3',
                'from_to_year': '2012 - 2013',
                'education': 'High School',
                'stream': 'Science and Mathematics',
                'institution': 'SARSWATI SHISHU VIDHYA MANDIR, DHAMNOD, DHAR'
            }
        ];
        this.exprienceData = [
            {
                'id': '1',
                'from_to_month_year': 'JUNE 2018 - AUGUST 2018',
                'organization': 'WITTYFEED',
                'designation': 'Full Stack Developer',
                'details': "Created fully functional projects for <strong>WittyFeed</strong>,\n      A publisher Dashboard was created using <strong>Angular 6, CodeIgniter 3 , Rest API and JWT (Json Web Token).\n      </strong> It involves multiple modules like Analytics, Stories, RSS Links, Payments.\n      Another project was Influencer admin Dashboard which has features like app approval,\n      app rejection in OneFeed(WittyFeed\u2019s personalised feed SDK) integrations.\n      Lastly the admin dashboard for managing publishers for OneFeed."
            },
            {
                'id': '2',
                'from_to_month_year': 'OCTOBER 2017 - NOVEMBER 2017',
                'organization': 'MITS, GWALIOR',
                'designation': 'Web Developer',
                'details': 'Designed the Official Website of the <strong>INDUSTRY CONCLAVE<\/strong>.'
            },
            {
                'id': '3',
                'from_to_month_year': 'AUGUST 2017 - SEPTEMBER 2017',
                'organization': 'QUERENCIA CLUB (MITS)',
                'designation': 'Web Developer',
                'details': 'Developed the Official Website of the <strong>MITSVAH Literary Fest<\/strong>\r\nUnder <strong>Querencia CLUB<\/strong>.'
            }
        ];
    }
    ProfileService.prototype.contactus = function (data) {
        return this.http.post(this.baseUrl + 'contact', data);
    };
    ProfileService.prototype.skills = function () {
        // return this.http.get(this.baseUrl + 'skills');
        return this.skillsData;
    };
    ProfileService.prototype.education = function () {
        // return this.http.get(this.baseUrl + 'education');
        return this.educationData;
    };
    ProfileService.prototype.exprience = function () {
        // return this.http.get(this.baseUrl + 'exprience');
        return this.exprienceData;
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profile/reference/reference.component.html":
/*!************************************************************!*\
  !*** ./src/app/profile/reference/reference.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"reference\">\n  <div class=\"container cc-reference\">\n    <div class=\"h4 mb-4 text-center title\">Referencias</div>\n    <div class=\"card\" data-aos=\"zoom-in\">\n      <div class=\"carousel slide\" id=\"cc-Indicators\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li class=\"active\" data-target=\"#cc-Indicators\" data-slide-to=\"0\"></li>\n          <li data-target=\"#cc-Indicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#cc-Indicators\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <div class=\"row\">\n              <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                <img src=\"assets/images/reference-image-1.jpg\" alt=\"Image\" />\n                <div class=\"h5 pt-2\">Aiyana</div>\n                <p class=\"category\">CEO / WEBM</p>\n              </div>\n              <div class=\"col-lg-10 col-md-9\">\n                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat\n                  ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames.\n                  Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent\n                  facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div class=\"row\">\n              <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                <img src=\"assets/images/reference-image-2.jpg\" alt=\"Image\" />\n                <div class=\"h5 pt-2\">Braiden</div>\n                <p class=\"category\">CEO / Creativem</p>\n              </div>\n              <div class=\"col-lg-10 col-md-9\">\n                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat\n                  ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames.\n                  Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent\n                  facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div class=\"row\">\n              <div class=\"col-lg-2 col-md-3 cc-reference-header\">\n                <img src=\"assets/images/reference-image-3.jpg\" alt=\"Image\" />\n                <div class=\"h5 pt-2\">Alexander</div>\n                <p class=\"category\">CEO / Webnote</p>\n              </div>\n              <div class=\"col-lg-10 col-md-9\">\n                <p> Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat\n                  ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames.\n                  Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent\n                  facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/reference/reference.component.scss":
/*!************************************************************!*\
  !*** ./src/app/profile/reference/reference.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcmVmZXJlbmNlL3JlZmVyZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/reference/reference.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/reference/reference.component.ts ***!
  \**********************************************************/
/*! exports provided: ReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function() { return ReferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferenceComponent = /** @class */ (function () {
    function ReferenceComponent() {
    }
    ReferenceComponent.prototype.ngOnInit = function () {
    };
    ReferenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reference',
            template: __webpack_require__(/*! ./reference.component.html */ "./src/app/profile/reference/reference.component.html"),
            styles: [__webpack_require__(/*! ./reference.component.scss */ "./src/app/profile/reference/reference.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferenceComponent);
    return ReferenceComponent;
}());



/***/ }),

/***/ "./src/app/profile/skills/skills.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/skills/skills.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" id=\"skill\">\n  <div class=\"container\">\n    <div class=\"h4 text-center mb-4 title\">Habilidades</div>\n    <div class=\"card\" data-aos=\"fade-up\" data-aos-anchor-placement=\"top-bottom\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\">\n              <span class=\"progress-badge\">Angular</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                  data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                  style=\"width: 90%;\"></div>\n                <span class=\"progress-value\">90%</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\">\n              <span class=\"progress-badge\">HTML5</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                  data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                  style=\"width: 95%;\"></div>\n                <span class=\"progress-value\">95%</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\">\n              <span class=\"progress-badge\">CSS3</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                  data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                  style=\"width: 95%;\"></div>\n                <span class=\"progress-value\">95%</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\">\n              <span class=\"progress-badge\">NodeJS</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                  data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                  style=\"width: 75%;\"></div>\n                <span class=\"progress-value\">75%</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\">\n              <span class=\"progress-badge\">Adobe Illustrator - Photoshop</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                  data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                  style=\"width: 45%;\"></div>\n                <span class=\"progress-value\">45%</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\">\n              <span class=\"progress-badge\">Bases de datos</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                  data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                  style=\"width: 90%;\"></div>\n                <span class=\"progress-value\">90%</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\">\n              <span class=\"progress-badge\">Git</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                  data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                  style=\"width: 90%;\"></div>\n                <span class=\"progress-value\">90%</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"progress-container progress-primary\">\n              <span class=\"progress-badge\">Metodologías ágiles</span>\n              <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-primary\" data-aos=\"progress-full\" data-aos-offset=\"10\"\n                  data-aos-duration=\"2000\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                  style=\"width: 85%;\"></div>\n                <span class=\"progress-value\">85%</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/skills/skills.component.scss":
/*!******************************************************!*\
  !*** ./src/app/profile/skills/skills.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/skills/skills.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/skills/skills.component.ts ***!
  \****************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    // data: any;
    function SkillsComponent(profile) {
        this.profile = profile;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.getSkills();
    };
    SkillsComponent.prototype.getSkills = function () {
        // this.profile.skills().subscribe(data => {
        //   this.skillsData = data.response;
        // });
        this.skillsData = this.profile.skills();
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/profile/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/profile/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: window.location.protocol + "//" + window.location.hostname + "/portfolio/",
    snotifyConfig: {
        showProgressBar: false,
        position: ng_snotify__WEBPACK_IMPORTED_MODULE_0__["SnotifyPosition"].rightTop,
    },
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yovannylopez/Desktop/yovanny-resume/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map