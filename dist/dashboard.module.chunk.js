webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/components/add-user/add-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n        <!-- Tab panes -->\r\n        <div class=\"col-md-12 tab-wrapper\">\r\n            <div class=\"search-section1\">\r\n                <form>\r\n                    <div class=\"col-md-12 form-margin-bottom\">\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-12 padding-right margin-res\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"First Name\">\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-12  padding-left margin-res\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\">\r\n                        </div>\r\n                        <div class=\"clear\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-12 col-xs-12 form-margin-bottom margin-res\">\r\n                        <div class=\"col-md-12 col-xs-12 no-padding\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n                        </div>\r\n                        <div class=\"clear\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-12 form-margin-bottom\">\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-12 padding-right margin-res\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"User Name\">\r\n                        </div>\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-12 padding-left margin-res\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Mobile No.\">\r\n                        </div>\r\n                        <div class=\"clear\"></div>\r\n                    </div>\r\n                    <!-- radio button -->\r\n                    <div class=\"col-md-12 margin-res\">\r\n                        <div class=\"form-check-section\">\r\n                            <div class=\"text-check\">Notification Method</div>\r\n                            <div class=\"form-check-section-sub\">\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <input type=\"radio\" id=\"test1\" name=\"radio-group\" checked>\r\n                                    <label for=\"test1\">Email</label>\r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                                    <input type=\"radio\" id=\"test1\" name=\"radio-group\" checked>\r\n                                    <label for=\"test1\">Mobile Number</label>\r\n                                </div>\r\n\r\n                                <div class=\"clear\"></div>\r\n                            </div>\r\n                            <div class=\"clear\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- checkbox -->\r\n                    <div class=\"col-md-12 margin-res\">\r\n                        <div class=\"form-check-section\">\r\n                            <div class=\"text-check\">Roles</div>\r\n                            <div class=\"form-check-section-sub\">\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12 \">\r\n                                    <ul class=\"unstyled centered checkbox-user\">\r\n                                        <li>\r\n                                            <input class=\"styled-checkbox\" id=\"styled-checkbox-1\" type=\"checkbox\" value=\"value1\">\r\n                                            <label for=\"styled-checkbox-1\">Supar Admin</label>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12 \">\r\n                                    <ul class=\"unstyled centered checkbox-user\">\r\n                                        <li>\r\n                                            <input class=\"styled-checkbox\" id=\"styled-checkbox-2\" type=\"checkbox\" value=\"value1\">\r\n                                            <label for=\"styled-checkbox-2\">Customer Service</label>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12 \">\r\n                                    <ul class=\"unstyled centered checkbox-user\">\r\n                                        <li>\r\n                                            <input class=\"styled-checkbox\" id=\"styled-checkbox-3\" type=\"checkbox\" value=\"value1\">\r\n                                            <label for=\"styled-checkbox-3\">PSPD Agent Upload</label>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12 \">\r\n                                    <ul class=\"unstyled centered checkbox-user\">\r\n                                        <li>\r\n                                            <input class=\"styled-checkbox\" id=\"styled-checkbox-4\" type=\"checkbox\" value=\"value1\">\r\n                                            <label for=\"styled-checkbox-4\">PSPD Agent Load</label>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12 \">\r\n                                    <ul class=\"unstyled centered checkbox-user\">\r\n                                        <li>\r\n                                            <input class=\"styled-checkbox\" id=\"styled-checkbox-5\" type=\"checkbox\" value=\"value1\">\r\n                                            <label for=\"styled-checkbox-5\">Call Center Agent</label>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"col-md-6 col-sm-6 col-xs-12 \">\r\n                                    <ul class=\"unstyled centered checkbox-user\">\r\n                                        <li>\r\n                                            <input class=\"styled-checkbox\" id=\"styled-checkbox-6\" type=\"checkbox\" value=\"value1\">\r\n                                            <label for=\"styled-checkbox-6\">PSPD Agent Load</label>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <div class=\"clear\"></div>\r\n                            </div>\r\n                            <div class=\"clear\"></div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"add-user-btn\">\r\n                        <div class=\"col-md-6 col-xs-12 padding-right\">\r\n                            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Update User</button>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-12 padding-left\">\r\n                            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Clear</button>\r\n                        </div>\r\n                        <div class=\"clear\"></div>\r\n                    </div>\r\n                </form>\r\n                <div class=\"clear\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddUserComponent = (function () {
    function AddUserComponent() {
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-add-user',
        template: __webpack_require__("../../../../../src/app/dashboard/components/add-user/add-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/add-user/add-user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddUserComponent);

//# sourceMappingURL=add-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/cash-in/cash-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/cash-in/cash-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n        <!-- Tab panes -->\r\n        <div class=\"col-md-12 tab-wrapper\">\r\n            <div class=\"cash-in-section\">\r\n                <div class=\"panel-group\" id=\"accordion\">\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                                <a class=\"\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\">\r\n\t\t\t\t\t\t1.Enter Credentials\r\n\t\t\t\t\t</a>\r\n                            </h4>\r\n                        </div>\r\n                        <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\r\n                            <div class=\"panel-body\">\r\n                                <div class=\"enter-credential\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <p>The user must provide the email address registered with Cave Shepherd Mobile Service.</p>\r\n                                    </div>\r\n                                    <form>\r\n                                        <div class=\"col-md-12\">\r\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"abc@abc.com\">\r\n                                        </div>\r\n                                        <div class=\"col-md-12 no-padding\">\r\n                                            <div class=\"credential-btn\">\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-12 padding-right\">\r\n                                                    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Search</button>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-12 padding-left\">\r\n                                                    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Clear</button>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                    <div class=\"clear\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- .panel -->\r\n\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\r\n\t\t\t\t\t\t2.Display User's Information\r\n\t\t\t\t\t</a>\r\n                            </h4>\r\n                        </div>\r\n                        <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                                <div class=\"enter-credential tbl-bar\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <table class=\"credential-tbl\">\r\n                                            <tr>\r\n                                                <td>Name</td>\r\n                                                <th>Melodina Ralph</th>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>DOB</td>\r\n                                                <th>12/07/1987</th>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Mobile</td>\r\n                                                <th>+971 50 1231245</th>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Email</td>\r\n                                                <th>mf@windowslive.com</th>\r\n                                            </tr>\r\n                                        </table>\r\n\r\n\r\n                                    </div>\r\n                                    <div class=\"col-md-12 no-padding\">\r\n                                        <div class=\"credential-btn tbl-bar-btn\">\r\n                                            <div class=\"col-md-6 col-sm-6  col-xs-12 padding-right\">\r\n                                                <a href=\"\" class=\"btn btn-lg btn-primary btn-block\">Back</a>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 padding-left\">\r\n                                                <a href=\"\" class=\"btn btn-lg btn-primary btn-block\">Continue</a>\r\n                                            </div>\r\n                                            <div class=\"clear\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"clear\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- .panel -->\r\n\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\r\n\t\t\t\t\t\t3.Enter Amount\r\n\t\t\t\t\t</a>\r\n                            </h4>\r\n                        </div>\r\n                        <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                                <div class=\"enter-credential\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <p>Enter the amount to be deposited in the account.</p>\r\n                                    </div>\r\n                                    <form>\r\n                                        <div class=\"col-md-12\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"0.00\">\r\n                                        </div>\r\n                                        <div class=\"col-md-12 no-padding\">\r\n                                            <div class=\"credential-btn\">\r\n                                                <div class=\"col-md-6 col-sm-6  col-xs-12 padding-right\">\r\n                                                    <a href=\"#\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Back</a>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 col-sm-6  col-xs-12 padding-left\">\r\n                                                    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Continue</button>\r\n                                                </div>\r\n                                                <div class=\"clear\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                    <div class=\"clear\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- .panel -->\r\n\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            <h4 class=\"panel-title\">\r\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\">\r\n\t\t\t\t\t\t4.Confirmation\r\n\t\t\t\t\t</a>\r\n                            </h4>\r\n                        </div>\r\n                        <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                            <div class=\"panel-body\">\r\n                                <div class=\"enter-credential tbl-bar\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <table class=\"credential-tbl\">\r\n                                            <tr>\r\n                                                <td>Name</td>\r\n                                                <th>Melodina Ralph</th>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Mobile</td>\r\n                                                <th>+971 50 1231245</th>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Email</td>\r\n                                                <th>mf@windowslive.com</th>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Amount</td>\r\n                                                <th>100.00</th>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Fees</td>\r\n                                                <th>10.00</th>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Total</td>\r\n                                                <th>110.00</th>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 no-padding\">\r\n                                        <div class=\"credential-btn tbl-bar-btn\">\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 padding-right\">\r\n                                                <a href=\"\" class=\"btn btn-lg btn-primary btn-block\">Back</a>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 padding-left\">\r\n                                                <button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" data-toggle=\"modal\" data-target=\"#myModal\">Continue</button>\r\n                                            </div>\r\n                                            <div class=\"clear\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"clear\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- .panel -->\r\n\r\n                </div>\r\n                <!-- .panel-group -->\r\n                <div class=\"clear\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n</div>\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog cash-model-diolog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"alert-content hide-btn\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Enter PIN</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"pin-box\">\r\n                    <ul>\r\n                        <li><input type=\"text\" class=\"form-control\"></li>\r\n                        <li><input type=\"text\" class=\"form-control\"></li>\r\n                        <li><input type=\"text\" class=\"form-control\"></li>\r\n                        <li><input type=\"text\" class=\"form-control\"></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer \">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Clear</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" id=\"show-success-btn\">Continue</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"alert-content show-success\" style=\"display:none;\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Success</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"pin-box-text\">\r\n                    <p>Transaction has been successfully completed.</p>\r\n                    <p>Transaction ID: 12486</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer \">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/cash-in/cash-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CashInComponent = (function () {
    function CashInComponent() {
    }
    CashInComponent.prototype.ngOnInit = function () {
    };
    CashInComponent.prototype.ngAfterViewChecked = function () {
        $("#show-success-btn").click(function () {
            $(".show-success").css('display', 'block');
            $(".hide-btn").css('display', 'none');
        });
    };
    return CashInComponent;
}());
CashInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-cash-in',
        template: __webpack_require__("../../../../../src/app/dashboard/components/cash-in/cash-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/cash-in/cash-in.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CashInComponent);

//# sourceMappingURL=cash-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    @media (max-width: 767px) {\r\n        .field-1,\r\n        .field-2,\r\n        .field-3,\r\n        .field-4,\r\n        .field-5 {\r\n            width: 100%;\r\n            float: left;\r\n            padding-right: 0px;\r\n            position: relative;\r\n            margin-bottom: 8px;\r\n        }\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n        <!-- Tab panes -->\r\n        <div class=\"col-md-12 tab-wrapper\">\r\n            <div class=\"report-section\">\r\n                <form>\r\n                    <div class=\"field-1\">\r\n                        <select class=\"form-control\">\r\n\t  \t\t\t\t\t\t<option>Select Report Type</option>\r\n\t  \t\t\t\t\t</select>\r\n                    </div>\r\n\r\n                    <div class=\"field-2\">\r\n                        <i class=\"fa fa-calendar cal1\"></i>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"From Date\" id=\"date\" name=\"date\">\r\n                    </div>\r\n\r\n\r\n                    <div class=\"field-3\">\r\n                        <i class=\"fa fa-calendar cal2\"></i>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"To Date\" id=\"date\" name=\"date\">\r\n                    </div>\r\n\r\n                    <div class=\"field-4\">\r\n                        <select class=\"form-control\">\r\n\t  \t\t\t\t\t\t<option>status</option>\r\n\t  \t\t\t\t\t</select>\r\n                    </div>\r\n\r\n                    <div class=\"field-5\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Keyword\">\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                    <!-- \t \t\t\t</div> -->\r\n                    <div class=\"col-md-12 no-padding\">\r\n                        <div class=\"report-btn\">\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-12 padding-right\">\r\n                                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Filter</button>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-12 padding-left\">\r\n                                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Clear</button>\r\n                            </div>\r\n                            <div class=\"clear\"></div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div class=\"clear\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.prototype.ngAfterViewChecked = function () {
        var date_input = $('input[name="date"]'); //our date input has the name "date"
        var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
        date_input.datepicker({
            format: 'mm/dd/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        });
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/dashboard/components/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/reports/reports.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReportsComponent);

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/credentails/credentails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/credentails/credentails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n        <!-- Tab panes -->\r\n        <div class=\"col-md-12 tab-wrapper\">\r\n            <div class=\"profile-section\">\r\n                <div class=\"col-md-4 col-xs-12 right-section\">\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"subscrib-menu user-page\">\r\n                        <ul>\r\n                            <li><a routerLink=\"/dashboard/profile\">User Profile</a></li>\r\n                            <li><a routerLink=\"/dashboard/transactions\">Transactions</a></li>\r\n                            <li class=\"active\"><a routerLink=\"/dashboard/credentials\">Credentials</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n                <div class=\"col-md-4 col-xs-12 right-section\">\r\n                    <div class=\"container table-main\">\r\n                        <div class=\"row\">\r\n                            <div>\r\n                                <div class=\"profile-image text-center\">\r\n                                    <img class=\"img-responsive img-circle\" src=\"http://engineering.unl.edu/images/staff/Kayla_Person-small.jpg\" width=\"80px\" height=\"80px\">\r\n                                </div>\r\n                                <h4 class=\"profile-name text-center\">Melodina Ralph</h4>\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table left-profile\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th></th>\r\n                                                <th></th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody class=\"profile-row-tbody\">\r\n                                            <tr>\r\n                                                <td class=\"first\">Balance</td>\r\n                                                <td class=\"first\">BBD <strong>8670.15</strong></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Last Login</td>\r\n                                                <td>19/09/2017 08:23PM</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Activation Date </td>\r\n                                                <td>2703/2017</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>KYC Level</td>\r\n                                                <td>Level 1</td>\r\n                                                <!-- <td>VALIDATE KYC</td> -->\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td></td>\r\n                                                <td class=\"validate\">VALIDATE KYC</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>User Status</td>\r\n                                                <td>Activate</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Login</td>\r\n                                                <td>Unblocked</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-8 col-xs-12\">\r\n                    <div class=\"first-tbl-credential\">\r\n                        <div class=\"table-responsive\">\r\n                            <div class=\"col-md-8 col-xs-12 no-padding\">\r\n                                <table class=\"table table-borderless\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <th>Email Address</th>\r\n                                            <th>Mobile no.</th>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>mf@windowslive.com</td>\r\n                                            <td>+971 50 1231245</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Status: Active</td>\r\n                                            <td>Status: Active</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><a href=\"\">Delete</a></td>\r\n                                            <td><a href=\"\">Delete</a></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"clear:both\"></div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/credentails/credentails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CredentailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CredentailsComponent = (function () {
    function CredentailsComponent() {
    }
    CredentailsComponent.prototype.ngOnInit = function () {
    };
    return CredentailsComponent;
}());
CredentailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-credentails',
        template: __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/credentails/credentails.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/credentails/credentails.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CredentailsComponent);

//# sourceMappingURL=credentails.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/search-subscriber.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.container {\r\n    padding-right: 0px !important;\r\n    padding-left: 0px !important;\r\n    border-left: 2px solid grey;\r\n    box-shadow: 10px 10px 13px #f2f2f2;\r\n}\r\n.left-profile tr td {\r\n    padding: 16px 8px;\r\n}\r\n\r\n\r\n.profile-row-tbody tr td:last-child {\r\n    color: #444;\r\n}\r\n\r\n.profile-image .img-responsive {    \r\n    border-radius: 50%;\r\n    width: 80px;\r\n    height: 80px;\r\n    margin: 0px auto;\r\n    display: table;\r\n    margin-top: 5px;\r\n}\r\n\r\n.profile-name {\r\n    font-family: fantasy;\r\n    color: #0e67c6;\r\n}\r\n\r\n.table-responsive {\r\n    padding-left: 10%;\r\n    color: #5f5c5c;\r\n}\r\n\r\n.table tbody tr td,\r\n.table thead tr th {\r\n    border: none;\r\n}\r\ntd.first{\r\n    padding-top: 5%;\r\n}\r\nstrong {\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n}\r\n\r\n.validate {\r\n    color: #0e67c6;\r\n}\r\nul.list-inline {\r\n    margin: 12px 23px 0px 23px;\r\n}\r\n.list-inline li a {\r\n    color: #5f5c5c!important;\r\n    font-weight: bold;\r\n}\r\n\r\n.list-inline li a:hover,\r\n.list-inline li a.active {\r\n    color: #0067C8 !important;\r\n    font-weight: bold;\r\n}\r\n\r\n.list-inline li {\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n}\r\n.active h4, ul.list-inline li a h4:hover{\r\n    border-bottom: 1px solid #0067C8;\r\n    line-height: 1.3em !important;\r\n}\r\nul.list-inline li a, ul.list-inline li a:hover{\r\n    text-decoration: none;\r\n}\r\n.row .content {\r\n    border-right: 1px solid grey;\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\r\n}\r\n.left-profile {\r\n    margin-bottom: 0px;\r\n}\r\n.table-main {\r\n    width: 1150px !important;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/search-subscriber.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n        <!-- Tab panes -->\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 tab-wrapper\">\r\n            <div class=\"search-section\">\r\n                <form>\r\n                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Keyword\">\r\n                    </div>\r\n                    <div class=\"col-md-3 col-sm-3 col-xs-12 no-padding\">\r\n                        <a class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"showList()\">Search</a>\r\n                    </div>\r\n                </form>\r\n                <div class=\"clear\"></div>\r\n            </div>\r\n            <div class=\"col-md-12\" *ngIf=\"showlist\">\r\n                <div class=\"search-section-result\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <tr class=\"heading\">\r\n                                <td>Name</td>\r\n                                <td>Mobile Number</td>\r\n                                <td>Email</td>\r\n                                <td>Status<span class=\"arrow-status\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></span></td>\r\n                                <td>View Profile</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                <td>+971502105952</td>\r\n                                <td>abcdef@abcd.com</td>\r\n                                <td>Active</td>\r\n                                <td><a routerLink=\"/dashboard/profile\">View</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                <td>+971502105952</td>\r\n                                <td>abcdef@abcd.com</td>\r\n                                <td>Active</td>\r\n                                <td><a routerLink=\"/dashboard/profile\">View</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                <td>+971502105952</td>\r\n                                <td>abcdef@abcd.com</td>\r\n                                <td>Active</td>\r\n                                <td><a routerLink=\"/dashboard/profile\">View</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                <td>+971502105952</td>\r\n                                <td>abcdef@abcd.com</td>\r\n                                <td>Active</td>\r\n                                <td><a routerLink=\"/dashboard/profile\">View</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                <td>+971502105952</td>\r\n                                <td>abcdef@abcd.com</td>\r\n                                <td>Active</td>\r\n                                <td><a routerLink=\"/dashboard/profile\">View</a></td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <!-- pagination -->\r\n                    <div class=\"pagination-bar\">\r\n                        <ul>\r\n                            <li><a href=\"#\">|<i class=\"fa fa-angle-left text-verticle\" aria-hidden=\"true\"></i></a></li>\r\n                            <li><a href=\"#\"><i class=\"fa fa-angle-left text-verticle\" aria-hidden=\"true\"></i></a></li>\r\n                            <li>Page<span>1</span>of 1</li>\r\n                            <li><a href=\"#\"><i class=\"fa fa-angle-right text-verticle\" aria-hidden=\"true\"></i></a></li>\r\n                            <li><a href=\"#\"><i class=\"fa fa-angle-right text-verticle\" aria-hidden=\"true\"></i>|</a></li>\r\n                        </ul>\r\n                        <div class=\"display-text\">Displaying 5 of 5</div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"clear\"></div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/search-subscriber.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchSubscriberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchSubscriberComponent = (function () {
    function SearchSubscriberComponent() {
        this.showlist = false;
    }
    SearchSubscriberComponent.prototype.ngOnInit = function () {
    };
    SearchSubscriberComponent.prototype.showList = function () {
        this.showlist = true;
    };
    return SearchSubscriberComponent;
}());
SearchSubscriberComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-search-subscriber',
        template: __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/search-subscriber.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/search-subscriber.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchSubscriberComponent);

//# sourceMappingURL=search-subscriber.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/transactions/transactions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n        <!-- Tab panes -->\r\n        <div class=\"col-md-12 tab-wrapper\">\r\n            <div class=\"full-section-trans\">\r\n                <div class=\"full-section-trans-b-img\"><img src=\"../../../../../assets/images/left-border-arrow.png\"></div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"subscrib-menu \">\r\n                        <ul>\r\n                            <li><a routerLink=\"/dashboard/profile\">User Profile</a></li>\r\n                            <li class=\"active\"><a routerLink=\"/dashboard/transactions\">Transactions</a></li>\r\n                            <li><a routerLink=\"/dashboard/credentials\">Credentials</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"search-section-result\">\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table\">\r\n                                <tr class=\"heading\">\r\n                                    <td>Name</td>\r\n                                    <td>Mobile Number</td>\r\n                                    <td>Email</td>\r\n                                    <td>Status<span class=\"arrow-status\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></span></td>\r\n                                    <td>View Profile</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                    <td>+971502105952</td>\r\n                                    <td>abcdef@abcd.com</td>\r\n                                    <td>Active</td>\r\n                                    <td><a href=\"#\">View</a></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                    <td>+971502105952</td>\r\n                                    <td>abcdef@abcd.com</td>\r\n                                    <td>Active</td>\r\n                                    <td><a href=\"#\">View</a></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                    <td>+971502105952</td>\r\n                                    <td>abcdef@abcd.com</td>\r\n                                    <td>Active</td>\r\n                                    <td><a href=\"#\">View</a></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                    <td>+971502105952</td>\r\n                                    <td>abcdef@abcd.com</td>\r\n                                    <td>Active</td>\r\n                                    <td><a href=\"#\">View</a></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                    <td>+971502105952</td>\r\n                                    <td>abcdef@abcd.com</td>\r\n                                    <td>Active</td>\r\n                                    <td><a href=\"#\">View</a></td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                        <!-- pagination -->\r\n                        <div class=\"pagination-bar\">\r\n                            <ul>\r\n                                <li><a href=\"#\">|<i class=\"fa fa-angle-left text-verticle\" aria-hidden=\"true\"></i></a></li>\r\n                                <li><a href=\"#\"><i class=\"fa fa-angle-left text-verticle\" aria-hidden=\"true\"></i></a></li>\r\n                                <li>Page<span>1</span>of 1</li>\r\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right text-verticle\" aria-hidden=\"true\"></i></a></li>\r\n                                <li><a href=\"#\"><i class=\"fa fa-angle-right text-verticle\" aria-hidden=\"true\"></i>|</a></li>\r\n                            </ul>\r\n                            <div class=\"display-text\">Displaying 5 of 5</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n                <div class=\"clear\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionsComponent = (function () {
    function TransactionsComponent() {
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    return TransactionsComponent;
}());
TransactionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-transactions',
        template: __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/transactions/transactions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/transactions/transactions.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TransactionsComponent);

//# sourceMappingURL=transactions.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\r\n    color: #5f5c5c;\r\n}\r\n.table-borderless {\r\n    margin: 0px 5%;\r\n    width: 95%;\r\n}\r\n.table-borderless .large-btns {\r\n    min-width: 185px;\r\n    max-width: 185px;\r\n    padding: 3px;\r\n}\r\n.table-borderless .small-btns {\r\n    min-width: 130px;\r\n    max-width: 130px;\r\n    padding: 3px;}\r\n.table-borderless tr td {\r\n    vertical-align: bottom !important;\r\n}\r\n.table-responsive {\r\n    overflow-x: hidden;     \r\n}\r\n.table-borderless{\r\n    margin-left: 5%;\r\n}\r\n\r\n.table-borderless td,\r\n.table-borderless th {\r\n    border: 0;    \r\n}\r\n\r\n.custom-button,\r\n.custom-button:hover {\r\n    color: #0067C8;\r\n    background-color: #fff;\r\n    border-color: #0067C8;\r\n}\r\n\r\nhr {\r\n    width: 700px;\r\n    border-top: 1px solid grey !important;\r\n}\r\n.data{\r\n    width: 170px;\r\n    padding-top: 15px;\r\n}\r\n.pass{\r\n    padding-top: 15px;\r\n    width: 100px;\r\n}\r\n.btn {\r\n    padding: 2px 15px !important;\r\n}\r\n.first {\r\n    width: 100px;\r\n}\r\n.td-hide {\r\n    visibility: hidden;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n        <!-- Tab panes -->\r\n        <div class=\"col-md-12 tab-wrapper\">\r\n            <div class=\"profile-section\">\r\n                <div class=\"col-md-4 col-xs-12 right-section\">\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"subscrib-menu user-page\">\r\n                        <ul>\r\n                            <li class=\"active\"><a routerLink=\"/dashboard/profile\">User Profile</a></li>\r\n                            <li><a routerLink=\"/dashboard/transactions\">Transactions</a></li>\r\n                            <li><a routerLink=\"/dashboard/credentials\">Credentials</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n                <div class=\"col-md-4 col-xs-12 right-section\">\r\n                    <div class=\"container table-main\">\r\n                        <div class=\"row\">\r\n                            <div>\r\n                                <div class=\"profile-image text-center\">\r\n                                    <img class=\"img-responsive img-circle\" src=\"http://engineering.unl.edu/images/staff/Kayla_Person-small.jpg\" width=\"80px\" height=\"80px\">\r\n                                </div>\r\n                                <h4 class=\"profile-name text-center\">Melodina Ralph</h4>\r\n                                <div class=\"table-responsive\">\r\n                                    <table class=\"table left-profile\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th></th>\r\n                                                <th></th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody class=\"profile-row-tbody\">\r\n                                            <tr>\r\n                                                <td class=\"first\">Balance</td>\r\n                                                <td class=\"first\">BBD <strong>8670.15</strong></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Last Login</td>\r\n                                                <td>19/09/2017 08:23PM</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Activation Date </td>\r\n                                                <td>2703/2017</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>KYC Level</td>\r\n                                                <td>Level 1</td>\r\n                                                <!-- <td>VALIDATE KYC</td> -->\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td></td>\r\n                                                <td class=\"validate\">VALIDATE KYC</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>User Status</td>\r\n                                                <td>Activate</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>Login</td>\r\n                                                <td>Unblocked</td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-8  col-xs-12\">\r\n                    <div class=\"first-tbl\">\r\n                        <div class=\"table-responsive\">\r\n                            <div class=\"col-md-6 col-xs-12 no-padding\">\r\n                                <table class=\"table table-borderless\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th colspan=\"2\">Personal Information</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>Name</td>\r\n                                            <th>Melodina Ralph</th>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>DOB</td>\r\n                                            <th>12/07/1987</th>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Place Of Birth</td>\r\n                                            <th>Dubai-UAE</th>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Gender</td>\r\n                                            <th>Female</th>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-xs-12 no-padding\">\r\n                                <table class=\"table table-borderless\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th colspan=\"2\">Contact</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>Mobile</td>\r\n                                            <th>+971 501231245</th>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>Email</td>\r\n                                            <th>mf@windowslive.com</th>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td style=\" font-family: Source Sans Pro !important;font-weight: 600 !important;\">Address</td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td colspan=\"2\">18 December Street, Jumeirah,<br>Dubai - United Arab Emirates</td>\r\n                                            <td></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"clear:both\"></div>\r\n                    </div>\r\n                    <!--Second div table-->\r\n                    <div class=\"second-tbl\">\r\n                        <div class=\"col-md-12 col-xs-12 media-padding\">\r\n                            <div class=\"col-md-4 col-xs-12\">\r\n                                <table class=\"table table-borderless\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>Password</td>\r\n                                            <td>********</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"col-md-8 col-xs-12\">\r\n                                <table class=\"table table-borderless\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><button class=\"btn btn-default custom-button large-btns\"><small>SEND TEMPORARY PASSWORD</small> </button></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"col-md-4 col-xs-12\">\r\n                                <table class=\"table table-borderless\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>PIN</td>\r\n                                            <td>********</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"col-md-8 col-xs-12\">\r\n                                <table class=\"table table-borderless\">\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><button class=\"btn btn-default custom-button large-btns\"><small>SEND TEMPORARY PIN</small></button></td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"clear\"></div>\r\n                    </div>\r\n                    <!--Third div table-->\r\n                    <div class=\"col-md-12 col-xs-12 media-padding last-tbl\">\r\n                        <div class=\"col-md-12 col-xs-12 tot-btn\">\r\n                            <div class=\"col-md-5 col-sm-5 col-xs-12\">\r\n                                Change Status\r\n                            </div>\r\n                            <div class=\"col-md-7 col-sm-7 col-xs-12\">\r\n                                <button class=\"btn btn-default custom-button large-btns\"><small>UPDATE</small></button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-12 col-xs-12 tot-btn1\">\r\n                            <div class=\"col-md-5 col-sm-5 col-xs-12\">\r\n                                Close Account\r\n                            </div>\r\n                            <div class=\"col-md-7 col-sm-7 col-xs-12\">\r\n                                <button class=\"btn btn-default custom-button large-btns\"><small>CLOSE ACCOUNT</small></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"clear\"></div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-subscriber/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserProfileComponent);

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-user/search-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-user/search-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-12\">\r\n        <!-- Tab panes -->\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 tab-wrapper\">\r\n            <div class=\"search-section\">\r\n                <form>\r\n                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Keyword\">\r\n                    </div>\r\n                    <div class=\"col-md-3 col-sm-3 col-xs-12 no-padding\">\r\n                        <a class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"showList()\">Search</a>\r\n                    </div>\r\n                </form>\r\n                <div class=\"clear\"></div>\r\n            </div>\r\n            <div class=\"col-md-12\" *ngIf=\"showlist\">\r\n                <div class=\"search-section-result\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <tr class=\"heading\">\r\n                                <td>Name</td>\r\n                                <td>Mobile Number</td>\r\n                                <td>Email</td>\r\n                                <td>Status<span class=\"arrow-status\"><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></span></td>\r\n                                <td>View Profile</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                <td>+971502105952</td>\r\n                                <td>abcdef@abcd.com</td>\r\n                                <td>Active</td>\r\n                                <td><a>View</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                <td>+971502105952</td>\r\n                                <td>abcdef@abcd.com</td>\r\n                                <td>Active</td>\r\n                                <td><a>View</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                <td>+971502105952</td>\r\n                                <td>abcdef@abcd.com</td>\r\n                                <td>Active</td>\r\n                                <td><a>View</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                <td>+971502105952</td>\r\n                                <td>abcdef@abcd.com</td>\r\n                                <td>Active</td>\r\n                                <td><a>View</a></td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>Mufaddal ABCDEF ABCDEFGH</td>\r\n                                <td>+971502105952</td>\r\n                                <td>abcdef@abcd.com</td>\r\n                                <td>Active</td>\r\n                                <td><a>View</a></td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <!-- pagination -->\r\n                    <div class=\"pagination-bar\">\r\n                        <ul>\r\n                            <li><a href=\"#\">|<i class=\"fa fa-angle-left text-verticle\" aria-hidden=\"true\"></i></a></li>\r\n                            <li><a href=\"#\"><i class=\"fa fa-angle-left text-verticle\" aria-hidden=\"true\"></i></a></li>\r\n                            <li>Page<span>1</span>of 1</li>\r\n                            <li><a href=\"#\"><i class=\"fa fa-angle-right text-verticle\" aria-hidden=\"true\"></i></a></li>\r\n                            <li><a href=\"#\"><i class=\"fa fa-angle-right text-verticle\" aria-hidden=\"true\"></i>|</a></li>\r\n                        </ul>\r\n                        <div class=\"display-text\">Displaying 5 of 5</div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"clear\"></div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"clear\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/search-user/search-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchUserComponent = (function () {
    function SearchUserComponent() {
        this.showlist = false;
    }
    SearchUserComponent.prototype.ngOnInit = function () {
    };
    SearchUserComponent.prototype.showList = function () {
        this.showlist = true;
    };
    return SearchUserComponent;
}());
SearchUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-search-user',
        template: __webpack_require__("../../../../../src/app/dashboard/components/search-user/search-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/search-user/search-user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchUserComponent);

//# sourceMappingURL=search-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/top-nav/top-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.active {\r\n    color: white!important;\r\n    background-color: #0067C8 !important;\r\n    border-radius: 10px 10px 0px 0px;\r\n}\r\n\r\n.nav-tabs {\r\n    border-bottom: 5px solid #0067C8;\r\n}\r\n\r\n.container {\r\n    padding-right: 0px !important;\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.nav-tabs li {\r\n    margin-right: 0.3%;\r\n    background-color: #666061;\r\n    border-radius: 10px 10px 0px 0px;\r\n}\r\n\r\n.nav-tabs li a {\r\n    color: white;\r\n    border-radius: 10px 10px 0px 0px;\r\n    padding: 7px 15px !important;\r\n    border : none ;\r\n}\r\n\r\n.nav-tabs li:hover a {\r\n    background-color: #0067C8;\r\n    \r\n}\r\n\r\n.navbar-default {\r\n    background-color: #fff !important;\r\n    border-color: #fff !important;\r\n}\r\nul.nav.navbar-nav.navbar-right{\r\n    margin-right: -100px !important;\r\n}\r\n.navbar-default .navbar-nav li a{\r\n    color: #5f5c5c;\r\n}\r\n.logoclass{\r\n    margin: 0px auto;\r\n    display: table;\r\n}\r\n.dropdown-name a { float: left;}\r\n.dropdown-name p { \r\n    margin: 30px 0px;\r\n    display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: -2px;\r\n  vertical-align: middle;\r\n  border-top: 7px solid #0067C8;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 0 dotted;\r\n  border-left: 7px solid transparent;\r\n  /*margin-bottom: 30px !important;*/\r\n\r\n\r\n/*}\r\n.nav-tabs li a{\r\n    font-family: Source Sans Pro !important;\r\n    font-weight: 600 !important;\r\n}\r\n.table-main {\r\n  width: 1150px;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- top bar start -->\r\n<div class=\"container\">\r\n    <div class=\"full-top-nav\">\r\n        <div class=\"col-md-7 col-x-12\">\r\n            <div class=\"logo-other\"><img src=\"../../../../assets/images/logo.png\"></div>\r\n        </div>\r\n        <div class=\"col-md-5 col-xs-12\">\r\n            <div class=\"profile_details\">\r\n                <ul>\r\n                    <li class=\"dropdown profile_details_drop\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                            <div class=\"profile_img\">\r\n                                <span class=\"prfil-img\"><img src=\"../../../../assets/images/admin.png\" alt=\"\"> </span>\r\n                                <div class=\"user-name\">\r\n                                    <p>Mufaddal Fatehi</p>\r\n                                    <span>Supar Admin</span>\r\n                                </div>\r\n                                <i class=\"fa fa-caret-down lnr\" aria-hidden=\"true\"></i>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <nav class=\"navbar navbar-inverse\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n\t          \t\t<span class=\"icon-bar\"></span>\r\n\t          \t\t<span class=\"icon-bar\"></span>\r\n\t          \t\t<span class=\"icon-bar\"></span>                        \r\n\t      \t\t</button>\r\n            </div>\r\n            <div>\r\n                <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n                    <ul class=\"nav nav-tabs navbar-nav\">\r\n                        <li routerLink=\"/dashboard/adduser\" routerLinkActive=\"active\"><a class=\"active\">Add User</a></li>\r\n                        <li routerLink=\"/dashboard/searchuser\" routerLinkActive=\"active\"><a>Search User</a></li>\r\n                        <li routerLink=\"/dashboard/searchsubscriber\" routerLinkActive=\"active\"><a>Search Subscriber</a></li>\r\n                        <li routerLink=\"/dashboard/reports\" routerLinkActive=\"active\"><a>Reports</a></li>\r\n                        <li routerLink=\"/dashboard/cashin\" routerLinkActive=\"active\"><a>Cash In</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</div>\r\n<!-- top bar end-->"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/top-nav/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopNavComponent = (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.ngOnInit = function () {
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-top-nav',
        template: __webpack_require__("../../../../../src/app/dashboard/components/top-nav/top-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/components/top-nav/top-nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TopNavComponent);

//# sourceMappingURL=top-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/dashboard/components/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_search_user_search_user_component__ = __webpack_require__("../../../../../src/app/dashboard/components/search-user/search-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_search_subscriber_search_subscriber_component__ = __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/search-subscriber.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_reports_reports_component__ = __webpack_require__("../../../../../src/app/dashboard/components/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cash_in_cash_in_component__ = __webpack_require__("../../../../../src/app/dashboard/components/cash-in/cash-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_search_subscriber_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_search_subscriber_transactions_transactions_component__ = __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_search_subscriber_credentails_credentails_component__ = __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/credentails/credentails.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: '', redirectTo: 'adduser' },
            { path: 'adduser', component: __WEBPACK_IMPORTED_MODULE_3__components_add_user_add_user_component__["a" /* AddUserComponent */] },
            { path: 'searchuser', component: __WEBPACK_IMPORTED_MODULE_4__components_search_user_search_user_component__["a" /* SearchUserComponent */] },
            { path: 'cashin', component: __WEBPACK_IMPORTED_MODULE_7__components_cash_in_cash_in_component__["a" /* CashInComponent */] },
            { path: 'searchsubscriber', component: __WEBPACK_IMPORTED_MODULE_5__components_search_subscriber_search_subscriber_component__["a" /* SearchSubscriberComponent */] },
            { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_6__components_reports_reports_component__["a" /* ReportsComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__components_search_subscriber_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
            { path: 'transactions', component: __WEBPACK_IMPORTED_MODULE_9__components_search_subscriber_transactions_transactions_component__["a" /* TransactionsComponent */] },
            { path: 'credentials', component: __WEBPACK_IMPORTED_MODULE_10__components_search_subscriber_credentails_credentails_component__["a" /* CredentailsComponent */] }
        ]
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top-nav>\r\n</app-top-nav>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_top_nav_top_nav_component__ = __webpack_require__("../../../../../src/app/dashboard/components/top-nav/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/dashboard/components/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_search_user_search_user_component__ = __webpack_require__("../../../../../src/app/dashboard/components/search-user/search-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_search_subscriber_search_subscriber_component__ = __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/search-subscriber.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_reports_reports_component__ = __webpack_require__("../../../../../src/app/dashboard/components/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cash_in_cash_in_component__ = __webpack_require__("../../../../../src/app/dashboard/components/cash-in/cash-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_search_subscriber_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_subscriber_transactions_transactions_component__ = __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_search_subscriber_credentails_credentails_component__ = __webpack_require__("../../../../../src/app/dashboard/components/search-subscriber/credentails/credentails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("../../../../../src/app/dashboard/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__["a" /* DashboardRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_top_nav_top_nav_component__["a" /* TopNavComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_add_user_add_user_component__["a" /* AddUserComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_search_user_search_user_component__["a" /* SearchUserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_search_subscriber_search_subscriber_component__["a" /* SearchSubscriberComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_cash_in_cash_in_component__["a" /* CashInComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_search_subscriber_user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_search_subscriber_transactions_transactions_component__["a" /* TransactionsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_search_subscriber_credentails_credentails_component__["a" /* CredentailsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container\">\r\n        <div class=\"col-md-6 col-xs-12 text-left\">\r\n            Powered By:\r\n        </div>\r\n        <div class=\"col-md-6 col-xs-12 text-right\">\r\n            version\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/dashboard/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/index.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/dashboard/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map