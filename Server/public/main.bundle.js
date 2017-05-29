webpackJsonp([1,4],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(161);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_Login_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(48);
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
/**
 * Created by Amila on 5/25/2017.
 */



var LoginComponent = (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
        this.userName = null;
        this.userPassword = null;
    }
    LoginComponent.prototype.loginToSystem = function () {
        var _this = this;
        return this.service.loginToSystem(this.userName, this.userPassword)
            .subscribe(function (res) {
            if (res.status === 200) {
                localStorage.setItem('medicine_user_id', res.userInfo.id);
                localStorage.setItem('medicine_user_type', res.userInfo.type);
                if (res.userInfo.type === 0) {
                    _this.router.navigateByUrl('/askquestion');
                }
                if (res.userInfo.type === 1 || res.userInfo.type === 2) {
                    _this.router.navigateByUrl('/viewquestion');
                }
            }
            else {
                alert('Invalid attempt, please try again with valid informations');
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        this.router.navigateByUrl('/signup');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(225),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Service_Login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Service_Login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_UserType_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 5/25/2017.
 */



var NavigationComponent = (function () {
    function NavigationComponent(userTypeDefinder, router) {
        this.userTypeDefinder = userTypeDefinder;
        this.router = router;
        var scope = this;
        this.userTypeDefinder.identifyUserTypes(function (res) {
            scope.isAdmin = res.isAdmin;
            scope.isPatient = res.isPatient;
            scope.isDoctor = res.isDoctor;
        });
    }
    NavigationComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('/');
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(226),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Service_UserType_service__["a" /* UserTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Service_UserType_service__["a" /* UserTypeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_UserService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_Question_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 5/25/2017.
 */



var AddQuestionComponent = (function () {
    function AddQuestionComponent(userService, questionService) {
        var _this = this;
        this.userService = userService;
        this.questionService = questionService;
        this.doctors = null;
        this.selectedDoctor = null;
        this.userService.getAllDoctors().subscribe(function (res) {
            if (res.length !== 0) {
                _this.doctors = res;
            }
        });
    }
    AddQuestionComponent.prototype.addQuestion = function () {
        this.questionService.addQuestion(this.reason, this.selectedDoctor)
            .subscribe(function (res) {
            if (res) {
                alert("You have successfully inserted the question");
            }
        });
    };
    return AddQuestionComponent;
}());
AddQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ask-question',
        template: __webpack_require__(227),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Service_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Service_UserService__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Service_Question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Service_Question_service__["a" /* QuestionService */]) === "function" && _b || Object])
], AddQuestionComponent);

var _a, _b;
//# sourceMappingURL=addquestion.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_Question_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_UserService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_UserType_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 5/25/2017.
 */




var ViewQuestionComponent = (function () {
    function ViewQuestionComponent(service, userService, userTypes) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.userTypes = userTypes;
        this.selectedQuestion = null;
        this.service.getQuestions()
            .subscribe(function (res) {
            if (res.length !== 0) {
                _this.questions = res;
                userService.getAllDoctors().subscribe(function (result) {
                    if (result.length !== 0) {
                        _this.doctors = result;
                        _this.questions.forEach(function (question) {
                            _this.doctors.forEach(function (doctor) {
                                if (question.DoctorId === doctor.id) {
                                    question.doctorName = doctor.name;
                                }
                            });
                        });
                        _this.userTypes.identifyUserTypes(function (authenticated) {
                            _this.isDoctor = authenticated.isDoctor;
                            _this.isPatient = authenticated.isPatient;
                            _this.isAdmin = authenticated.isAdmin;
                        });
                    }
                });
            }
        });
    }
    ViewQuestionComponent.prototype.questionSelect = function (selectedQuestion) {
        this.selectedQuestion = selectedQuestion;
    };
    ViewQuestionComponent.prototype.updateContent = function () {
        this.service.updateQuestion(this.selectedQuestion).subscribe(function (res) {
            if (res) {
                alert('Successfully updated question');
            }
        });
    };
    ViewQuestionComponent.prototype.deleteQuestion = function (id) {
        var _this = this;
        this.service.deleteQuestion(id)
            .subscribe(function (res) {
            if (res) {
                alert('successfully deleted question');
                var count_1 = 0;
                _this.questions.forEach(function (question) {
                    if (question.id === id) {
                        _this.questions.splice(count_1, 1);
                    }
                    count_1 = count_1 + 1;
                });
            }
        });
    };
    return ViewQuestionComponent;
}());
ViewQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-question',
        template: __webpack_require__(228),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Service_Question_service__["a" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Service_Question_service__["a" /* QuestionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Service_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Service_UserService__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Service_UserType_service__["a" /* UserTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Service_UserType_service__["a" /* UserTypeService */]) === "function" && _c || Object])
], ViewQuestionComponent);

var _a, _b, _c;
//# sourceMappingURL=viewquestion.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(229),
        styles: [__webpack_require__(221)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_UserService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 5/29/2017.
 */



var SignupComponent = (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.name = null;
        this.password = null;
        this.type = null;
    }
    SignupComponent.prototype.addNewUser = function () {
        var _this = this;
        this.type = 0;
        this.userService.addNewUser(this.name, this.type, this.password)
            .subscribe(function (res) {
            if (res) {
                _this.router.navigateByUrl('/');
            }
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(230),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Service_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Service_UserService__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_UserService__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 5/28/2017.
 */


var AddUserComponent = (function () {
    function AddUserComponent(userService) {
        this.userService = userService;
        this.name = null;
        this.password = null;
        this.type = null;
    }
    AddUserComponent.prototype.addNewUser = function () {
        this.userService.addNewUser(this.name, this.type, this.password)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-user',
        template: __webpack_require__(231),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Service_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Service_UserService__["a" /* UserService */]) === "function" && _a || Object])
], AddUserComponent);

var _a;
//# sourceMappingURL=adduser.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_UserService__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 5/28/2017.
 */


var ViewUserComponent = (function () {
    function ViewUserComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.selectedUser = null;
        this.userService.getAllUsers()
            .subscribe(function (res) {
            _this.users = res;
        });
    }
    ViewUserComponent.prototype.selectUser = function (userInstance) {
        this.selectedUser = userInstance;
    };
    ViewUserComponent.prototype.updateUserInformation = function () {
        this.userService.updateUserInformation(this.selectedUser)
            .subscribe(function (res) {
            if (res) {
                alert('Successfully updated');
            }
        });
    };
    ViewUserComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUser(userId)
            .subscribe(function (res) {
            if (res) {
                alert('successfully deleted user');
                var count_1 = 0;
                _this.users.forEach(function (user) {
                    if (user.id === userId) {
                        _this.users.splice(count_1, 1);
                    }
                    count_1 = count_1 + 1;
                });
            }
        });
    };
    return ViewUserComponent;
}());
ViewUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-user',
        template: __webpack_require__(232),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Service_UserService__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Service_UserService__["a" /* UserService */]) === "function" && _a || Object])
], ViewUserComponent);

var _a;
//# sourceMappingURL=viewuser.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_RootComponents_app_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_LoginComponent_login_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_NavigationBar_navigation_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_QuestionComponent_AddQuestionComponent_addquestion_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_QuestionComponent_ViewQuestionComponent_viewquestion_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Components_UserComponent_AddUserComponent_adduser_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Components_UserComponent_ViewUserComponent_viewuser_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Components_SignUpComponent_signup_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Service_Addresses_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Service_Login_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Service_UserType_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Service_UserService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Service_Question_service__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__Components_RootComponents_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__Components_LoginComponent_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Components_NavigationBar_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__Components_QuestionComponent_AddQuestionComponent_addquestion_component__["a" /* AddQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Components_QuestionComponent_ViewQuestionComponent_viewquestion_component__["a" /* ViewQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Components_UserComponent_ViewUserComponent_viewuser_component__["a" /* ViewUserComponent */],
            __WEBPACK_IMPORTED_MODULE_11__Components_UserComponent_AddUserComponent_adduser_component__["a" /* AddUserComponent */],
            __WEBPACK_IMPORTED_MODULE_13__Components_SignUpComponent_signup_component__["a" /* SignupComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_7__Components_LoginComponent_login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'askquestion',
                    component: __WEBPACK_IMPORTED_MODULE_9__Components_QuestionComponent_AddQuestionComponent_addquestion_component__["a" /* AddQuestionComponent */]
                },
                {
                    path: 'viewquestion',
                    component: __WEBPACK_IMPORTED_MODULE_10__Components_QuestionComponent_ViewQuestionComponent_viewquestion_component__["a" /* ViewQuestionComponent */]
                },
                {
                    path: 'viewusers',
                    component: __WEBPACK_IMPORTED_MODULE_12__Components_UserComponent_ViewUserComponent_viewuser_component__["a" /* ViewUserComponent */]
                },
                {
                    path: 'adduser',
                    component: __WEBPACK_IMPORTED_MODULE_11__Components_UserComponent_AddUserComponent_adduser_component__["a" /* AddUserComponent */]
                },
                {
                    path: 'signup',
                    component: __WEBPACK_IMPORTED_MODULE_13__Components_SignUpComponent_signup_component__["a" /* SignupComponent */]
                }
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__Service_Addresses_service__["a" /* AddressesService */],
            __WEBPACK_IMPORTED_MODULE_15__Service_Login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_16__Service_UserType_service__["a" /* UserTypeService */],
            __WEBPACK_IMPORTED_MODULE_17__Service_UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_18__Service_Question_service__["a" /* QuestionService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__Components_RootComponents_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 161:
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

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// module
exports.push([module.i, "/* NOTE: The styles were added inline because Prefixfree needs access to your styles and they must be inlined if they are on local disk! */\r\n.btn { display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 18px; color: #333333; text-align: center;text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; background-color: #f5f5f5; background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; -webkit-filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); border-color: #e6e6e6 #e6e6e6 #e6e6e6; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); border: 1px solid #e6e6e6; border-radius: 4px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; *margin-left: .3em; }\r\n.btn:hover, .btn:active, .btn.active, .btn.disabled, .btn[disabled] { background-color: #e6e6e6; }\r\n.btn-large { padding: 9px 14px; font-size: 15px; line-height: normal; border-radius: 5px; }\r\n.btn:hover { color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; transition: background-position 0.1s linear; }\r\n.btn-primary, .btn-primary:hover { text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff; }\r\n.btn-primary.active { color: rgba(255, 255, 255, 0.75); }\r\n.btn-primary { background-color: #4a77d4; background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; -webkit-filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0); filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); }\r\n.btn-primary:hover, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] { -webkit-filter: none; filter: none; background-color: #4a77d4; }\r\n.btn-block { width: 100%; display:block; }\r\n* { -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box; }\r\nhtml { width: 100%; height:100%; overflow:hidden; }\r\nbody {\r\n  width: 100%;\r\n  height:100%;\r\n  font-family: 'Open Sans', sans-serif;\r\n  background: #092756;\r\n  background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );\r\n}\r\n.login {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: -150px 0 0 -150px;\r\n  width:300px;\r\n  height:300px;\r\n}\r\n.login h1 { color: #333333; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; }\r\ninput {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  background: rgba(0,0,0,0.3);\r\n  border: none;\r\n  outline: none;\r\n  padding: 10px;\r\n  font-size: 13px;\r\n  color: #fff;\r\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\r\n  border: 1px solid rgba(0,0,0,0.3);\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);\r\n  transition: box-shadow .5s ease;\r\n}\r\ninput:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: #333;\r\n}\r\n\r\nli {\r\n  float: left;\r\n  border-right:1px solid #bbb;\r\n}\r\n\r\nli:last-child {\r\n  border-right: none;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  color: white;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\nli a:hover:not(.active) {\r\n  background-color: #111;\r\n}\r\n\r\n.active {\r\n  background-color: #4CAF50;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html >\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>Login Form</title>\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css\">\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js\"></script>\r\n</head>\r\n<body>\r\n  <div class=\"login\">\r\n    <h1><i class=\"fa fa-h-square fa-4x\" aria-hidden=\"true\" style=\"text-align: center\"></i></h1>\r\n    <h1>\r\n       L o g i n\r\n    </h1>\r\n    <form method=\"post\">\r\n      <input type=\"text\" name=\"userName\" placeholder='Your Name' required=\"required\" [(ngModel)] = \"userName\"/>\r\n      <input type=\"password\" name=\"userPassword\" placeholder=\"Your password\" required=\"required\" [(ngModel)] = \"userPassword\"/>\r\n      <button class=\"btn btn-primary btn-block btn-large\" (click)=\"loginToSystem()\">Let me in.</button>\r\n      <button class=\"btn btn-success btn-block btn-large\" (click)=\"signUp()\">SignUp</button>\r\n    </form>\r\n  </div>\r\n  <script src=\"js/index.js\"></script>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li [routerLinkActive]=\"['active']\" *ngIf=\"isPatient\">\r\n    <a routerLink=\"/askquestion\">\r\n      <i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\r\n      Ask Question\r\n    </a>\r\n  </li>\r\n  <li [routerLinkActive]=\"['active']\">\r\n    <a routerLink=\"/viewquestion\">\r\n      <i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i>\r\n      View Question\r\n    </a>\r\n  </li>\r\n  <li [routerLinkActive]=\"['active']\" *ngIf=\"isAdmin\">\r\n    <a routerLink=\"/viewusers\">\r\n      <i class=\"fa fa-users\" aria-hidden=\"true\"></i>\r\n      View Users\r\n    </a>\r\n  </li>\r\n  <li [routerLinkActive]=\"['active']\" *ngIf=\"isAdmin\">\r\n    <a routerLink=\"/adduser\">\r\n      <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\r\n      Add User\r\n    </a>\r\n  </li>\r\n  <li style=\"float:right\" [routerLinkActive]=\"['active']\">\r\n    <a href=\"#\" (click)=\"logout()\">\r\n      <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r\n      Log Out\r\n    </a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-1\"></div>\r\n  <div class=\"col-sm-10\">\r\n    <h1><i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i> Ask Question</h1>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"reason\">Question</label>\r\n        <textarea class=\"form-control\" id=\"reason\" aria-describedby=\"reason\" placeholder=\"Enter Question\" rows=\"10\" [(ngModel)]=\"reason\" name=\"reason\"></textarea>\r\n        <small id=\"reasonHelp\" class=\"form-text text-muted\">Describe the question that you ask from doctor short and clear</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Select Doctor</label>\r\n        <select class=\"form-control\" [(ngModel)]=\"selectedDoctor\" *ngIf=\"doctors\" name=\"selectedDoctor\">\r\n          <option *ngFor=\"let doctor of doctors\" value=\"{{doctor.id}}\">Dr.{{doctor.name}}</option>\r\n        </select>\r\n        <small id=\"doctor\" class=\"form-text text-muted\">Select the doctor that the question you going to ask from</small>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addQuestion()\">Submit</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-sm-1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-1\"></div>\r\n  <div class=\"col-sm-10\">\r\n    <h1><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i> View Question</h1>\r\n    <table class=\"table table-inverse\" [mfData]=\"questions\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"8\">\r\n      <thead>\r\n      <tr>\r\n        <th style=\"width: 20%\">\r\n          <mfDefaultSorter by=\"id\">Question ID</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 20%\">\r\n          <mfDefaultSorter by=\"question\">Question</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 20%\">\r\n          <mfDefaultSorter by=\"doctorAnswer\">Doctor Answer</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 20%\">\r\n          <mfDefaultSorter by=\"acceeptStatus\">AcceptStatus</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 20%\" *ngIf=\"isPatient || isAdmin\">\r\n          <mfDefaultSorter by=\"DoctorId\">Doctor</mfDefaultSorter>\r\n        </th>\r\n        <th>\r\n          Option\r\n        </th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let question of mf.data\">\r\n        <td>{{question.id}}</td>\r\n        <td>{{question.question}}</td>\r\n        <td>\r\n          <span *ngIf=\"question.doctorAnswer\">\r\n            {{question.doctorAnswer}}\r\n          </span>\r\n          <span *ngIf=\"!question.doctorAnswer\">\r\n            <span  class=\"label label-danger\">Answer is not provided</span>\r\n          </span>\r\n        </td>\r\n        <td [ngSwitch]=\"question.acceeptStatus\">\r\n          <span *ngSwitchCase=\"2\" class=\"label label-danger\">Not Accepted</span>\r\n          <span *ngSwitchCase=\"1\" class=\"label label-success\">Accepted</span>\r\n          <span *ngSwitchCase=\"0\" class=\"label label-primary\">Pending</span>\r\n        </td>\r\n        <td *ngIf=\"isPatient || isAdmin\">Dr {{question.doctorName}}</td>\r\n        <td>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n              <button class=\"btn btn-link\" (click)=\"questionSelect(question)\"  data-toggle=\"modal\" data-target=\"#myModal\">\r\n                <i class=\"fa fa-pencil\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              <button class=\"btn btn-link\" *ngIf=\"isPatient\" (click)=\"deleteQuestion(question.id)\">\r\n                <i class=\"fa fa-trash\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      <tr>\r\n        <td colspan=\"4\">\r\n          <mfBootstrapPaginator></mfBootstrapPaginator>\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n  <div class=\"col-sm-1\"></div>\r\n</div>\r\n\r\n<!-- model to update question -->\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\" *ngIf=\"selectedQuestion\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #092756; color: white;\">\r\n        <button type=\"button\" style=\"color: white;\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\"> Question Editable</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"reason\">Question</label>\r\n          <div *ngIf=\"isPatient || isAdmin\">\r\n            <textarea class=\"form-control\" id=\"reason\" aria-describedby=\"reason\" placeholder=\"Enter Question\" rows=\"10\" [(ngModel)]=\"selectedQuestion.question\" name=\"reason\"></textarea>\r\n          </div>\r\n          <div *ngIf=\"isDoctor\">\r\n            <textarea class=\"form-control\" id=\"reason\" aria-describedby=\"reason\" placeholder=\"Enter Question\" rows=\"10\" [(ngModel)]=\"selectedQuestion.question\" name=\"reason\" disabled></textarea>\r\n          </div>\r\n          <small id=\"reasonHelp\" class=\"form-text text-muted\">Describe the question that you ask from doctor short and clear</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"reason\">Doctor answer</label>\r\n          <textarea class=\"form-control\" aria-describedby=\"reason\" placeholder=\"Enter Answer\" rows=\"10\" [(ngModel)]=\"selectedQuestion.doctorAnswer\" name=\"answer\" *ngIf=\"isDoctor\"></textarea>\r\n          <div *ngIf=\"isPatient || isAdmin\">\r\n            <textarea class=\"form-control\" aria-describedby=\"reason\" placeholder=\"Enter Answer\" rows=\"10\" [(ngModel)]=\"selectedQuestion.doctorAnswer\" name=\"answer\" *ngIf=\"isAdmin|| isPatient\" disabled></textarea>\r\n            <span *ngIf=\"!selectedQuestion.doctorAnswer\">\r\n              <span  class=\"label label-danger\">Answer is not provided</span>\r\n            </span>\r\n          </div>\r\n          <small class=\"form-text text-muted\">Doctor's answer</small>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"isPatient || isAdmin\">\r\n          <label>Select Doctor</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"selectedQuestion.DoctorId\" *ngIf=\"doctors && (isPatient || isAdmin)\" name=\"selectedDoctor\">\r\n            <option *ngFor=\"let doctor of doctors\" value=\"{{doctor.id}}\">Dr.{{doctor.name}}</option>\r\n          </select>\r\n          <small id=\"doctor\" class=\"form-text text-muted\">Select the doctor that the question you going to ask from</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Acceptance state</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"selectedQuestion.acceeptStatus\" *ngIf=\"isDoctor\">\r\n            <option value=\"2\">Not Accepted</option>\r\n            <option value=\"1\">Accepted</option>\r\n            <option value=\"0\">Pending</option>\r\n          </select>\r\n          <div [ngSwitch]=\"selectedQuestion.acceeptStatus\">\r\n            <span *ngSwitchCase=\"2\" class=\"label label-danger\">Not Accepted</span>\r\n            <span *ngSwitchCase=\"1\" class=\"label label-success\">Accepted</span>\r\n            <span *ngSwitchCase=\"0\" class=\"label label-primary\">Pending</span>\r\n          </div>\r\n          <small class=\"form-text text-muted\">Doctor acceptance state</small>\r\n        </div>\r\n        <div>\r\n          <button class=\"btn btn-success\" (click)=\"updateContent()\">\r\n            <i class=\"fa fa-pencil\"></i>\r\n            Update\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-1\"></div>\r\n  <div class=\"col-sm-10\">\r\n    <h1><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> Add User</h1>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"userName\">User Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"userName\" aria-describedby=\"emailHelp\" placeholder=\"Enter User Name\" [(ngModel)]=\"name\" name=\"name\">\r\n        <small id=\"userNameHelp\" class=\"form-text text-muted\">Enter user name</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"userPassword\">Login Password</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"userPassword\" aria-describedby=\"emailHelp\" placeholder=\"Enter User Password\" [(ngModel)]=\"password\" name=\"password\">\r\n        <small id=\"userPasswordHelp\" class=\"form-text text-muted\">Enter the password</small>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addNewUser()\">\r\n        <i class=\"fa fa-plus\"></i>\r\n        Submit\r\n      </button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-sm-1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-1\"></div>\r\n  <div class=\"col-sm-10\">\r\n    <h1><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> Add User</h1>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"userName\">User Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"userName\" aria-describedby=\"emailHelp\" placeholder=\"Enter User Name\" [(ngModel)]=\"name\" name=\"name\">\r\n        <small id=\"userNameHelp\" class=\"form-text text-muted\">Enter user name</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"userPassword\">Login Password</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"userPassword\" aria-describedby=\"emailHelp\" placeholder=\"Enter User Password\" [(ngModel)]=\"password\" name=\"password\">\r\n        <small id=\"userPasswordHelp\" class=\"form-text text-muted\">Enter the password</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"selectUserType\">Select User Type</label>\r\n        <select class=\"form-control\" id=\"selectUserType\" [(ngModel)]=\"type\" name=\"type\">\r\n          <option value=\"1\">Doctor</option>\r\n          <option value=\"0\">Patient</option>\r\n        </select>\r\n        <small id=\"userTypedHelp\" class=\"form-text text-muted\">Select User either doctor or patient</small>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addNewUser()\">\r\n        <i class=\"fa fa-plus\"></i>\r\n        Submit\r\n      </button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-sm-1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-1\"></div>\r\n  <div class=\"col-sm-10\">\r\n    <h1><i class=\"fa fa-users\" aria-hidden=\"true\"></i> View Users</h1>\r\n    <a routerLink=\"/adduser\" class=\"pull-right\">\r\n      <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\r\n      Add User\r\n    </a>\r\n    <table class=\"table table-inverse\" [mfData]=\"users\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"8\">\r\n      <thead>\r\n      <tr>\r\n        <th style=\"width: 20%\">\r\n          <mfDefaultSorter by=\"id\">User Id</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 20%\">\r\n          <mfDefaultSorter by=\"question\">User Name</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 20%\">\r\n          <mfDefaultSorter by=\"password\">Login Password</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 20%\">\r\n          <mfDefaultSorter by=\"type\">User Type</mfDefaultSorter>\r\n        </th>\r\n        <th>\r\n          Option\r\n        </th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let user of mf.data\">\r\n        <td>{{user.id}}</td>\r\n        <td>{{user.name}}</td>\r\n        <td>{{user.password}}</td>\r\n        <td [ngSwitch]=\"user.type\">\r\n          <span *ngSwitchCase=\"2\" class=\"label label-danger\">Admin</span>\r\n          <span *ngSwitchCase=\"1\" class=\"label label-success\">Doctor</span>\r\n          <span *ngSwitchCase=\"0\" class=\"label label-primary\">Patient</span>\r\n        </td>\r\n        <td>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n              <button class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#myModalTwo\" (click)=\"selectUser(user)\">\r\n                <i class=\"fa fa-pencil\"></i>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-sm-5\" *ngIf=\"user.type !== 2\">\r\n              <button class=\"btn btn-link\" (click)=\"deleteUser(user.id)\">\r\n                <i class=\"fa fa-trash\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      <tr>\r\n        <td colspan=\"4\">\r\n          <mfBootstrapPaginator></mfBootstrapPaginator>\r\n        </td>\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n  <div class=\"col-sm-1\"></div>\r\n</div>\r\n\r\n<!-- user individual edit panel -->\r\n<div class=\"modal fade\" id=\"myModalTwo\" role=\"dialog\" *ngIf=\"selectedUser\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"background-color: #092756; color: white;\">\r\n        <button type=\"button\" style=\"color: white;\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\"> User Editable </h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"userName\">User Name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"userName\" aria-describedby=\"emailHelp\" placeholder=\"Enter User Name\" [(ngModel)]=\"selectedUser.name\" name=\"userName\">\r\n          <small id=\"userNameHelp\" class=\"form-text text-muted\">Enter user name</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"userPassword\">Login Password</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"userPassword\" aria-describedby=\"emailHelp\" placeholder=\"Enter User Password\" [(ngModel)]=\"selectedUser.password\" name=\"userPassword\">\r\n          <small id=\"userPasswordHelp\" class=\"form-text text-muted\">Enter the password</small>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"selectedUser.type !== 2\">\r\n          <label for=\"selectUserType\">Select User Type</label>\r\n          <select class=\"form-control\" id=\"selectUserType\" [(ngModel)]=\"selectedUser.type\">\r\n            <option value=\"1\">Doctor</option>\r\n            <option value=\"0\">Patient</option>\r\n          </select>\r\n          <small id=\"userTypedHelp\" class=\"form-text text-muted\">Select User either doctor or patient</small>\r\n        </div>\r\n        <div>\r\n          <button class=\"btn btn-success\" (click)=\"updateUserInformation()\">\r\n            <i class=\"fa fa-pencil\"></i>\r\n            Update\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Addresses_service__ = __webpack_require__(49);
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
/**
 * Created by Amila on 5/25/2017.
 */




var UserService = (function () {
    function UserService(rootAddresses, http) {
        this.rootAddresses = rootAddresses;
        this.http = http;
        this.rootUrl = this.rootAddresses.actionUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    UserService.prototype.getAllDoctors = function () {
        return this.http.get(this.rootUrl + 'user/get/doctors').map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.getAllUsers = function () {
        return this.http.get(this.rootUrl + 'user/get/all').map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUserInformation = function (userInstance) {
        return this.http.put(this.rootUrl + 'user/update', {
            name: userInstance.name,
            type: userInstance.type,
            password: userInstance.password,
            id: userInstance.id
        }).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.addNewUser = function (name, type, password) {
        return this.http.post(this.rootUrl + 'user/add', {
            name: name,
            type: type,
            password: password
        }).map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.rootUrl + 'user/delete/' + userId)
            .map(function (res) {
            if (res.status === 200) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Addresses_service__["a" /* AddressesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Addresses_service__["a" /* AddressesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=UserService.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 5/25/2017.
 */


var AddressesService = (function () {
    function AddressesService() {
        this.actionUrl = 'http://localhost:8002/';
    }
    return AddressesService;
}());
AddressesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AddressesService);

//# sourceMappingURL=Addresses.service.js.map

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Addresses_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 5/25/2017.
 */




var QuestionService = (function () {
    function QuestionService(rootAddresses, http) {
        this.rootAddresses = rootAddresses;
        this.http = http;
        this.rootUrl = this.rootAddresses.actionUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    QuestionService.prototype.addQuestion = function (reason, doctorId) {
        return this.http.post(this.rootUrl + 'appointment/add', {
            reason: reason,
            doctorId: doctorId,
            userId: localStorage.getItem('medicine_user_id')
        }).map(function (res) {
            return res.json();
        });
    };
    QuestionService.prototype.getQuestions = function () {
        if (parseInt(localStorage.getItem('medicine_user_type')) === 0) {
            return this.http.get(this.rootUrl + 'appointment/view/patient/' + localStorage.getItem('medicine_user_id'))
                .map(function (res) {
                return res.json();
            });
        }
        if (parseInt(localStorage.getItem('medicine_user_type')) === 1) {
            return this.http.get(this.rootUrl + 'appointment/view/doctor/' + localStorage.getItem('medicine_user_id'))
                .map(function (res) {
                return res.json();
            });
        }
        if (parseInt(localStorage.getItem('medicine_user_type')) === 2) {
            return this.http.get(this.rootUrl + 'appointment/view/all')
                .map(function (res) {
                return res.json();
            });
        }
    };
    QuestionService.prototype.updateQuestion = function (updatedInstance) {
        return this.http.post(this.rootUrl + 'appointment/update', {
            id: updatedInstance.id,
            reason: updatedInstance.reason,
            userId: updatedInstance.userId,
            doctorId: parseInt(updatedInstance.doctorId),
            status: updatedInstance.acceeptStatus,
            doctorAnswer: updatedInstance.doctorAnswer
        }).map(function (res) {
            return res.json();
        });
    };
    QuestionService.prototype.deleteQuestion = function (id) {
        return this.http.delete(this.rootUrl + 'appointment/delete/' + id)
            .map(function (res) {
            if (res.status === 200) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    return QuestionService;
}());
QuestionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Addresses_service__["a" /* AddressesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Addresses_service__["a" /* AddressesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _b || Object])
], QuestionService);

var _a, _b;
//# sourceMappingURL=Question.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 5/25/2017.
 */


var UserTypeService = (function () {
    function UserTypeService() {
        this.isDoctor = false;
        this.isPatient = false;
        this.isAdmin = false;
    }
    UserTypeService.prototype.identifyUserTypes = function (callback) {
        var type = parseInt(localStorage.getItem('medicine_user_type'));
        if (type === 0) {
            this.isPatient = true;
        }
        if (type === 1) {
            this.isDoctor = true;
        }
        if (type === 2) {
            this.isAdmin = true;
        }
        return callback({
            isDoctor: this.isDoctor,
            isPatient: this.isPatient,
            isAdmin: this.isAdmin
        });
    };
    return UserTypeService;
}());
UserTypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserTypeService);

//# sourceMappingURL=UserType.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Addresses_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Amila on 5/25/2017.
 */




var LoginService = (function () {
    function LoginService(rootAddresses, http) {
        this.rootAddresses = rootAddresses;
        this.http = http;
        this.rootUrl = this.rootAddresses.actionUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    /*
     * login to the system
     */
    LoginService.prototype.loginToSystem = function (userName, password) {
        return this.http.post(this.rootUrl + 'user/login', {
            userName: userName,
            password: password
        }).map(function (res) {
            return res.json();
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Addresses_service__["a" /* AddressesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Addresses_service__["a" /* AddressesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=Login.service.js.map

/***/ })

},[501]);
//# sourceMappingURL=main.bundle.js.map