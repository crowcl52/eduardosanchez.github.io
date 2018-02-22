webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header>      -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_alquimia_service__ = __webpack_require__("../../../../../src/app/service/alquimia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_particle__ = __webpack_require__("../../../../angular-particle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_inicio_inicio_component__ = __webpack_require__("../../../../../src/app/components/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_catalogo_catalogo_component__ = __webpack_require__("../../../../../src/app/components/catalogo/catalogo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_contacto_contacto_component__ = __webpack_require__("../../../../../src/app/components/contacto/contacto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_compartidos_header_header_component__ = __webpack_require__("../../../../../src/app/components/compartidos/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_somos_somos_component__ = __webpack_require__("../../../../../src/app/components/somos/somos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_complemento_complemento_component__ = __webpack_require__("../../../../../src/app/components/complemento/complemento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_compartidos_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/compartidos/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Services

// Routes

// Import ParticlesModule









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_inicio_inicio_component__["a" /* InicioComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_catalogo_catalogo_component__["a" /* CatalogoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_contacto_contacto_component__["a" /* ContactoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_compartidos_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_somos_somos_component__["a" /* SomosComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_complemento_complemento_component__["a" /* ComplementoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_compartidos_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* APP_ROUTING */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_pdf_viewer__["PdfViewerModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular_particle__["a" /* ParticlesModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__service_alquimia_service__["a" /* AlquimiaService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_inicio_inicio_component__ = __webpack_require__("../../../../../src/app/components/inicio/inicio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_complemento_complemento_component__ = __webpack_require__("../../../../../src/app/components/complemento/complemento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_contacto_contacto_component__ = __webpack_require__("../../../../../src/app/components/contacto/contacto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_somos_somos_component__ = __webpack_require__("../../../../../src/app/components/somos/somos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_catalogo_catalogo_component__ = __webpack_require__("../../../../../src/app/components/catalogo/catalogo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });






var app_routes = [
    { path: 'inicio', component: __WEBPACK_IMPORTED_MODULE_1__components_inicio_inicio_component__["a" /* InicioComponent */] },
    { path: 'alquimia', component: __WEBPACK_IMPORTED_MODULE_2__components_complemento_complemento_component__["a" /* ComplementoComponent */],
        children: [
            { path: 'catalogo', component: __WEBPACK_IMPORTED_MODULE_5__components_catalogo_catalogo_component__["a" /* CatalogoComponent */] },
            { path: 'quienes-somos', component: __WEBPACK_IMPORTED_MODULE_4__components_somos_somos_component__["a" /* SomosComponent */] },
            { path: 'contacto', component: __WEBPACK_IMPORTED_MODULE_3__components_contacto_contacto_component__["a" /* ContactoComponent */] },
            { path: '**', pathMatch: 'full', redirectTo: 'catalogo' }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(app_routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalogo/catalogo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n}\r\n.catalogo{\r\n    width: 90%;\r\n    margin: 0 auto;\r\n}\r\nh2{\r\n    margin: 20px 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/catalogo/catalogo.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"grid\">\r\n  <div class=\"catalogo\">\r\n    <h2>Catalogo</h2>\r\n    <pdf-viewer [src]=\"pdfSrc\" \r\n      [render-text]=\"true\"\r\n      \r\n      [original-size]=\"false\"\r\n      [autoresize]=\"true\"\r\n      style=\"display: block;\"\r\n  ></pdf-viewer>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/catalogo/catalogo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogoComponent = (function () {
    function CatalogoComponent() {
        this.pdfSrc = "/assets/catalogo.pdf";
    }
    CatalogoComponent.prototype.ngOnInit = function () {
    };
    return CatalogoComponent;
}());
CatalogoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-catalogo',
        template: __webpack_require__("../../../../../src/app/components/catalogo/catalogo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalogo/catalogo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CatalogoComponent);

//# sourceMappingURL=catalogo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/compartidos/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\r\n    width: 100%;\r\n    height: 200px;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/img/ban.png") + ");\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.redes-container{\r\n    width:100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.redes{\r\n    width: 30px;\r\n    margin-left: 20px;\r\n    margin-bottom: 20px;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compartidos/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"redes-container\">\r\n    <img src=\"./assets/img/face.png\" alt=\"\" class=\"redes\">\r\n    <img src=\"./assets/img/insta.png\" alt=\"\" class=\"redes\">\r\n    <img src=\"./assets/img/what.png\" alt=\"\" class=\"redes\">\r\n  </div>\r\n  <p>&copy; 2018 Alquimia. &copy; Todos los derechos reservados.</p>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/compartidos/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/compartidos/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/compartidos/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/compartidos/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondo{\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/img/ban.png") + ");\r\n}\r\n.logo{\r\n    width: 50px;\r\n}\r\n.nav-link{\r\n    color: white !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/compartidos/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"home\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light fondo\">\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img class=\"logo\" src=\"./assets/img/logo1.png\" alt=\"\">\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n          <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" [routerLink]=\"['quienes-somos']\" >¿Quienes Somos?</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['catalogo']\">Catalogo</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['contacto']\">Contacto</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </section>"

/***/ }),

/***/ "../../../../../src/app/components/compartidos/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/compartidos/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/compartidos/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/complemento/complemento.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/complemento/complemento.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>    \r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>    "

/***/ }),

/***/ "../../../../../src/app/components/complemento/complemento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplementoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComplementoComponent = (function () {
    function ComplementoComponent() {
    }
    ComplementoComponent.prototype.ngOnInit = function () {
    };
    return ComplementoComponent;
}());
ComplementoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-complemento',
        template: __webpack_require__("../../../../../src/app/components/complemento/complemento.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/complemento/complemento.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ComplementoComponent);

//# sourceMappingURL=complemento.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contacto/contacto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top60{\r\n    margin-top: 60px;\r\n}\r\n.container{\r\n    min-height: 700px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contacto/contacto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"top60\" >Contacto</h2>\r\n  <form method=\"POST\" action=\"\" >\r\n      <div class=\"form-group top60\">\r\n        <label for=\"email\">Email:</label>\r\n        <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"name@example.com\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"name\">Nombre:</label>\r\n          <input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"name@example.com\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"phone\">Teléfono:</label>\r\n            <input name=\"phone\" type=\"phone\" class=\"form-control\" id=\"phone\" placeholder=\"333-333-333\">\r\n          </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"asunto\">Asunto:</label>\r\n        <select name=\"asunto\" class=\"form-control\" id=\"asunto\">\r\n          <option>1</option>\r\n          <option>2</option>\r\n          <option>3</option>\r\n          <option>4</option>\r\n          <option>5</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label  for=\"mensaje\">Mensaje:</label>\r\n        <textarea name=\"message\" class=\"form-control\" id=\"mensaje\" rows=\"3\"></textarea>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-lg\">Enviar</button>\r\n    </form>\r\n</div>\r\n<div class=\"top60\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/contacto/contacto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactoComponent = (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    return ContactoComponent;
}());
ContactoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contacto',
        template: __webpack_require__("../../../../../src/app/components/contacto/contacto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contacto/contacto.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactoComponent);

//# sourceMappingURL=contacto.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/inicio/inicio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fondo{\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/img/ban.png") + ");\r\n    z-index: 99;\r\n}\r\n.logo{\r\n    width: 50px;\r\n}\r\n.nav-link{\r\n    color: white !important;\r\n}\r\n\r\nimg.bg {\r\n    /* Set rules to fill background */\r\n    min-height: 100%;\r\n    min-width: 1024px;\r\n      \r\n    /* Set up proportionate scaling */\r\n    width: 100%;\r\n    height: auto;\r\n      \r\n    /* Set up positioning */\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n  \r\n  @media screen and (max-width: 1024px) { /* Specific to this particular image */\r\n    img.bg {\r\n      left: 50%;\r\n      margin-left: -512px;   /* 50% */\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inicio/inicio.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"home\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light fondo\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img class=\"logo\" src=\"./assets/img/logo1.png\" alt=\"\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\r\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/alquimia/quienes-somos']\" >¿Quienes Somos?</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/alquimia/catalogo']\">Catalogo</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/alquimia/contacto']\">Contacto</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <particles class=\"bg\" [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\r\n  <img src=\"assets/img/background.png\" alt=\"\" class=\"bg\">\r\n  \r\n  \r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/inicio/inicio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = (function () {
    function InicioComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    InicioComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': 5,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 100,
                },
                color: {
                    value: '#111'
                },
                shape: {
                    type: 'polygon',
                },
            }
        };
    };
    return InicioComponent;
}());
InicioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inicio',
        template: __webpack_require__("../../../../../src/app/components/inicio/inicio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/inicio/inicio.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InicioComponent);

//# sourceMappingURL=inicio.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/somos/somos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid{\r\n    min-height: 700px;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (20%)[5];\r\n        grid-template-columns: repeat(5,20%);\r\n    -ms-grid-rows:  (2fr)[5];\r\n        grid-template-rows:  repeat(5, 2fr);\r\n}\r\n.title{\r\n    grid-column: 2/6;\r\n    grid-row: 2/3;\r\n}\r\n\r\n.text{\r\n    font-size: 1.5rem;\r\n    text-transform: capitalize;\r\n    grid-column: 2/5;\r\n    grid-row: 3/6;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/somos/somos.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"grid\">\r\n  <h1 class=\"title\">¿ Quienes somos ?</h1>\r\n  <p class=\"text\">\r\n    desde hace mas de 5 años nos dedicamos a la harrearía y a la forja. nuestros trabajos son cuidadosamente elaborados\r\n    con la mejor calidad de materiales y terminado de los mismos, combinando también con diferentes materiales \r\n    como son la madera, cristal ,marmol, etc. para dar mayor calidad visual y experimentar con diferentes tipos de\r\n    materiales para dar ese acabado que nos identifica.\r\n  </p>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/somos/somos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SomosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SomosComponent = (function () {
    function SomosComponent() {
    }
    SomosComponent.prototype.ngOnInit = function () {
    };
    return SomosComponent;
}());
SomosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-somos',
        template: __webpack_require__("../../../../../src/app/components/somos/somos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/somos/somos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SomosComponent);

//# sourceMappingURL=somos.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/alquimia.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlquimiaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlquimiaService = (function () {
    function AlquimiaService() {
    }
    return AlquimiaService;
}());
AlquimiaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AlquimiaService);

//# sourceMappingURL=alquimia.service.js.map

/***/ }),

/***/ "../../../../../src/assets/img/ban.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ban.cab764ada7cf043ae15c.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[5]);
//# sourceMappingURL=main.bundle.js.map