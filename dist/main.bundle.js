webpackJsonp([1],{

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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\n\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" *ngIf=\"!authService.isLoggedIn()\" routerLink=\"login\">Expense Tracker Application</a>\n            <a class=\"navbar-brand\" *ngIf=\"authService.isLoggedIn()\" routerLink=\"report\">Expense Tracker Application</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n\n                <li ><a routerLink=\"report\" routerLinkActive=\"active\">Generate Report</a></li>\n                <li><a routerLink=\"expense\" routerLinkActive=\"active\">Add new Expense</a></li>\n                <li><a routerLink=\"about\" routerLinkActive=\"active\">About</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li *ngIf=\"!authService.isLoggedIn()\">\n                    <a routerLink=\"login\" routerLinkActive=\"active\">Log In</a>\n\n                </li>\n              <li *ngIf=\"!authService.isLoggedIn()\">\n                <a [routerLink]=\"['/register']\">Register</a>\n\n              </li>\n\n\n                <li *ngIf=\"authService.isLoggedIn()\">\n\n                  <!--<div class=\"dropdown\">-->\n                    <!--<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Welcome {{ authService.currentUser.firstname }}-->\n                      <!--<span class=\"caret\"></span></button>-->\n                    <!--<ul class=\"dropdown-menu\">-->\n                      <!--<li routerLink=\"profile\">My Profile</li>-->\n                      <!--<li routerLink=\"password\">Change Password</li>-->\n                      <!--<li routerLink=\"logout\">Logout</li>-->\n                    <!--</ul>-->\n                  <!--</div>-->\n\n                    <ul class=\"menu\">\n                        <li>\n                            Welcome {{ authService.currentUser.firstname }}\n                             <span class=\"caret\"></span>\n                            <ul>\n                                <li routerLink=\"profile\">My Profile</li>\n\n                                <li routerLink=\"password\">Change Password</li>\n\n                                <li routerLink=\"logout\">Logout</li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer\">\n    <div class=\"container\">\n        <p class=\"text-muted\">&copy; Copyright 2017 |  MEAN app | Re-developed by Ramanath Madiwal</p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_login_component__ = __webpack_require__("../../../../../src/app/home/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_about_component__ = __webpack_require__("../../../../../src/app/home/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__expense_expense_module__ = __webpack_require__("../../../../../src/app/expense/expense.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/* Feature Modules */


/* common Modules */

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_10__expense_expense_module__["a" /* ExpenseModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__home_login_component__["a" /* LoginComponent */] },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__home_about_component__["a" /* AboutComponent */] },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: '**', redirectTo: 'login', pathMatch: 'full' }
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_about_component__["a" /* AboutComponent */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_11__common_toastr_service__["a" /* ToastrService */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/toastr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToastrService = (function () {
    function ToastrService() {
    }
    ToastrService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToastrService.prototype.info = function (message, title) {
        toastr.info(message, title);
    };
    ToastrService.prototype.warning = function (message, title) {
        toastr.warning(message, title);
    };
    ToastrService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    return ToastrService;
}());
ToastrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ToastrService);

//# sourceMappingURL=toastr.service.js.map

/***/ }),

/***/ "../../../../../src/app/expense/expense.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h1 style=\"color:white\">{{ pgTitle }} Expense</h1>\n    </div>\n\n    <form [formGroup]=\"expenseForm\" (ngSubmit)=\"saveExpense(expenseForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': expenseForm.get('expdate').invalid && expenseForm.get('expdate').dirty}\">\n            <label for=\"expdt\" class=\"col-sm-2 control-label\" style=\"color:white\">Date</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></div>\n                <input type=\"date\" class=\"form-control\" id=\"expdt\" [formControl]=\"expdate\" placeholder=\"yyyy-mm-dd\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"expenseForm.get('expdate').dirty && expenseForm.get('expdate').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"expenseForm.get('expdate').errors.required\">\n                    Please enter date\n                </span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"expenseForm.get('expdate').errors.pattern\">\n                    Please enter a valid date\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': expenseForm.get('expaccount').invalid && expenseForm.get('expaccount').dirty}\">\n            <label for=\"exptyp\" class=\"col-sm-2 control-label\" style=\"color:white\">Account</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select class=\"form-control\" [formControl]=\"expaccount\">\n                    <option></option>\n                    <option *ngFor=\"let a of acc\" >{{a}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"expenseForm.get('expaccount').dirty && expenseForm.get('expaccount').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"expenseForm.get('expaccount').errors.required\">\n                    Please select expense account\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': expenseForm.get('expamt').invalid && expenseForm.get('expamt').dirty}\">\n            <label for=\"expamt\" class=\"col-sm-2 control-label\" style=\"color:white\">Amount</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">$</div>\n                <input type=\"number\" class=\"form-control\" id=\"expamt\" [formControl]=\"expamt\" placeholder=\"Enter amount\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"expenseForm.get('expamt').dirty && expenseForm.get('expamt').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"expenseForm.get('expamt').errors.required\">\n                    Please enter amount\n                </span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"expenseForm.get('expamt').errors.pattern\">\n                    Please enter a valid amount\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"expdesc\" class=\"col-sm-2 control-label\" style=\"color:white\">Description</label>\n            <div class=\"input-group col-sm-10\">\n                <textarea class=\"form-control\" id=\"expdesc\" rows=\"3\" [formControl]=\"expdesc\" placeholder=\"Description\"></textarea>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\">\n                <button type=\"submit\" [disabled]=\"expenseForm.invalid\" class=\"btn btn-primary\">{{ btnLbl }}</button>\n                <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n                <button type=\"reset\" class=\"btn btn-default\" *ngIf=\"btnLbl == 'Update'\" (click)=\"onBack()\">Back</button>\n            </div>\n        </div>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/expense/expense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expense_service__ = __webpack_require__("../../../../../src/app/expense/expense.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExpenseComponent = (function () {
    function ExpenseComponent(fb, authService, expenseService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.expenseService = expenseService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.acc = ['Food', 'Fees', 'Rent', 'Fare', 'Travel', 'Hotel', 'Phone', 'Internet', 'Repairs', 'Gas', 'Doctor', 'Books', 'Gift', 'Restaurant', 'Electricity', 'Other'];
        this.expdate = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.expaccount = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.expamt = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('[0-9]+(\.[0-9][0-9]?)?')]);
        this.expdesc = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
    }
    ExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.expid = params['id'];
                _this.getExpense(_this.expid);
                _this.pgTitle = "Edit";
                _this.btnLbl = "Update";
            }
            else {
                _this.pgTitle = "Add";
                _this.btnLbl = "Submit";
            }
        });
        this.userObj = this.authService.currentUser;
        this.expenseForm = this.fb.group({
            expdate: this.expdate,
            expaccount: this.expaccount,
            expamt: this.expamt,
            expdesc: this.expdesc
        });
    };
    ExpenseComponent.prototype.getExpense = function (id) {
        var _this = this;
        this.expenseService.getExpense(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('Expense id is incorrect in the URL');
                    _this.router.navigate(['report']);
                }
            }
        });
    };
    ExpenseComponent.prototype.populateForm = function (data) {
        this.expenseForm.patchValue({
            expdate: this.datePipe.transform(data.expensedate, 'y-MM-dd'),
            expaccount: data.expensetype,
            expamt: data.expenseamt,
            expdesc: data.expensedesc
        });
    };
    ExpenseComponent.prototype.saveExpense = function (formdata) {
        var _this = this;
        if (this.expenseForm.valid) {
            var theForm = this.expenseForm.value;
            if (this.expid !== '') {
                theForm.expid = this.expid;
            }
            this.expenseService.saveExpense(this.userObj.userid, theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.toastr.success(data.message);
                }
                if (!_this.expid) {
                    _this.expenseForm.reset();
                }
            });
        }
    };
    ExpenseComponent.prototype.onBack = function () {
        this.router.navigate(['/report'], { preserveQueryParams: true });
    };
    return ExpenseComponent;
}());
ExpenseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/expense/expense.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__expense_service__["a" /* ExpenseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__expense_service__["a" /* ExpenseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["k" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["k" /* DatePipe */]) === "function" && _g || Object])
], ExpenseComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=expense.component.js.map

/***/ }),

/***/ "../../../../../src/app/expense/expense.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_component__ = __webpack_require__("../../../../../src/app/expense/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__expense_component__ = __webpack_require__("../../../../../src/app/expense/expense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viewexpense_component__ = __webpack_require__("../../../../../src/app/expense/viewexpense.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_auth_guard_service__ = __webpack_require__("../../../../../src/app/user/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__expense_service__ = __webpack_require__("../../../../../src/app/expense/expense.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ExpenseModule = (function () {
    function ExpenseModule() {
    }
    return ExpenseModule;
}());
ExpenseModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
                { path: 'report', canActivate: [__WEBPACK_IMPORTED_MODULE_8__user_auth_guard_service__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_5__report_component__["a" /* ReportComponent */] },
                { path: 'expense', canActivate: [__WEBPACK_IMPORTED_MODULE_8__user_auth_guard_service__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_6__expense_component__["a" /* ExpenseComponent */] },
                { path: 'expense/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_8__user_auth_guard_service__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_6__expense_component__["a" /* ExpenseComponent */] },
                { path: 'expense/view/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_8__user_auth_guard_service__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_7__viewexpense_component__["a" /* ViewexpenseComponent */] }
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__report_component__["a" /* ReportComponent */],
            __WEBPACK_IMPORTED_MODULE_6__expense_component__["a" /* ExpenseComponent */],
            __WEBPACK_IMPORTED_MODULE_7__viewexpense_component__["a" /* ViewexpenseComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["k" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_9__user_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__user_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_10__expense_service__["a" /* ExpenseService */]
        ]
    })
], ExpenseModule);

//# sourceMappingURL=expense.module.js.map

/***/ }),

/***/ "../../../../../src/app/expense/expense.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExpenseService = (function () {
    function ExpenseService(http) {
        this.http = http;
        this.appdomain = 'http://localhost:1978';
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    ExpenseService.prototype.saveExpense = function (userid, oExpense) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        //CHANGE IN DEVELOPMENT MODE   !!!!!!!!!!!!!!!
        // return this.http.post(`http://localhost:1978/api/expense/${userid}`, JSON.stringify(oExpense), options)
        //     .map((response: Response) => response.json())
        //     .catch(this.handleError);
        return this.http.post("/api/expense/" + userid, JSON.stringify(oExpense), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpenseService.prototype.getExpenses = function (userid, oExpense) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // return this.http.post(`http://localhost:1978/api/expense/report/${userid}`, JSON.stringify(oExpense), options)
        //     .map((response: Response) => response.json())
        //     .catch(this.handleError);
        return this.http.post("/api/expense/report/" + userid, JSON.stringify(oExpense), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpenseService.prototype.getExpenseTotal = function (userid, oExpense) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // return this.http.post(`http://localhost:1978/api/expense/total/${userid}`, JSON.stringify(oExpense), options)
        //     .map((response: Response) => response.json())
        //     .catch(this.handleError);
        return this.http.post("/api/expense/total/" + userid, JSON.stringify(oExpense), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpenseService.prototype.getExpense = function (expid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // return this.http.get(`http://localhost:1978/api/expense/${expid}`, options)
        //     .map((response: Response) => response.json())
        //     .catch(this.handleError);
        return this.http.get("/api/expense/" + expid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpenseService.prototype.delExpense = function (expid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // return this.http.delete(`http://localhost:1978/api/expense/${expid}`, options)
        //     .map((response: Response) => response.json())
        //     .catch(this.handleError);heroku
        return this.http.delete("/api/expense/" + expid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ExpenseService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return ExpenseService;
}());
ExpenseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ExpenseService);

var _a;
//# sourceMappingURL=expense.service.js.map

/***/ }),

/***/ "../../../../../src/app/expense/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h1>Expense Report</h1>\n    </div>\n\n    <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Show report</h3>\n        </div>\n        <div class=\"panel-body\">\n            <form [formGroup]=\"reportForm\" (ngSubmit)=\"getReport(reportForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12 col-md-12\">\n                    <table class=\"table\">\n                      <thead>\n                      <tr>\n                        <th>TimeLine</th>\n                        <th>Selection</th>\n\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <tr class=\"success\">\n                        <td>\n                          Current month\n                        </td>\n                        <td> <span><input type=\"radio\" name=\"report\" value=\"opt1\" [formControl]=\"report\" checked></span></td>\n\n                      </tr>\n                      <tr class=\"info\">\n                        <td> Date Range</td>\n                        <td><span><input type=\"radio\" name=\"report\" value=\"opt2\" [formControl]=\"report\"></span></td>\n                      </tr>\n                      <tr class=\"info\">\n                        <td>Start Date</td>\n                        <td>\n\n                          <!--<div class=\"col-sm-12 col-md-6\">-->\n                          <div class=\"form-group\" style=\"margin-right:0\" [ngClass]=\"{'has-error': reportForm.get('startdt').invalid && reportForm.get('startdt').dirty}\">\n                            <div class=\"input-group\">\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></div>\n                              <input type=\"date\" class=\"form-control\" [formControl]=\"startdt\" placeholder=\"Start Date\">\n                            </div>\n                            <div class=\"text-danger\" *ngIf=\"reportForm.get('startdt').dirty && reportForm.get('startdt').invalid\">\n                              <span class=\"col-sm-2\"></span>\n                              <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter start date</span>\n                            </div>\n                            <!--</div>-->\n                          </div>\n                          <!--<div class=\"col-sm-12 col-md-6\">-->\n\n                       </td>\n\n\n                      </tr>\n                      <tr class=\"info\">\n                        <td>End Date</td>\n                        <td><div class=\"form-group\" style=\"margin-right:0\" [ngClass]=\"{'has-error': reportForm.get('enddt').invalid && reportForm.get('enddt').dirty}\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></div>\n                            <input type=\"date\" class=\"form-control\" [formControl]=\"enddt\" placeholder=\"End Date\">\n                          </div>\n                          <div class=\"text-danger\" *ngIf=\"reportForm.get('enddt').dirty && reportForm.get('enddt').invalid\">\n                            <span class=\"col-sm-2\"></span>\n                            <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter end date</span>\n                          </div>\n                          <!--</div>-->\n                        </div></td>\n                      </tr>\n                      <tr class=\"warning\">\n                        <td>All</td>\n                        <td><input type=\"radio\" name=\"report\" value=\"opt3\" [formControl]=\"report\"></td>\n                      </tr>\n                      </tbody>\n                    </table>\n                    <div class=\"col-sm-12 col-md-2\">\n                      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"reportForm.invalid\">Submit</button>\n                    </div>\n                  </div>\n\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"panel panel-danger\" *ngIf=\"expenses && totalrows < 1\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">No expense found</h3>\n        </div>\n\n        <div class=\"panel-body\">\n            It seems like you haven't entered any expense for the selected criteria. Please enter you expenses <a routerLink=\"/expense\">here</a>.\n        </div>\n    </div>\n\n\n    <div class=\"panel panel-default\" *ngIf=\"expenses && totalrows > 0\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Expense report <i>{{reportTitle}}</i> <b>({{ exptotal?.total | currency: 'INR':true }})</b></h3>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th width=\"10%\"><a style=\"cursor:pointer\" (click)=\"sortExpense('expensedate')\">Date</a></th>\n                            <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortExpense('expensetype')\">Account</a></th>\n                            <th width=\"40%\">Description</th>\n                            <th width=\"10%\" class=\"text-right\"><a style=\"cursor:pointer\" (click)=\"sortExpense('expenseamt')\">Amount</a></th>\n                            <th width=\"10%\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let exp of expenses; let expIndex = index'>\n                            <td>{{ exp.expensedate | date: 'd MMM y'}}</td>\n                            <td>{{ exp.expensetype}}</td>\n                            <td>{{ exp.expensedesc}}</td>\n                            <td class=\"text-right\">{{ exp.expenseamt | currency: 'INR':true }}</td>\n                            <td>\n                                <button type=\"button\" class=\"btn-xs btn-info\" aria-label=\"View\" (click)=\"showExpense(exp._id)\">\n                                    <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span>\n                                </button>\n                                <button type=\"button\" class=\"btn-xs btn-danger\" aria-label=\"Edit\" (click)=\"editExpense(exp._id)\">\n                                    <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n                                </button>\n                                <button type=\"button\" class=\"btn-xs btn-primary\" aria-label=\"Delete\" (click)=\"confirmDel(expIndex, exp._id)\">\n                                    <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                                </button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n\n            <div style=\"text-align:center\" *ngIf=\"expenses && totalrows > 10\">\n                <nav aria-label=\"Page navigation\">\n                    <ul class=\"pagination\">\n                        <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                            <a [ngClass]=\"{'selected': qpage == idx + 1 }\"class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/expense/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expense_service__ = __webpack_require__("../../../../../src/app/expense/expense.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportComponent = (function () {
    function ReportComponent(fb, authService, expenseService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.expenseService = expenseService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.report = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('opt1');
        this.startdt = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: '', disabled: true });
        this.enddt = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: '', disabled: true });
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.reportForm = this.fb.group({
            report: this.report,
            startdt: this.startdt,
            enddt: this.enddt
        });
        this.route.queryParams.forEach(function (params) {
            _this.qreport = params['report'] || '';
            _this.qstartdt = params['startdt'] || '';
            _this.qenddt = params['enddt'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            if (_this.qreport !== '') {
                var payload = {};
                payload.report = _this.qreport;
                if ((_this.qstartdt !== '' && _this.qenddt !== '')) {
                    payload.startdt = _this.qstartdt;
                    payload.enddt = _this.qenddt;
                    _this.reportForm.get('startdt').enable();
                    _this.reportForm.get('enddt').enable();
                }
                payload.page = _this.qpage;
                payload.sortby = _this.qsort;
                _this.fetchReport(_this.userObj.userid, payload);
                _this.reportForm.patchValue({
                    report: _this.qreport,
                    startdt: _this.qstartdt,
                    enddt: _this.qenddt
                });
            }
        });
        this.reportForm.get('report').valueChanges
            .subscribe(function (value) { return _this.toggleDates(value); });
    };
    ReportComponent.prototype.toggleDates = function (opt) {
        var dt1Control = this.reportForm.get('startdt');
        var dt2Control = this.reportForm.get('enddt');
        if (opt === 'opt2') {
            dt1Control.setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
            dt2Control.setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
            dt1Control.enable();
            dt2Control.enable();
        }
        else {
            dt1Control.clearValidators();
            dt2Control.clearValidators();
            dt1Control.disable();
            dt2Control.disable();
            dt1Control.setValue('');
            dt2Control.setValue('');
        }
        dt1Control.updateValueAndValidity();
        dt2Control.updateValueAndValidity();
    };
    ReportComponent.prototype.getReport = function (formdata) {
        if (this.reportForm.valid) {
            if (this.reportForm.value.report === 'opt2' && (new Date(this.reportForm.value.startdt) > new Date(this.reportForm.value.enddt))) {
                this.toastr.error('Start date cannot be greater than end date.');
            }
            else {
                this.fetchReport(this.userObj.userid, this.reportForm.value);
            }
        }
    };
    ReportComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.expenseService.getExpenses(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.expenses = data.data.docs;
                _this.totalrows = +data.data.total;
                _this.pgCounter = Math.floor((_this.totalrows + 10 - 1) / 10);
                _this.qreport = formval.report;
                if (formval.startdt) {
                    _this.qstartdt = formval.startdt;
                    _this.qenddt = formval.enddt;
                }
                _this.expenseService.getExpenseTotal(userid, formval)
                    .subscribe(function (data) {
                    _this.exptotal = data.data[0];
                });
                if (formval.report === 'opt1') {
                    _this.reportTitle = 'for ' + _this.datePipe.transform(new Date(), 'MMM y');
                }
                else if (formval.report === 'opt2') {
                    _this.reportTitle = 'between ' + _this.datePipe.transform(new Date(formval.startdt), 'd MMM y') + ' and ' + _this.datePipe.transform(new Date(formval.enddt), 'd MMM y');
                }
                else {
                    _this.reportTitle = 'for all expenses';
                }
            }
        });
    };
    ReportComponent.prototype.setPage = function (page) {
        this.router.navigate(['report'], {
            queryParams: { report: this.qreport, startdt: this.qstartdt, enddt: this.qenddt, page: page, sortby: this.qsort }
        });
    };
    ReportComponent.prototype.createPager = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    ReportComponent.prototype.showExpense = function (expid) {
        this.router.navigate(["expense/view/" + expid], {
            queryParams: { report: this.qreport, startdt: this.qstartdt, enddt: this.qenddt, page: this.qpage || 1, sortby: this.qsort }
        });
    };
    ReportComponent.prototype.confirmDel = function (idx, expid) {
        var _this = this;
        if (confirm('Do you really want to delete this record?')) {
            this.expenseService.delExpense(expid)
                .subscribe(function (data) {
                if (data.success === false) {
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.expenses.splice(idx, 1);
                    _this.toastr.success(data.message);
                }
            });
        }
    };
    ReportComponent.prototype.editExpense = function (expid) {
        this.router.navigate(["expense/" + expid], {
            queryParams: { report: this.qreport, startdt: this.qstartdt, enddt: this.qenddt, page: this.qpage || 1, sortby: this.qsort }
        });
    };
    ReportComponent.prototype.sortExpense = function (sortby) {
        if (this.qsort === '') {
            this.qsort = sortby;
        }
        else if (this.qsort.indexOf('-') > -1) {
            this.qsort = sortby;
        }
        else {
            this.qsort = '-' + sortby;
        }
        this.router.navigate(['report'], {
            queryParams: { report: this.qreport, startdt: this.qstartdt, enddt: this.qenddt, page: this.qpage || 1, sortby: this.qsort }
        });
    };
    return ReportComponent;
}());
ReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/expense/report.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__expense_service__["a" /* ExpenseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__expense_service__["a" /* ExpenseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["k" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["k" /* DatePipe */]) === "function" && _g || Object])
], ReportComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "../../../../../src/app/expense/viewexpense.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h1 style=\"color:white\">View Expense</h1>\n    </div>\n    <form class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <label for=\"expdt\" class=\"col-sm-2 control-label\" style=\"color:white\">Date</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-calendar\"></i></div>\n                <div class=\"form-ele\">{{ expense?.expensedate | date: 'd MMM y' }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"exptyp\" class=\"col-sm-2 control-label\" style=\"color:white\">Account</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <div class=\"form-ele\">{{ expense?.expensetype }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"expamt\" class=\"col-sm-2 control-label\" style=\"color:white\">Amount</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">$</div>\n                <div class=\"form-ele\">{{ expense?.expenseamt | currency: 'USD':true }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"expdesc\" class=\"col-sm-2 control-label\" style=\"color:white\">Description</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"form-ele\">{{ expense?.expensedesc }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\">\n                <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n            </div>\n        </div>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/expense/viewexpense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_service__ = __webpack_require__("../../../../../src/app/expense/expense.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewexpenseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewexpenseComponent = (function () {
    function ViewexpenseComponent(authService, expenseService, toastr, route, router) {
        this.authService = authService;
        this.expenseService = expenseService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
    }
    ViewexpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getExpense(id);
        });
    };
    ViewexpenseComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewexpenseComponent.prototype.getExpense = function (id) {
        var _this = this;
        this.expenseService.getExpense(id).subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                if (data.data[0]) {
                    _this.expense = data.data[0];
                }
                else {
                    _this.toastr.error('Expense id is incorrect in the URL');
                }
            }
        });
    };
    ViewexpenseComponent.prototype.onBack = function () {
        this.router.navigate(['/report'], { preserveQueryParams: true });
    };
    return ViewexpenseComponent;
}());
ViewexpenseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/expense/viewexpense.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__expense_service__["a" /* ExpenseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__expense_service__["a" /* ExpenseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ViewexpenseComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=viewexpense.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h1>About</h1>\n    </div>\n\n    <div class=\"jumbotron\">\n        <h1>Expense Tracker Application</h1>\n        <p>A  MEAN application which performs CRUD operations!</p>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/home/about.component.html")
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\" class=\"form-signin\" novalidate autocomplete=\"off\">\n        <h2>Please sign in</h2>\n        <label for=\"inputUser\" class=\"sr-only\">Username</label>\n        <input type=\"text\" id=\"inputUser\" class=\"form-control\" [formControl]=\"username\" placeholder=\"Username\" autofocus>\n        <div class=\"text-danger\" *ngIf=\"loginForm.get('username').dirty && loginForm.get('username').invalid\">\n            Please enter username\n        </div>\n      <hr>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [formControl]=\"password\" placeholder=\"Password\">\n        <div class=\"text-danger\" *ngIf=\"loginForm.get('password').dirty && loginForm.get('password').invalid\">\n            Please enter password\n        </div>\n        <br><br>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"loginForm.invalid\" >Sign in</button>\n        <br>\n        <!--<div class=\"row\">-->\n            <!--<div class=\"col-md-6 col-sm-6 col-xs-6\" style=\"color:white\">Forgot Password</div>-->\n\n        <!--</div>-->\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, authService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.loginForm = this.fb.group({
            username: this.username,
            password: this.password,
        });
    }
    LoginComponent.prototype.loginUser = function (formdata) {
        var _this = this;
        if (this.loginForm.dirty && this.loginForm.valid) {
            this.authService.login(this.loginForm.value)
                .subscribe(function (data) {
                if (data.json().success === false) {
                    _this.toastr.error(data.json().message);
                }
                else {
                    _this.toastr.success('Login successful.');
                    _this.router.navigate(['report']);
                }
                _this.loginForm.reset();
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/home/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLoggedIn(state.url);
    };
    AuthGuard.prototype.checkLoggedIn = function (url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.toastr.info("Please login to access this page.");
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.isLoggedIn = function () {
        try {
            var theUser = JSON.parse(localStorage.getItem('currentUser'));
            if (theUser) {
                this.currentUser = theUser.user;
            }
        }
        catch (e) {
            return false;
        }
        return !!this.currentUser;
    };
    AuthService.prototype.login = function (oUser) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        //CHANGE IN DEVELOPMENT MODE TO LOCALHOST!!!!
        // return this.http.post('http://localhost:1978/api/login', JSON.stringify(oUser), options)
        return this.http.post('/api/login', JSON.stringify(oUser), options)
            .do(function (response) {
            if (response.json().success) {
                _this.currentUser = response.json().message;
                var userObj = {};
                userObj.user = response.json().message;
                userObj.token = response.json().token;
                localStorage.setItem('currentUser', JSON.stringify(userObj));
            }
            response.json();
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    };
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/user/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.toastr.success('You have been logged out.');
        this.router.navigate(['login']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], LogoutComponent);

var _a, _b, _c;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h1>Change Password</h1>\n    </div>\n\n    <form [formGroup]=\"passwordForm\" (ngSubmit)=\"updatePassword(passwordForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('oldpassword').invalid && passwordForm.get('oldpassword').dirty}\">\n            <label for=\"oldpassword\" class=\"col-sm-2 control-label\" style=\"color:white\">Existing Password</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-lock\"></i></div>\n                <input type=\"password\" class=\"form-control\" id=\"oldpassword\" [formControl]=\"oldpassword\" placeholder=\"Existing Password\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"passwordForm.get('oldpassword').dirty && passwordForm.get('oldpassword').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('oldpassword').errors.required\">\n                    Please enter existing password\n                </span>\n            </div>\n        </div>\n\n        <div formGroupName=\"passwordGroup\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup').errors }\">\n\n            <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup.password').invalid && passwordForm.get('passwordGroup.password').dirty}\">\n                <label for=\"password\" class=\"col-sm-2 control-label\" style=\"color:white\">New Password</label>\n                <div class=\"input-group col-sm-10\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                    <input type=\"password\" class=\"form-control\" id=\"password\" [formControl]=\"password\" placeholder=\"New Pasword\">\n                </div>\n                <div class=\"text-danger\"  *ngIf=\"passwordForm.get('passwordGroup.password').dirty && passwordForm.get('passwordGroup.password').errors\">\n                    <span class=\"col-sm-2\"></span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.password').errors.required\">\n                        Please enter password\n                    </span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.password').errors.pattern\">\n                        Password must contain one letter, number & special characters\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup.retypepass').invalid && passwordForm.get('passwordGroup.retypepass').dirty}\">\n                <label for=\"retypepass\" class=\"col-sm-2 control-label\" style=\"color:white\">Retype Password <sup>*</sup></label>\n                <div class=\"input-group col-sm-10\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                    <input type=\"password\" class=\"form-control\" [formControl]=\"retypepass\" id=\"retypepass\" placeholder=\"Retype Password\">\n                </div>\n                <div class=\"text-danger\" *ngIf=\"(passwordForm.get('passwordGroup.retypepass').touched || passwordForm.get('passwordGroup.retypepass').dirty) && (passwordForm.get('passwordGroup.retypepass').errors || passwordForm.get('passwordGroup').errors)\">\n                    <span class=\"col-sm-2\"></span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.retypepass').errors?.required\">\n                        Please confirm your password\n                    </span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup').errors?.mismatchedPassword\">\n                        Password do not match\n                    </span>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\">\n                <button type=\"submit\" [disabled]=\"passwordForm.invalid\" class=\"btn btn-primary\">Update</button>\n                <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n            </div>\n        </div>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function comparePassword(c) {
    var passwordControl = c.get('password');
    var confirmControl = c.get('retypepass');
    if (passwordControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (passwordControl.value === confirmControl.value) {
        return null;
    }
    return { 'mismatchedPassword': true };
}
var PasswordComponent = (function () {
    function PasswordComponent(fb, authService, userService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.oldpassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]);
        this.retypepass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
    }
    PasswordComponent.prototype.ngOnInit = function () {
        this.userObj = this.authService.currentUser;
        this.passwordForm = this.fb.group({
            oldpassword: this.oldpassword,
            passwordGroup: this.fb.group({
                password: this.password,
                retypepass: this.retypepass,
            }, { validator: comparePassword })
        });
    };
    PasswordComponent.prototype.updatePassword = function (formdata) {
        var _this = this;
        if (this.passwordForm.dirty && this.passwordForm.valid) {
            var theForm = this.passwordForm.value;
            var thePass = this.passwordForm.value.passwordGroup.password;
            theForm.password = thePass;
            delete theForm.passwordGroup;
            this.userService.updatePassword(this.userObj.userid, theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.toastr.success(data.message);
                }
                _this.passwordForm.reset();
            });
        }
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/user/password.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object])
], PasswordComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=password.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h1>My Profile</h1>\n    </div>\n\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateUser(profileForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\">\n            <label for=\"username\" class=\"col-sm-2 control-label\" style=\"color:white\">Username</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-user\"></i></div>\n                <div class=\"form-ele\">{{ userObj.username }}</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('firstname').invalid && profileForm.get('firstname').dirty}\">\n            <label for=\"fname\" class=\"col-sm-2 control-label\" style=\"color:white\">First Name</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <input type=\"text\" class=\"form-control\" id=\"fname\" [formControl]=\"firstname\" placeholder=\"First Name\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"profileForm.get('firstname').dirty && profileForm.get('firstname').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your first name</span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('lastname').invalid && profileForm.get('lastname').dirty}\">\n            <label for=\"lname\" class=\"col-sm-2 control-label\" style=\"color:white\">Last Name</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-bold\"></i></div>\n                <input type=\"text\" class=\"form-control\" id=\"lname\" [formControl]=\"lastname\" placeholder=\"Last Name\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"profileForm.get('lastname').dirty && profileForm.get('lastname').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your last name</span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('email').invalid && profileForm.get('email').dirty}\">\n            <label for=\"lname\" class=\"col-sm-2 control-label\" style=\"color:white\">Email</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">@</div>\n                <input type=\"text\" class=\"form-control\" id=\"lname\" [formControl]=\"email\" placeholder=\"Email\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"profileForm.get('email').dirty && profileForm.get('email').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter a valid email</span>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"password\" class=\"col-sm-2 control-label\" style=\"color:white\">Last Login</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-calendar\"></i></div>\n                <div class=\"form-ele\">{{ userObj.lastlogin | date:'medium' }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\">\n                <button type=\"submit\" [disabled]=\"profileForm.invalid\" class=\"btn btn-primary\">Update</button>\n                <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n            </div>\n        </div>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(fb, authService, userService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.firstname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.lastname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email]);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.profileForm = this.fb.group({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email
        });
        this.userService.getUser(this.userObj.userid).subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.user = data.data[0];
                _this.populateForm(_this.user);
            }
        });
    };
    ProfileComponent.prototype.populateForm = function (data) {
        this.profileForm.patchValue({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
        });
    };
    ProfileComponent.prototype.updateUser = function (formdata) {
        var _this = this;
        if (this.profileForm.dirty && this.profileForm.valid) {
            this.userService.updateUser(this.userObj.userid, this.profileForm.value)
                .subscribe(function (data) {
                if (data.success === false) {
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.toastr.success(data.message);
                    var theUser = JSON.parse(localStorage.getItem('currentUser'));
                    theUser.user.firstname = _this.profileForm.value.firstname;
                    localStorage.setItem('currentUser', JSON.stringify(theUser));
                }
            });
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/user/profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h1>Register</h1>\n    </div>\n\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser(registerForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('firstname').invalid && registerForm.get('firstname').dirty}\">\n            <label for=\"fname\" class=\"col-sm-2 control-label\" style=\"color:white\">First Name <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"firstname\" id=\"fname\" placeholder=\"First Name\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"registerForm.get('firstname').dirty && registerForm.get('firstname').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('firstname').errors.required\">\n                    Please enter your first name\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('lastname').invalid && registerForm.get('lastname').dirty}\">\n            <label for=\"lname\" class=\"col-sm-2 control-label\" style=\"color:white\">Last Name <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-bold\"></i></div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"lastname\" id=\"lname\" placeholder=\"Last Name\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"registerForm.get('lastname').dirty && registerForm.get('lastname').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('lastname').errors.required\">\n                    Please enter your last name\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('email').invalid && registerForm.get('email').dirty}\">\n            <label for=\"email\" class=\"col-sm-2 control-label\" style=\"color:white\">Email <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">@</div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"email\" id=\"email\" placeholder=\"Email\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"registerForm.get('email').dirty && registerForm.get('email').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('email').invalid\">\n                    Please enter a valid email\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('username').invalid && registerForm.get('username').dirty}\">\n            <label for=\"username\" class=\"col-sm-2 control-label\" style=\"color:white\">Username <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-user\"></i></div>\n                <input type=\"text\" class=\"form-control\" [formControl]=\"username\" id=\"username\" placeholder=\"Username\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"registerForm.get('username').dirty && registerForm.get('username').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('username').errors.required\">\n                    Please enter username\n                </span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('username').errors.minlength\">\n                    Username must be longer than 3 characters.\n                </span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('username').errors.maxlength\">\n                    Username cannot be longer than 16 characters.\n                </span>\n            </div>\n        </div>\n\n         <div formGroupName=\"passwordGroup\" [ngClass]=\"{'has-error': registerForm.get('passwordGroup').errors }\">\n\n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('passwordGroup.password').invalid && registerForm.get('passwordGroup.password').dirty}\">\n                <label for=\"password\" class=\"col-sm-2 control-label\" style=\"color:white\">Password <sup>*</sup></label>\n                <div class=\"input-group col-sm-10\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                    <input type=\"password\" class=\"form-control\" [formControl]=\"password\" id=\"password\" placeholder=\"Pasword\">\n                </div>\n                <div class=\"text-danger\"  *ngIf=\"registerForm.get('passwordGroup.password').dirty && registerForm.get('passwordGroup.password').errors\">\n                    <span class=\"col-sm-2\"></span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup.password').errors.required\">\n                        Please enter password\n                    </span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup.password').errors.pattern\">\n                        Password must contain one letter, number & special characters\n                    </span>\n                </div>\n\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('passwordGroup.retypepass').invalid && registerForm.get('passwordGroup.retypepass').dirty}\">\n                <label for=\"retypepass\" class=\"col-sm-2 control-label\" style=\"color:white\">Retype Password <sup>*</sup></label>\n                <div class=\"input-group col-sm-10\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                    <input type=\"password\" class=\"form-control\" [formControl]=\"retypepass\" id=\"retypepass\" placeholder=\"Retype Password\">\n                </div>\n                <div class=\"text-danger\" *ngIf=\"(registerForm.get('passwordGroup.retypepass').touched || registerForm.get('passwordGroup.retypepass').dirty) && (registerForm.get('passwordGroup.retypepass').errors || registerForm.get('passwordGroup').errors)\">\n                    <span class=\"col-sm-2\"></span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup.retypepass').errors?.required\">\n                        Please confirm your password\n                    </span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup').errors?.mismatchedPassword\">\n                        Password do not match\n                    </span>\n                </div>\n            </div>\n\n         </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-5\">\n                <button type=\"submit\" [disabled]=\"registerForm.invalid\" class=\"btn btn-primary\">Submit</button>\n                <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n            </div>\n            <div class=\"col-sm-5\" style=\"text-align:right\">\n                <sup>*</sup> required\n            </div>\n        </div>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function comparePassword(c) {
    var passwordControl = c.get('password');
    var confirmControl = c.get('retypepass');
    if (passwordControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (passwordControl.value === confirmControl.value) {
        return null;
    }
    return { 'mismatchedPassword': true };
}
var RegisterComponent = (function () {
    function RegisterComponent(fb, userService, router, toastr) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.firstname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.lastname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email]);
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(16)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]);
        this.retypepass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            username: this.username,
            passwordGroup: this.fb.group({
                password: this.password,
                retypepass: this.retypepass,
            }, { validator: comparePassword })
        });
    };
    RegisterComponent.prototype.registerUser = function (formdata) {
        var _this = this;
        if (this.registerForm.dirty && this.registerForm.valid) {
            var theForm = this.registerForm.value;
            var thePass = this.registerForm.value.passwordGroup.password;
            theForm.password = thePass;
            delete theForm.passwordGroup;
            this.userService.register(theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.toastr.error(data.message);
                }
                else {
                    _this.toastr.success(data.message);
                    _this.router.navigate(['login']);
                }
                _this.registerForm.reset();
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        template: __webpack_require__("../../../../../src/app/user/register.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("../../../../../src/app/user/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_component__ = __webpack_require__("../../../../../src/app/user/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_component__ = __webpack_require__("../../../../../src/app/user/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logout_component__ = __webpack_require__("../../../../../src/app/user/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guard_service__ = __webpack_require__("../../../../../src/app/user/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_service__ = __webpack_require__("../../../../../src/app/user/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
                { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */] },
                { path: 'profile', canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard_service__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */] },
                { path: 'password', canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard_service__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_6__password_component__["a" /* PasswordComponent */] },
                { path: 'logout', canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard_service__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_7__logout_component__["a" /* LogoutComponent */] }
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_6__password_component__["a" /* PasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_7__logout_component__["a" /* LogoutComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_10__user_service__["a" /* UserService */]
        ]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http) {
        this.http = http;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    UserService.prototype.register = function (oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        //CHANGE IN DEVELOPMENT MODE TO LOCALHOST !!!!!
        // return this.http.post('http://localhost:1978/register', JSON.stringify(oUser), options)
        return this.http.post('/register', JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (userid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // return this.http.get(`http://localhost:1978/api/user/${userid}`, options)
        return this.http.get("/api/user/" + userid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (userid, oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // return this.http.put(`http://localhost:1978/api/user/${userid}`, JSON.stringify(oUser), options)
        return this.http.put("/api/user/" + userid, JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updatePassword = function (userid, oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // return this.http.put(`http://localhost:1978/api/password/${userid}`, JSON.stringify(oUser), options)
        return this.http.put("/api/password/" + userid, JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map