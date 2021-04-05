(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/announcement/announcement.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/announcement/announcement.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"annoucement\">\n    <p>This is not a physical Product</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cta/cta.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cta/cta.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"cta\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 cta-content\">\n        <div>\n          <h3>The Fastest Way to Loss Weight in Natural <br> Way !</h3>\n          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>\n        </div>\n      </div>\n      <div class=\"col-md-4 cta-button\">\n        <button class=\"round-button\">Get Free Consultation Now</button>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/diet-plan/diet-plan.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/diet-plan/diet-plan.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"diet-plan\">\n  <app-announcement></app-announcement>\n  <div class=\"container\">\n    <app-navbar></app-navbar>\n    <div class=\"header-content\">\n      <h1>My Diet Plan</h1>\n      <div class=\"week-header\">\n        <mat-icon class=\"mat-icon\" aria-hidden=\"false\" aria-label=\"Previous Week\" (click)=\"weekPrev()\" *ngIf=\"selectedWeek !== weekOptions[0]\">keyboard_arrow_left</mat-icon>\n        <div class=\"week-title\">Week {{ selectedWeek }}</div>\n        <mat-icon aria-hidden=\"false\" class=\"mat-icon\" aria-label=\"Next Week\" (click)=\"weekNext()\" *ngIf=\"selectedWeek !== weekOptions[weekOptions.length - 1]\" >keyboard_arrow_right</mat-icon>\n      </div>\n      <div >\n        <div class=\"weekday-header\" *ngIf=\"selectedWeek === '1'\">\n        <div class=\"weekday-item\" *ngFor=\"let weekday of weekOneDays\" [ngClass]=\"{'selected' : selectedWeekday === weekday}\" (click)=\"weekdaySelected(weekday)\">{{ weekday }}</div>\n        </div>\n        <div class=\"weekday-header\" *ngIf=\"selectedWeek === '2'\">\n          <div class=\"weekday-item\" *ngFor=\"let weekday of weekTwoDays\" [ngClass]=\"{'selected' : selectedWeekday === weekday}\" (click)=\"weekdaySelected(weekday)\">{{ weekday }}</div>\n        </div>\n        <div class=\"weekday-header\" *ngIf=\"selectedWeek === '3'\">\n          <div class=\"weekday-item\" *ngFor=\"let weekday of weekThreeDays\" [ngClass]=\"{'selected' : selectedWeekday === weekday}\" (click)=\"weekdaySelected(weekday)\">{{ weekday }}</div>\n        </div>\n        <div class=\"weekday-header\" *ngIf=\"selectedWeek === '4'\">\n          <div class=\"weekday-item\" *ngFor=\"let weekday of weekFourDays\" [ngClass]=\"{'selected' : selectedWeekday === weekday}\" (click)=\"weekdaySelected(weekday)\">{{ weekday }}</div>\n        </div>\n        <div class=\"weekday-header\" *ngIf=\"selectedWeek === '5'\">\n          <div class=\"weekday-item\" *ngFor=\"let weekday of weekFiveDays\" [ngClass]=\"{'selected' : selectedWeekday === weekday}\" (click)=\"weekdaySelected(weekday)\">{{ weekday }}</div>\n        </div>\n      </div>\n      <div class=\"recipe-body\">\n        <app-meals-list [selectedDayData]=\"selectedDayData\"></app-meals-list>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <section class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md company-col\">\n        <div>\n          <img class=\"logo\" src=\"../../../assets/logo.png\" alt=\"\">\n          <h4>About Pro Nutrition</h4>\n          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente optio ex molestias iure perferendis, hic harum officia excepturi esse exercitationem, atque aliquid, deserunt quo consequuntur assumenda totam dolorum laborum temporibus.</p>\n          <p>Call Us: <a href=\"tel:+919999999999\">+91 9999999999</a></p>\n        </div>\n      </div>\n      <div class=\"col-md newsletter-col\">\n        <div>\n          <h4>NEWSLETTER</h4>\n          <div class=\"newsletter-input-div\">\n            <input class=\"input-news\" type=\"text\" placeholder=\"Enter your Email\">\n            <button class=\"button-news\">Subscribe</button></div>\n          <div class=\"social-ul\">\n            <ul>\n              <li><img src=\"../../../assets/WhatsApp.png\" alt=\"\"></li>\n              <li><img src=\"../../../assets/twitter.png\" alt=\"\"></li>\n              <li><img src=\"../../../assets/Instagram.png\" alt=\"\"></li>\n              <li><img src=\"../../../assets/Facebook.png\" alt=\"\"></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"text-center copy\">2020 &copy; All Rrights Reserved</section>\n  <img class=\"corner-footer\" src=\"../../../assets/corner.svg\" alt=\"\">\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"header\">\n  <div class=\"container\">\n\n  <app-navbar></app-navbar>\n    <!-- header content -->\n    <div id=\"header-content\" class=\"row\">\n      <div class=\"col-md header-text\">\n        <h2>It's Time to Balance Your Life &</h2>\n        <h2 class=\"green-text\">Nourish Your Soul</h2>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ea dolor tempora facere reiciendis esse et! Optio eveniet odio qui, tenetur eligendi facilis unde omnis asperiores quae magni architecto deleniti.</p>\n        <!-- buttons -->\n        <div>\n          <button class=\"green-button round-button\">Contact Us</button>\n          <button class=\"orange-button round-button\">View Schedule</button>\n        </div>\n      </div>\n      <div class=\"col-md header-image\">\n        <img src=\"../../../assets/header-image-small.png\" alt=\"\">\n      </div>\n     \n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/meal/meal.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/meal/meal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"single-meal\">\n  <div class=\"container\">\n    <mat-card class=\"mat-card\">\n      <div class=\"mat-card-content\">\n        <div class=\"my-card-header\">\n          <div class=\"meal-image-container\">\n            <img src=\"../../../assets/drink.jpg\" class=\"meal-image\" alt=\"\">\n          </div>\n          <div class=\"meal-overview-container\">\n            <h3>Recipe Name</h3>\n            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo expedita sunt incidunt fugiat, ullam deserunt eum error labore possimus alias inventore explicabo vel ipsa repellat odit nemo, consequatur voluptatem ea!</p>\n          </div>\n          <div class=\"expansion-button\">\n            <mat-icon class=\"down-arrow\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\" data-target=\"#meal\">keyboard_arrow_down</mat-icon>\n          </div>\n        </div>\n        <div class=\"mat-card-description collapse multi-collapse\" id=\"meal\">\n          <p>Description</p>\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non adipisci deleniti quidem at mollitia, laboriosam provident accusantium quod enim totam incidunt corrupti minima id a numquam rerum tempore ipsa!</p>\n        </div>\n\n      </div>\n    </mat-card>\n  </div>\n  <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#multiCollapseExample2\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample2\">Toggle second element</button>\n  <div class=\"collapse multi-collapse\" id=\"multiCollapseExample2\">\n    <div class=\"card card-body\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n    </div>\n  </div>\n</div>\n -->\n\n\n <mat-card class=\"example-card\">\n   <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col-3 meal-image\">\n       </div>\n       <div class=\"col-9\">\n        <mat-card-header>\n          <mat-card-title>{{data.meal.name}}</mat-card-title>\n          <mat-card-subtitle>{{data.time}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>\n            description of the Recipe\n          </p>\n        </mat-card-content>\n       </div>\n     </div>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/meals-list/meals-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/meals-list/meals-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let data of selectedDayData\" >\n  <app-meal [data]=\"data\" (click)=\"openDialog(data)\"></app-meal>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- navbar -->\n <div id=\"navbar\">\n  <div id=\"corner\">\n    <div id=\"logo\">\n      <img src=\"../../../assets/logo-white.png\" alt=\"\">\n    </div>\n  </div>\n  <nav>\n    <ul id=\"nav-ul\">\n      <li><a routerLink=\"\">Personalized Diet Plan</a></li>\n      <li><a routerLink=\"/diet-plan\">Diet Plan</a></li>\n      <li><a routerLink=\"/contact-us\">Contact Us</a></li>\n    </ul>\n    <img class=\"nav-ham\" src=\"./../../../assets/open-menu (1).svg\" alt=\"\" (click)=\"handleNavHam()\">\n  </nav>\n</div>\n<div #menu class=\"menu-absolute\">\n  <img class=\"close\" src=\"./../../../assets/close (1).svg\" alt=\"\"(click)=\"handleClose()\">\n  <ul id=\"nav-ul-ham\">\n    <li><a (click)=\"itemClicked()\" routerLink=\"\">Personalized Diet Plan</a></li>\n    <li><a (click)=\"itemClicked()\" routerLink=\"/diet-plan\">Diet Plan</a></li>\n    <li><a (click)=\"itemClicked()\" routerLink=\"/contact-us\">Contact Us</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/recipe-modal/recipe-modal.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/recipe-modal/recipe-modal.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/recipe/recipe.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/recipe/recipe.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"recipe-section\">\n    <div class=\"container\">\n        <h4>{{mealName}}</h4>\n        <div class=\"row recipe-container\">\n\n            <div class=\"col-md recipe-image\">\n                <div class=\"overlay\">\n                    <button class=\"nutrition-buttons\">Carbs {{totalCarbs}}g</button>\n                    <button class=\"nutrition-buttons\">Protein {{totalProtein}}g</button>\n                    <button class=\"nutrition-buttons\">Fat {{totalFat}}g</button>\n                    <button class=\"nutrition-buttons\">Cal {{totalCal}}kcal</button>\n                </div>\n            </div>\n            <div class=\"col-md recipe-text\">\n                <mat-tab-group mat-align-tabs=\"center\">\n                    <mat-tab label=\"Ingridient\" class=\"tab\"><div class=\"main-tab-ing\">\n                        <div class=\"left\" *ngFor=\"let recipe of recipeData\">\n                            <h4>{{recipe.recipe.name}}</h4>\n                            <ul>\n                                <li *ngFor=\"let ing of recipe.recipe.ingredients\">{{ing.name}}</li>\n                            </ul>\n                        </div>\n                    </div></mat-tab>\n                    <mat-tab label=\"Method\">\n                        <div *ngFor=\"let recipe of recipeData\">\n                        <h4>{{recipe.recipe.name}}</h4>\n                        <p>{{recipe.recipe.method}}</p>\n                        </div>\n                    </mat-tab>\n                  </mat-tab-group>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slide/foodpreference/foodpreference.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slide/foodpreference/foodpreference.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"foodpref-section\">\n    <div class=\"overlay\">\n        <p>Your Personalized Diet Plan is</p>\n    <p>JUST A FEW STEPS AWAY</p>\n    <h3>Food Preferences?</h3> \n    <span class=\"warning\" *ngIf=\"warning\">Please Select A Food Preference</span>\n    <form action=\"\">\n        <input type=\"radio\" name=\"foodpref\" value=\"veg\" [(ngModel)]=\"foodpref\">\n        <input type=\"radio\" name=\"foodpref\" value=\"non_veg\" [(ngModel)]=\"foodpref\">\n        <input type=\"radio\" name=\"foodpref\" value=\"egg\" [(ngModel)]=\"foodpref\"><br>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\" col-md image-div\">\n                    <img src=\"{{ veg? '../../../../../../assets/custom-slides/Foodpreferences/vegetarian highlihgted.svg' : '../../../../../../assets/custom-slides/Foodpreferences/vegetarina.svg'}}\" (click)=\"handleveg()\" alt=\"\" class=\"pref-image\">\n                    <p>Vegetarian</p>\n                </div>\n                <div class=\"col-md image-div\">\n                    <img src=\"{{ nonveg? '../../../../../../assets/custom-slides/Foodpreferences/non veg highlighted.svg' : '../../../../../../assets/custom-slides/Foodpreferences/non-veg.svg'}}\" (click)=\"handlenonveg()\" alt=\"\" class=\"pref-image\">\n                    <p>Non-Vegetarian</p>\n                </div>\n                <div class=\"col-md image-div\">\n                    <img src=\"{{ egg? '../../../../../../assets/custom-slides/Foodpreferences/Eggetarian-highlihgted.svg' : '../../../../../../assets/custom-slides/Foodpreferences/eggetarian.svg'}}\" (click)=\"handleegg()\" alt=\"\" class=\"pref-image\">\n                    <p>Eggetarian</p>\n                </div>\n            </div>\n        </div>\n        \n        \n        \n    </form>\n    <div class=\"container bottom-container\">\n        <div class= \"bottom-row row\">\n            <div class=\" bottom-col col\">\n                <button (click)=\"handlePrev()\" class=\"back\">BACK</button>\n            </div>\n            <!-- <div class=\"bottom-col col\">\n                <button (click)=\"handleNext()\" class=\"next\">Continue</button>\n            </div> -->\n        </div>\n    </div>\n    </div>\n</section>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slide/goal/goal.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slide/goal/goal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"goal-section\">\n    <div class=\"overlay\">\n        <p>Your Personalized Diet Plan is</p>\n    <p>JUST A FEW STEPS AWAY</p>\n    <h3>Select A Goal</h3> \n    <span class=\"warning\" *ngIf=\"warning\">Please Select A Goal</span>\n    <form action=\"\">\n        <input type=\"radio\" name=\"goal\" value=\"weight_loss\" [(ngModel)]=\"goal\">\n        <input type=\"radio\" name=\"goal\" value=\"weight_gain\" [(ngModel)]=\"goal\">\n        <input type=\"radio\" name=\"goal\" value=\"muscle_building\" [(ngModel)]=\"goal\">\n    </form>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md\">\n                <button class=\" transparent-button block-button\" (click)=\"handleweightloss()\" [ngClass]=\"{'checked': goal=='weightloss'}\" >Weight Loss</button>\n             </div> \n             <div class=\"col-md\">\n                <button class=\" transparent-button block-button\" (click)=\"handleweightgain()\" [ngClass]=\"{'checked': goal=='weightgain'}\">Weight Gain</button>\n             </div>\n            <div class=\"col-md\">\n            <button class=\" transparent-button block-button\" (click)=\"handlemusclebuilding()\" [ngClass]=\"{'checked': goal=='musclebuilding'}\">Muscle Building</button>\n            </div>\n        </div>\n         \n    </div>\n     \n    \n    \n    <div class=\"container bottom-container\">\n        <div class=\"row bottom-row\">\n            <div class=\"col-md bottom-col\">\n                <button class=\"back\" (click)=\"handlePrev()\" alt=\"\">BACK</button>\n            </div>\n        </div>\n    </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slide/male-female/male-female.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slide/male-female/male-female.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"male-female\">\n    <div class=\"overlay\">\n        <p id=\"p-heading\" >Your Personalized Diet Plan is</p>\n    <p>JUST A FEW STEPS AWAY</p>\n    <h3>Select Your Gender</h3>\n    <span class=\"warning\" *ngIf=\"warning\">Please select a gender</span>\n    <input type=\"radio\" [ngModel]=\"gender\" name=\"gender\" value=\"male\">\n    <input type=\"radio\" [ngModel]=\"gender\" name=\"gender\" value=\"female\"> <br>\n    <div class=\"container\">\n        <div class=\"row image-div\">\n            <div class=\"col-md\">\n                <img src=\"{{ male? '../../../../../../assets/new/male-icon-selected.png' : '../../../../../../assets/new/male-icon.png'}}\" (click)=\"handlemaleclick()\" alt=\"male-femlae\">\n            <p>Male</p>\n            </div>\n            <div class=\"col-md\">\n                <img src=\"{{ female? '../../../../../../assets/new/female-icon-selected.png' : '../../../../../../assets/new/female-icon.png'}}\" (click)=\"handlefemaleclick()\" alt=\"\">\n                <p>Female</p>\n            </div>\n        </div>\n    </div>    \n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slide/personalized-measurements/personalized-measurements.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slide/personalized-measurements/personalized-measurements.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"measurements-section\">\n    <div class=\"overlay\">\n        <p id=\"#head\">Your Personalized Diet Plan is</p>\n        <p>JUST A FEW STEPS AWAY</p>\n        <h3>Measurements</h3>\n        <p class=\"warning\" *ngIf=\"warning\">Fields with * are Mendatory</p>\n        <form action=\"\" [formGroup]=\"measurementform\">\n            \n            <select name=\"Age\" id=\"\" formControlName=\"age\">\n                <option value=\"age\" selected disabled hidden>Age*</option>\n                <option *ngFor=\"let age of ageArr\" value={{age}}>{{age}}</option>\n            </select>\n                <select name=\"profession\" id=\"\" formControlName=\"heightft\">\n                    <option value=\"heightft\" selected disabled hidden>Height Ft*</option>\n                    <option value=\"4\">4'</option>\n                    <option value=\"5\">5'</option>\n                    <option value=\"6\">6'</option>\n                    <option value=\"7\">7'</option>\n                    <option value=\"8\">8'</option>\n                    \n                </select>            \n                <select name=\"heightinch\" id=\"\" formControlName=\"heightinch\">\n                    <option value=\"heightin\" selected disabled hidden>Height Inch*</option>\n                    <option value=\"0\">0\"</option>\n                    <option value=\"1\">1\"</option>\n                    <option value=\"2\">2\"</option>\n                    <option value=\"3\">3\"</option>\n                    <option value=\"4\">4\"</option>\n                    <option value=\"5\">5\"</option>\n                    <option value=\"6\">6\"</option>\n                    <option value=\"7\">7\"</option>\n                    <option value=\"8\">8\"</option>\n                    <option value=\"9\">9\"</option>\n                    <option value=\"10\">10\"</option>\n                    <option value=\"11\">11\"</option>\n                    <option value=\"12\">12\"</option>\n                </select>\n                <input name=\"weight\" id=\"\" formControlName=\"weight\" placeholder=\"Weight*\" type=\"number\">         \n            </form>\n        <div class=\"container bottom-container\">\n            <div class=\"row bottom-row\">\n                <div class=\"col bottom-col\">\n                    <button class=\"back\" (click)=\"handlePrev()\" alt=\"\">BACK</button>\n                </div>\n                <div class=\"col bottom-col\">\n                    <button class=\"next\" (click)=\"handleNext()\" alt=\"\">CONTINUE</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slide/physical-active/physical-active.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slide/physical-active/physical-active.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"physical-active-section\">\n    <div class=\"overlay\">\n        <p>Your Personalized Diet Plan is</p>\n        <p>JUST A FEW STEPS AWAY</p>\n        <h3>Physical Activity</h3>\n        <span class=\"warning\" *ngIf=\"warning\">Please select a Physical Activity</span>\n        \n            <input type=\"checkbox\" [(ngModel)]=\"noactivity\" value=\"noactivity\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"oftenWalk\" value=\"oftenWalk\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"oneTwoTimes\" value=\"1-2times\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"threeFiveTimes\" value=\"3-5times\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"fiveSevenTimes\" value=\"5-7times\"class=\"hidden\">\n             <br>\n            <button class=\" transparent-button\" (click)=\"handlenoactivity()\" [ngClass]=\"{'checked': noactivity==true}\">Almost No Physical Activity</button>\n            <button class=\" transparent-button\" (click)=\"handleoften()\" [ngClass]=\"{'checked': oftenWalk==true}\">I often go for a walk</button>\n            <button class=\" transparent-button\" (click)=\"handleonetwo()\" [ngClass]=\"{'checked': oneTwoTimes==true}\">I Exersice 1-2 times a Week </button>\n            <button class=\" transparent-button\" (click)=\"handlethreefive()\" [ngClass]=\"{'checked': threeFiveTimes==true}\">I Exersice 3-5 time a Week</button> <br>\n            <button class=\" transparent-button\" (click)=\"handlefiveseven()\" [ngClass]=\"{'checked': fiveSevenTimes==true}\">I Exersice 5-7 time a Week</button>\n            \n            <div class=\"container bottom-container\">\n                <div class=\"row bottom-row\">\n                    <div class=\"col bottom-col\">\n                        <button class=\"back\" (click)=\"handlePrev()\" alt=\"\">BACK</button>\n                    </div>\n                </div>\n            </div>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slide/true/true.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slide/true/true.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"physical-active-section\">\n    <div class=\"overlay\">\n        <p>Your Personalized Diet Plan is</p>\n        <p>JUST A FEW STEPS AWAY</p>\n        <h3>Which of the following is true for you?</h3>\n        <span class=\"warning\" *ngIf=\"warning\">Please Select An Option</span>\n        \n            <input type=\"checkbox\" [(ngModel)]=\"sleep\" value=\"sleep\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"eatlate\" value=\"eatlate\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"salt\" value=\"salt\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"sweets\" value=\"sweets\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"none\" value=\"none\"class=\"hidden\">\n             <br>\n            <button class=\" transparent-button\" (click)=\"handleSleep()\" [ngClass]=\"{'checked': sleep==true}\">I do not get Enough Sleep</button>\n            <button class=\" transparent-button\" (click)=\"handleEatLate()\" [ngClass]=\"{'checked': eatlate==true}\">I eat late at Night</button>\n            <button class=\" transparent-button\" (click)=\"handleSalt()\" [ngClass]=\"{'checked': salt==true}\">I consume a lot of salt</button>\n            <button class=\" transparent-button\" (click)=\"handleSweets()\" [ngClass]=\"{'checked': sweets==true}\">I cannot give up eating sweets</button> <br>\n            <button class=\" transparent-button\" (click)=\"handleNone()\" [ngClass]=\"{'checked': none==true}\">None of the above</button>\n            \n            <div class=\"container bottom-container\">\n                <div class=\"row bottom-row\">\n                    <div class=\"col bottom-col\">\n                        <button class=\"back\" (click)=\"handlePrev()\" alt=\"\">BACK</button>\n                    </div>\n                    <div class=\"col bottom-col\">\n                        <button class=\"next orange-button\" (click)=\"handleNext()\">CONTINUE</button>\n                    </div>\n                </div>\n            </div>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slide/typical-day/typical-day.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slide/typical-day/typical-day.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"physical-active-section\">\n    <div class=\"overlay\">\n        <p>Your Personalized Diet Plan is</p>\n        <p>JUST A FEW STEPS AWAY</p>\n        <h3>Describe A Typical Day for You?</h3>\n        <span class=\"warning\" *ngIf=\"warning\">Please select a Physical Activity</span>\n        \n            <input type=\"checkbox\" [(ngModel)]=\"atoffice\" value=\"atoffice\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"gooutregular\" value=\"gooutregular\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"onfoot\" value=\"onfoot\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"labour\" value=\"labour\" class=\"hidden\">\n            <input type=\"checkbox\" [(ngModel)]=\"athome\" value=\"athome\"class=\"hidden\">\n             <br>\n            <button class=\" transparent-button\" (click)=\"handleAtOffice()\" [ngClass]=\"{'checked': atoffice==true}\">At the Office</button>\n            <button class=\" transparent-button\" (click)=\"handleGoOutRegular()\" [ngClass]=\"{'checked': gooutregular==true}\">I go out on a Regular Basis</button>\n            <button class=\" transparent-button\" (click)=\"handleOnFoot()\" [ngClass]=\"{'checked': onfoot==true}\">I spend Better Part of the Day on Foot</button>\n            <button class=\" transparent-button\" (click)=\"handleLabour()\" [ngClass]=\"{'checked': labour==true}\">Manual Labour</button> <br>\n            <button class=\" transparent-button\" (click)=\"handleAtHome()\" [ngClass]=\"{'checked': athome==true}\">I mostly stay at Home</button>\n            \n            <div class=\"container bottom-container\">\n                <div class=\"row bottom-row\">\n                    <div class=\"col bottom-col\">\n                        <button class=\"back\" (click)=\"handlePrev()\" alt=\"\">BACK</button>\n                    </div>\n                </div>\n            </div>\n\n    </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slide/water-intake/water-intake.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slide/water-intake/water-intake.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"foodpref-section\">\n    <div class=\"overlay\">\n        <p>Your Personalized Diet Plan is</p>\n    <p>JUST A FEW STEPS AWAY</p>\n    <h3>Water Intake</h3> \n    <span class=\"warning\" *ngIf=\"warning\">Please select an option</span>\n    <form action=\"\">\n        <input type=\"radio\" name=\"water\" value=\"onelitre\" [(ngModel)]=\"onelitre\">\n        <input type=\"radio\" name=\"water\" value=\"onepointfivelitre\" [(ngModel)]=\"water\">\n        <input type=\"radio\" name=\"water\" value=\"twolitre\" [(ngModel)]=\"twolitre\">\n        <input type=\"radio\" name=\"water\" value=\"threelitre\" [(ngModel)]=\"water\">\n        <input type=\"radio\" name=\"water\" value=\"morethanthreelitre\" [(ngModel)]=\"morethanthreelitre\"> <br>\n    </form>\n                <div class=\"image-div \">\n                    <!-- <img src=\"../../../../assets/peronslized-slide-9/1 litre.svg\" alt=\"\"> -->\n                    <Button class=\" transparent-button\" (click)=\"handleonelitre()\" [ngClass]=\"{'checked': onelitre==true}\">1 Litre</Button>\n                </div>\n                <div class=\"image-div \">\n                    <!-- <img src=\"../../../../assets/peronslized-slide-9/2 litre.svg\" alt=\"\"> -->\n                    <Button class=\" transparent-button\" (click)=\"handletwolitre()\" [ngClass]=\"{'checked': twolitre==true}\">2 Litres</Button>\n                </div>\n                <div class=\"image-div \">\n                    <!-- <img src=\"../../../../assets/peronslized-slide-9/more than 3 litre.svg\" alt=\"\"> -->\n                    <Button class=\" transparent-button\" (click)=\"handlemorethanthreelitre()\" [ngClass]=\"{'checked': morethanthreelitre==true}\">More than 3 Litres</Button>\n                </div>\n            \n        \n        <div class=\"container bottom-container\">\n            <div class=\"row bottom-row\">\n                <div class=\"col bottom-col\">\n                    <button class=\"back\" (click)=\"handlePrev()\" alt=\"\">BACK</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/checkout.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/checkout/checkout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<app-announcement></app-announcement>\n<section id=\"checkout-section\">\n    <div class=\"container\">\n        <app-navbar></app-navbar>\n        <h2 class=\"heading\">Check Out</h2>\n    <p>Please provide the information in order to checkout</p>\n    <p class=\"error\" *ngIf=\"formError\">Add Fields are required</p>\n    <hr>\n    <form [formGroup]=\"checkoutform\" class=\"checkout-form\">\n        <mat-form-field appearance=\"fill\" [floatLabel]=\"\">\n            <mat-label>Name</mat-label>\n            <input matInput placeholder=\"\" type=\"text\" formControlName=\"name\">\n          </mat-form-field>\n          <mat-form-field appearance=\"fill\" [floatLabel]=\"\">\n            <mat-label>Email</mat-label>\n            <input matInput placeholder=\"\" type=\"email\" formControlName=\"email\">\n          </mat-form-field>\n          <mat-form-field appearance=\"fill\" [floatLabel]=\"\">\n            <mat-label>Mobile Number</mat-label>\n            <input matInput placeholder=\"\" type=\"number\" formControlName=\"phone\">\n          </mat-form-field>\n    </form>\n    <!-- <p class=\"payment-span\">Please select your payment method</p> -->\n    <!-- <div class=\"container payment-container\">\n        <div class=\"row\">\n            <div class=\"col-md\" [ngClass]=\"{'checked': razorPay==true}\"> <input type=\"radio\" name=\"payment\" value=\"razor\"><img src=\"../../../assets/Razorpay_logo.png\" alt=\"\" (click)=\"handleRazor()\"></div>\n        </div>\n    </div> -->\n    <div class=\"container button-container\">\n        <div class=\"row button-row\">\n            <div class=\"col button-box\">\n                <button class=\"grey-button block-button\"(click)=\"handleCancel()\" >Cancel</button>\n            </div>\n            <div class=\"col button-box\">\n                <button class=\" orange-button block-button\" (click)=\"proceed()\">Proceed</button>\n            </div>\n        </div>\n    </div>\n    </div>\n</section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us/contact-us.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact-us/contact-us.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact-us\" class=\"header\">\n\n    <app-announcement></app-announcement>\n    <div class=\"container\">\n        \n      <app-navbar></app-navbar>\n      <div class=\"header-content\">\n          <h1>Contact Us</h1>\n          <p>Home/Contact us</p>\n      </div>\n    </div>\n  </section>\n  <section class=\"contact-form-section\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-md address\">\n                  <!-- address info -->\n                  <h3>Contact Us</h3>\n                  <h2>Address Information</h2>\n                  <img src=\"../../../assets/leaf-icon.png\" alt=\"\">\n                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati et consequuntur odit nemo, modi harum inventore dolor architecto quas aliquid optio quasi ea omnis fugiat quisquam eaque non esse quod?</p>\n                  <h2>Our Store Address</h2>\n                  <address>E34, Sai road Baddi</address>\n                  <div class=\"bullets\">\n                      <div class=\"bullet\">\n                        <div class=\"bullet-image\">\n                            <img src=\"../../../assets/office-timings.png\" alt=\"\">\n                        </div>\n                        <div class=\"bullet-text\">\n                            <p>Moday to Friday : 9am to 6pm</p>\n                        </div>\n                      </div>\n                      <div class=\"bullet\">\n                        <div class=\"bullet-image\">\n                            <img src=\"../../../assets/emails.png\" alt=\"\">\n                        </div>\n                        <div class=\"bullet-text\">\n                            <p>info@customdiet.in</p>\n                        </div>\n                      </div>\n                      <div class=\"bullet\">\n                        <div class=\"bullet-image\">\n                            <img src=\"../../../assets/Phone.png\" alt=\"\">\n                        </div>\n                        <div class=\"bullet-text\">\n                            <p>(+91)-9999999999</p>\n                        </div>\n                      </div>                   \n                  </div>\n              </div>\n              <div class=\"col-md contact-form\">\n                  <!-- contact-form -->\n                  <h3>Contact Form</h3>\n                  <h2>Get in Touch</h2>\n                  <img src=\"../../../assets/leaf-icon.png\" alt=\"\">\n                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam quaerat vero doloribus odit, porro sint odio est voluptates delectus animi aliquid nulla, accusantium corrupti itaque? Molestias, doloremque! </p>\n                  <div class=\"contact\">\n                    <input type=\"text\" placeholder=\"Name*\">\n                    <input type=\"text\" placeholder=\"Email*\">\n                    <input type=\"text\" placeholder=\"Subject*\">\n                    <textarea name=\"message\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Message*\"></textarea>\n                    <button class=\"orange-button\">SEND</button>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </section>\n  <!-- <app-newsletter></app-newsletter> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-announcement></app-announcement>\n    <section id=\"checkout-section\">\n        <div class=\"container\">\n            <app-navbar></app-navbar>\n            <h2 class=\"heading\">Login</h2>\n            <p>Please provide the information in order to login</p>\n            <hr>\n            <p class=\"error\" *ngIf=\"apiError\">Cannot find any Diet Plan with this email</p>\n            <form [formGroup]=\"loginForm\" class=\"checkout-form\">\n                  <mat-form-field appearance=\"fill\" [floatLabel]=\"\">\n                    <mat-label>Email</mat-label>\n                    <input matInput placeholder=\"\" type=\"email\" formControlName=\"email\">\n                  </mat-form-field>\n            </form>\n            <!-- <p class=\"payment-span\">Please select your payment method</p> -->\n            <!-- <div class=\"container payment-container\">\n                <div class=\"row\">\n                    <div class=\"col-md\" [ngClass]=\"{'checked': razorPay==true}\"> <input type=\"radio\" name=\"payment\" value=\"razor\"><img src=\"../../../assets/Razorpay_logo.png\" alt=\"\" (click)=\"handleRazor()\"></div>\n                </div>\n            </div> -->\n            <div class=\"container button-container\">\n                <div class=\"row button-row\">\n                    <div class=\"col button-box\">\n                        <button class=\"grey-button block-button\"(click)=\"handleCancel()\" >Cancel</button>\n                    </div>\n                    <div class=\"col button-box\">\n                        <button class=\" orange-button block-button\" (click)=\"login(loginForm.controls.email.value)\">Proceed</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-announcement></app-announcement>\n<section id=\"page-not-found\">\n  <div class=\"container\">\n    <app-navbar></app-navbar>\n    <div class=\"header-content\">\n      <h1>Oops! Page Not Found</h1>\n      <main lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" >\n      </main>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/payment-failure/payment-failure.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/payment-failure/payment-failure.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-announcement></app-announcement>\n<section id=\"payment-failure\">\n  <div class=\"container\">\n    <app-navbar></app-navbar>\n    <div class=\"header-content\">\n      <h1>Oops! Payment Failed 🚫</h1>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/payment-success/payment-success.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/payment-success/payment-success.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Payment Success ! ✅</h3>\n<button [mat-dialog-close]=\"true\">Okay</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/personalized-diet/personalized-diet.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/personalized-diet/personalized-diet.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section id=\"personalized-diet\">\n    <div class=\"container\">\n      <app-navbar></app-navbar>\n      <div class=\"header-content\">\n        <img class=\"header-image\" src=\"../../../assets/diet-icon.png\" alt=\"\">\n        <hr class=\"orange-button\">\n        <h1>Get Your <span class=\"green\">Personalized Diet</span> Plan</h1>\n        <hr class=\"orange-button\">\n        <p class=\"header-subtitle\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores delectus placeat libero nihil nostrum eligendi natus, dolor saepe animi cumque amet, architecto culpa iure quaerat illo perferendis veritatis quod accusantium.</p>\n      </div>\n    </div>\n  </section> -->\n  <app-announcement></app-announcement>\n  <section class=\"all\">\n    <div class=\"container\">\n      <app-navbar></app-navbar>\n      <app-male-female (next)=\"handleNextInParent()\" *ngIf=\"selectedSlide==0\"></app-male-female>\n      <app-personalized-measurements (next)=\"handleNextInParent()\" (prev)=\"handlePrevInParent()\" *ngIf=\"selectedSlide==1\"></app-personalized-measurements>\n      <app-physical-active (next)=\"handleNextInParent()\" (prev)=\"handlePrevInParent()\" *ngIf=\"selectedSlide==4\"></app-physical-active>\n      <app-goal (next)=\"handleNextInParent()\" (prev)=\"handlePrevInParent()\" *ngIf=\"selectedSlide==2\"></app-goal>\n      <app-foodpreference (next)=\"handleNextInParent()\" (prev)=\"handlePrevInParent()\" *ngIf=\"selectedSlide==3\"></app-foodpreference>\n      <app-typical-day (next)=\"handleNextInParent()\" (prev)=\"handlePrevInParent()\" *ngIf=\"selectedSlide==5\"></app-typical-day>\n      <app-water-intake (prev)=\"handlePrevInParent()\" (next)=\"handleNextInParent()\" *ngIf=\"selectedSlide==6\"></app-water-intake>\n      <app-true (prev)=\"handlePrevInParent()\" (next)=\"handleNextInParent()\" *ngIf=\"selectedSlide==7\"></app-true>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile-summary/profile-summary.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile-summary/profile-summary.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-announcement></app-announcement>\n<app-navbar></app-navbar>\n<section class=\"profile-section\">\n<div class=\"container heading-section\">\n\n    <h2 class=\"orange\">Your Profile Summary</h2>\n    <p class=\"orange\">Your Body Dimensions</p>\n    <div class=\"row\">\n        <div class=\"col \">\n            <p class=\"bold\">{{userAge}}</p>\n            <p>Years</p>\n        </div>\n        <div class=\"col \">\n            <p class=\"bold\">{{userHeightM|number:'.2-2'}}</p>\n            <p>Meter</p>\n        </div>\n        <div class=\"col \">\n            <p class=\"bold\">{{userWeightKg|number:'.0-0'}}</p>\n            <p>Kg</p>\n        </div>\n    </div>\n    <h5 *ngIf=\"BMI>=25&&BMI<30\">Checkout! You are in overweight category</h5>\n    <h5 *ngIf=\"BMI<18.5\">Checkout! you are in UnderWeight Category</h5>\n    <h5 *ngIf=\"BMI>=18.5&&BMI<25\">You are in Normal Category</h5>\n    <h5 *ngIf=\"BMI>=30\">Checkout! you are in Obese Category</h5>\n    <p class=\"purple\">Current BMI: {{BMI | number:'2.2-2'}}</p>\n    <!-- lottie Animation -->\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md\">\n                <div class=\"bmi-guage\">\n                    <ngx-charts-gauge\n                        [view]=\"view\"\n                        [scheme]=\"colorScheme\"\n                        [results] = \"single\"\n                        [legend]=\"legend\"\n                        [customColors]=\"customColors\"\n                        [legendPosition]=\"legendPosition\"\n                        (select)=\"onSelect($event)\"\n                        (activate)=\"onActivate($event)\"\n                        (deactivate)=\"onDeactivate($event)\"\n                        [max] = \"40\"\n                        [angleSpan] = \"180\"\n                        [startAngle] = \"270\"\n                        showText = \"true\"\n                        [showAxis] = \"false\"\n                        >\n                    </ngx-charts-gauge>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n\n\n    <p class=\"comitted\">By the way, you need to <span *ngIf = \"(idealWeight-userWeightKg)<0\">loose</span> <span *ngIf = \"(idealWeight-userWeightKg)>0\">gain</span> <span class=\"ideal-weight-kg\"> {{idealWeight-userWeightKg|number:'.2-2'}} kgs</span> more to reach your avearge weight, which is acheivable, <br> if we both are comitted to it </p>\n    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint accusamus quis saepe praesentium aliquam quibusdam sequi, voluptatum, aspernatur velit, incidunt sapiente laudantium quaerat. Inventore explicabo error sequi delectus ipsa provident.</p>\n    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam neque nostrum saepe, maxime suscipit amet sapiente eos, beatae praesentium corporis quo quisquam, porro libero dolorum ab alias necessitatibus quia voluptate.</p>\n</div>\n<div class=\"ideal-body-div\">\n    <div class=\"ideal-body-weight\">\n        <h4>Based on Your Answers, your ideal body weight is {{idealWeight|number:'.2-2'}} kg</h4>\n    </div>\n</div>\n<div class=\"calorie-div\">\n    <div class=\"calorie-count orange\">\n        <h5>Calorie Count</h5>\n        <!-----------calorie count animation------->\n        <div class=\"bmi-guage\">\n            <ngx-charts-gauge\n                        [view]=\"view\"\n                        [scheme]=\"colorSchemeCalorie\"\n                        [results] = \"singleCalorie\"\n                        [legend]=\"legend\"\n                        [legendPosition]=\"legendPosition\"\n                        (select)=\"onSelect($event)\"\n                        (activate)=\"onActiva7e($event)\"\n                        (deactivate)=\"onDeactivate($event)\"\n                        [max] = \"5000\"\n                        [angleSpan] = \"360\"\n                        [startAngle] = \"270\"\n                        showText = \"false\"\n                        [showAxis] = \"false\"\n                        >\n                    </ngx-charts-gauge>\n        </div>\n    </div>\n</div>\n\n    <div class=\"water-intake orange\">\n        <h5>Daily Water Intake</h5>\n        <img src=\"./../../../assets/h20.png\" alt=\"\">\n        <p>{{0.035*userWeightKg|number:'.2-2'}} Litre</p>\n    </div>\n    <div class=\"metabolic-age orange\">\n        <h5>Metabolic Age</h5>\n        <img src=\"{{ gender=='male'? '../../../../../../assets/profile-summary/guy.svg' : '../../../../../../assets/profile-summary/gal.svg'}}\" alt=\"\">\n        <p>32 years</p>\n    </div>\n    <div class=\"kit\">\n        <h4>get your Personalized Weight loss Kit</h4>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col img-col\">\n                    <img src=\"./../../../assets/profile-summary/personalized meal plan.svg\" alt=\"\">\n                    <p>Personaized Meal Plan</p>\n                </div>\n                <div class=\"col img-col\">\n                    <img src=\"./../../../assets/profile-summary/detailed instructions.svg\" alt=\"\">\n                    <p>Detailed Instructions</p>\n                </div>\n                <div class=\"col img-col\">\n                    <img src=\"./../../../assets/profile-summary/metabolism boosting exercise.svg\" alt=\"\">\n                    <p>Metabloism Boosting Exercises</p>\n                </div>\n        </div>\n        </div>\n    </div>\n        <div class=\"bottom-container\">\n            <div class=\"col-md price-div\"><span class=\"strike\">1299</span><span class=\"price\">{{pricing}}</span></div>\n            <div class=\"col-md button-div\" (click)=\"handleCheckout()\">\n                <button class=\"block-button\">CHECKOUT</button>\n            </div>\n        </div>\n\n</section>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_personalized_diet_personalized_diet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/personalized-diet/personalized-diet.component */ "./src/app/pages/personalized-diet/personalized-diet.component.ts");
/* harmony import */ var _pages_profile_summary_profile_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/profile-summary/profile-summary.component */ "./src/app/pages/profile-summary/profile-summary.component.ts");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "./src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var _components_diet_plan_diet_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/diet-plan/diet-plan.component */ "./src/app/components/diet-plan/diet-plan.component.ts");
/* harmony import */ var _pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/payment-success/payment-success.component */ "./src/app/pages/payment-success/payment-success.component.ts");
/* harmony import */ var _pages_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/payment-failure/payment-failure.component */ "./src/app/pages/payment-failure/payment-failure.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");












var routes = [
    { path: '', component: _pages_personalized_diet_personalized_diet_component__WEBPACK_IMPORTED_MODULE_5__["PersonalizedDietComponent"] },
    { path: 'contact-us', component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] },
    { path: 'profile-summary', component: _pages_profile_summary_profile_summary_component__WEBPACK_IMPORTED_MODULE_6__["ProfileSummaryComponent"] },
    { path: 'checkout', component: _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutComponent"] },
    { path: 'diet-plan', component: _components_diet_plan_diet_plan_component__WEBPACK_IMPORTED_MODULE_8__["DietPlanComponent"] },
    { path: 'payment-success', component: _pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__["PaymentSuccessComponent"] },
    { path: 'payment-failed', component: _pages_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_10__["PaymentFailureComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ProNutritionFrontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_cta_cta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cta/cta.component */ "./src/app/components/cta/cta.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/fesm5/ngx-lottie.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/fesm5/swimlane-ngx-charts.js");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "./src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var _pages_personalized_diet_personalized_diet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/personalized-diet/personalized-diet.component */ "./src/app/pages/personalized-diet/personalized-diet.component.ts");
/* harmony import */ var _components_slide_male_female_male_female_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/slide/male-female/male-female.component */ "./src/app/components/slide/male-female/male-female.component.ts");
/* harmony import */ var _components_slide_personalized_measurements_personalized_measurements_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/slide/personalized-measurements/personalized-measurements.component */ "./src/app/components/slide/personalized-measurements/personalized-measurements.component.ts");
/* harmony import */ var _components_slide_physical_active_physical_active_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/slide/physical-active/physical-active.component */ "./src/app/components/slide/physical-active/physical-active.component.ts");
/* harmony import */ var _components_slide_goal_goal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/slide/goal/goal.component */ "./src/app/components/slide/goal/goal.component.ts");
/* harmony import */ var _components_slide_foodpreference_foodpreference_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/slide/foodpreference/foodpreference.component */ "./src/app/components/slide/foodpreference/foodpreference.component.ts");
/* harmony import */ var _components_slide_water_intake_water_intake_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/slide/water-intake/water-intake.component */ "./src/app/components/slide/water-intake/water-intake.component.ts");
/* harmony import */ var _custom_slide_service_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");
/* harmony import */ var _pages_profile_summary_profile_summary_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/profile-summary/profile-summary.component */ "./src/app/pages/profile-summary/profile-summary.component.ts");
/* harmony import */ var _components_slide_typical_day_typical_day_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/slide/typical-day/typical-day.component */ "./src/app/components/slide/typical-day/typical-day.component.ts");
/* harmony import */ var _components_slide_true_true_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/slide/true/true.component */ "./src/app/components/slide/true/true.component.ts");
/* harmony import */ var _components_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/announcement/announcement.component */ "./src/app/components/announcement/announcement.component.ts");
/* harmony import */ var _components_diet_plan_diet_plan_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/diet-plan/diet-plan.component */ "./src/app/components/diet-plan/diet-plan.component.ts");
/* harmony import */ var _components_meals_list_meals_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/meals-list/meals-list.component */ "./src/app/components/meals-list/meals-list.component.ts");
/* harmony import */ var _components_meal_meal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/meal/meal.component */ "./src/app/components/meal/meal.component.ts");
/* harmony import */ var _components_recipe_modal_recipe_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/recipe-modal/recipe-modal.component */ "./src/app/components/recipe-modal/recipe-modal.component.ts");
/* harmony import */ var _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/recipe/recipe.component */ "./src/app/components/recipe/recipe.component.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./window.service */ "./src/app/window.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/payment-success/payment-success.component */ "./src/app/pages/payment-success/payment-success.component.ts");
/* harmony import */ var _pages_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/payment-failure/payment-failure.component */ "./src/app/pages/payment-failure/payment-failure.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");










































function playerFactory() {
    return __webpack_require__.e(/*! import() | lottie-web */ "lottie-web").then(__webpack_require__.t.bind(null, /*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js", 7));
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_33__["RecipeComponent"],
                _components_cta_cta_component__WEBPACK_IMPORTED_MODULE_6__["CtaComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"],
                _pages_personalized_diet_personalized_diet_component__WEBPACK_IMPORTED_MODULE_17__["PersonalizedDietComponent"],
                _components_slide_male_female_male_female_component__WEBPACK_IMPORTED_MODULE_18__["MaleFemaleComponent"],
                _components_slide_personalized_measurements_personalized_measurements_component__WEBPACK_IMPORTED_MODULE_19__["PersonalizedMeasurementsComponent"],
                _components_slide_physical_active_physical_active_component__WEBPACK_IMPORTED_MODULE_20__["PhysicalActiveComponent"],
                _components_slide_goal_goal_component__WEBPACK_IMPORTED_MODULE_21__["GoalComponent"],
                _components_slide_foodpreference_foodpreference_component__WEBPACK_IMPORTED_MODULE_22__["FoodpreferenceComponent"],
                _components_slide_water_intake_water_intake_component__WEBPACK_IMPORTED_MODULE_23__["WaterIntakeComponent"],
                _pages_profile_summary_profile_summary_component__WEBPACK_IMPORTED_MODULE_25__["ProfileSummaryComponent"],
                _components_slide_typical_day_typical_day_component__WEBPACK_IMPORTED_MODULE_26__["TypicalDayComponent"],
                _components_slide_true_true_component__WEBPACK_IMPORTED_MODULE_27__["TrueComponent"],
                _components_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_28__["AnnouncementComponent"],
                _components_diet_plan_diet_plan_component__WEBPACK_IMPORTED_MODULE_29__["DietPlanComponent"],
                _components_meals_list_meals_list_component__WEBPACK_IMPORTED_MODULE_30__["MealsListComponent"],
                _components_meal_meal_component__WEBPACK_IMPORTED_MODULE_31__["MealComponent"],
                _components_recipe_modal_recipe_modal_component__WEBPACK_IMPORTED_MODULE_32__["RecipeModalComponent"],
                _pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_36__["PaymentSuccessComponent"],
                _pages_payment_failure_payment_failure_component__WEBPACK_IMPORTED_MODULE_37__["PaymentFailureComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_38__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__["NgxChartsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                ngx_lottie__WEBPACK_IMPORTED_MODULE_14__["LottieModule"].forRoot({
                    player: playerFactory,
                    useCache: true,
                })
            ],
            providers: [_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_24__["CustomSlideService"], _window_service__WEBPACK_IMPORTED_MODULE_34__["WindowService"],],
            entryComponents: [_components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_33__["RecipeComponent"], _pages_payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_36__["PaymentSuccessComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/checkout.service.ts":
/*!*************************************!*\
  !*** ./src/app/checkout.service.ts ***!
  \*************************************/
/*! exports provided: CheckoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutService", function() { return CheckoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






var CheckoutService = /** @class */ (function () {
    function CheckoutService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-api-key', '70da442b-ac6e-4c02-a429-e16132c4fc58');
    }
    /**
     * send order related data to server, to create order in backend
     * returns order object if everything goes right, returns error if we get error
     */
    CheckoutService.prototype.placePersonalizedOrder = function (data) {
        var mockData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { true_statements: data.true_statements.join() });
        // const url = `${env.API_URL}/orders/create-personalized-order`;
        var localUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + "/create?model=order";
        return this.http.post(localUrl, mockData, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }));
    };
    CheckoutService.prototype.getDietPlanFromServer = function (email) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + "/get-dietplan?email=" + email);
    };
    CheckoutService.prototype.getPersonalizedDietPrice = function () {
        // const url = 'http://95.111.199.28/plans/pricing';
        var localUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + "/diet-plan-pricing";
        return this.http.get(localUrl, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.amount; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err); }));
    };
    CheckoutService.prototype.capturePayment = function (details) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_URL + "/capture-payment", details).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err); }));
    };
    CheckoutService.prototype.setPricing = function (price) {
        this.pricing = price;
    };
    CheckoutService.prototype.getPricing = function () {
        return this.pricing;
    };
    CheckoutService.prototype.setOrderId = function (rzp_order_id) {
        this.rzp_order_id = rzp_order_id;
    };
    CheckoutService.prototype.setDietPlan = function (dietPlan) {
        this.dietPlan = dietPlan;
    };
    CheckoutService.prototype.getDietPlan = function () {
        return this.dietPlan;
    };
    CheckoutService.prototype.getOrderId = function () {
        return this.rzp_order_id;
    };
    CheckoutService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CheckoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CheckoutService);
    return CheckoutService;
}());



/***/ }),

/***/ "./src/app/components/announcement/announcement.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/announcement/announcement.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".annoucement{\n    background-color: black;\n    height: 30px;\n    text-align: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding-top: 2px;\n}\n\n.annoucement p{\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbm5vdW5jZW1lbnQvYW5ub3VuY2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fubm91bmNlbWVudC9hbm5vdW5jZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbm5vdWNlbWVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmFubm91Y2VtZW50IHB7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/announcement/announcement.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/announcement/announcement.component.ts ***!
  \*******************************************************************/
/*! exports provided: AnnouncementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementComponent", function() { return AnnouncementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnnouncementComponent = /** @class */ (function () {
    function AnnouncementComponent() {
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
    };
    AnnouncementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-announcement',
            template: __webpack_require__(/*! raw-loader!./announcement.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/announcement/announcement.component.html"),
            styles: [__webpack_require__(/*! ./announcement.component.css */ "./src/app/components/announcement/announcement.component.css")]
        })
    ], AnnouncementComponent);
    return AnnouncementComponent;
}());



/***/ }),

/***/ "./src/app/components/cta/cta.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/cta/cta.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cta{\n  background-color: #8eb132;\n  color: white;\n}\n\n.cta button{\n  display: block;\n  margin: 0 auto;\n}\n\n.cta-button, .cta-content{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nsection{\n  padding-top: 50px;\n  padding-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdGEvY3RhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdGEvY3RhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Rhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGViMTMyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdGEgYnV0dG9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jdGEtYnV0dG9uLCAuY3RhLWNvbnRlbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5zZWN0aW9ue1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/cta/cta.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/cta/cta.component.ts ***!
  \*************************************************/
/*! exports provided: CtaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaComponent", function() { return CtaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CtaComponent = /** @class */ (function () {
    function CtaComponent() {
    }
    CtaComponent.prototype.ngOnInit = function () {
    };
    CtaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cta',
            template: __webpack_require__(/*! raw-loader!./cta.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cta/cta.component.html"),
            styles: [__webpack_require__(/*! ./cta.component.css */ "./src/app/components/cta/cta.component.css")]
        })
    ], CtaComponent);
    return CtaComponent;
}());



/***/ }),

/***/ "./src/app/components/diet-plan/diet-plan.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/diet-plan/diet-plan.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.header-content {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  text-align: center;\n}\n\n.header-content h1 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.week-header{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.week-header div{\n  padding: 10px 20px;\n}\n\n.week-title {\n  font-size: 1.5em;\n  font-weight: 500;\n  min-width: 50px;\n}\n\n.mat-icon {\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  font-size: 32px;\n}\n\n.mat-icon:hover {\n  background-color: #e2e2e2;\n  border-radius: 50%;\n}\n\n.weekday-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.weekday-header .weekday-item {\n  font-size: 1.5em;\n  width: 40px;\n  height: 40px;\n  font-weight: 600;\n}\n\ndiv.weekday-header div.weekday-item.selected {\n  background-color: rgba(241, 128, 58, 0.7);\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.weekday-header .weekday-item:hover {\n  background-color: #e2e2e2;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.recipe-body {\n  padding: 50px 0px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaWV0LXBsYW4vZGlldC1wbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWV0LXBsYW4vZGlldC1wbGFuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXItY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWNvbnRlbnQgaDEge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi53ZWVrLWhlYWRlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWVrLWhlYWRlciBkaXZ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLndlZWstdGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4ubWF0LWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi53ZWVrZGF5LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLndlZWtkYXktaGVhZGVyIC53ZWVrZGF5LWl0ZW0ge1xuICBmb250LXNpemU6IDEuNWVtO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5kaXYud2Vla2RheS1oZWFkZXIgZGl2LndlZWtkYXktaXRlbS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAxMjgsIDU4LCAwLjcpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLndlZWtkYXktaGVhZGVyIC53ZWVrZGF5LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlY2lwZS1ib2R5IHtcbiAgcGFkZGluZzogNTBweCAwcHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/diet-plan/diet-plan.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/diet-plan/diet-plan.component.ts ***!
  \*************************************************************/
/*! exports provided: DietPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPlanComponent", function() { return DietPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_checkout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/checkout.service */ "./src/app/checkout.service.ts");




var DietPlanComponent = /** @class */ (function () {
    function DietPlanComponent(service, router) {
        this.service = service;
        this.router = router;
        this.weekOptions = ['1', '2', '3', '4', '5'];
        this.weekdayOptions = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
        this.weekOneDays = ['1', '2', '3', '4', '5', '6', '7'];
        this.weekTwoDays = ['8', '9', '10', '11', '12', '13', '14'];
        this.weekThreeDays = ['15', '16', '17', '18', '19', '20', '21'];
        this.weekFourDays = ['22', '23', '24', '25', '26', '27', '28'];
        this.weekFiveDays = ['28', '30', '31'];
        this.selectedWeek = this.weekOptions[0];
        this.selectedWeekday = this.weekOneDays[0];
        this.selectedDayData = [];
    }
    DietPlanComponent.prototype.ngOnInit = function () {
        this.dietplan = this.service.getDietPlan();
        if (this.dietplan) {
            this.selectedDayData = this.dietplan.data.filter(function (data) { return data.day === 1; });
            console.log(":: selected diet Plan", this.selectedDayData);
        }
        else {
            this.router.navigate(['login']);
        }
    };
    DietPlanComponent.prototype.weekNext = function () {
        var _this = this;
        var index = this.weekOptions.findIndex(function (week) { return week === _this.selectedWeek; });
        this.selectedWeek = this.weekOptions[index + 1];
        this.getSelectedWeekOptions(this.selectedWeek);
        this.getSelectedDayData(parseInt(this.selectedWeekday));
    };
    DietPlanComponent.prototype.weekPrev = function () {
        var _this = this;
        var index = this.weekOptions.findIndex(function (week) { return week === _this.selectedWeek; });
        this.selectedWeek = this.weekOptions[index - 1];
        this.getSelectedWeekOptions(this.selectedWeek);
        this.getSelectedDayData(parseInt(this.selectedWeekday));
    };
    DietPlanComponent.prototype.weekdaySelected = function (day) {
        this.selectedWeekday = day;
        var dayTrimmed = day.split(' ')[1] ? parseInt(day.split(' ')[1]) : parseInt(day);
        this.getSelectedDayData(dayTrimmed);
    };
    DietPlanComponent.prototype.getSelectedWeekOptions = function (week) {
        switch (week) {
            case '1':
                this.selectedWeekday = this.weekOneDays[0];
                break;
            case '2':
                this.selectedWeekday = this.weekTwoDays[0];
                break;
            case '3':
                this.selectedWeekday = this.weekThreeDays[0];
                break;
            case '4':
                this.selectedWeekday = this.weekFourDays[0];
                break;
            case '5': this.selectedWeekday = this.weekFiveDays[0];
            default:
                '';
                break;
        }
    };
    DietPlanComponent.prototype.getSelectedDayData = function (day) {
        console.log(":: day is", day);
        this.selectedDayData = this.dietplan.data.filter(function (data) { return data.day === day; });
        console.log(":: selectedDay Data", this.selectedDayData);
    };
    DietPlanComponent.ctorParameters = function () { return [
        { type: src_app_checkout_service__WEBPACK_IMPORTED_MODULE_3__["CheckoutService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DietPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diet-plan',
            template: __webpack_require__(/*! raw-loader!./diet-plan.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/diet-plan/diet-plan.component.html"),
            styles: [__webpack_require__(/*! ./diet-plan.component.css */ "./src/app/components/diet-plan/diet-plan.component.css")]
        })
    ], DietPlanComponent);
    return DietPlanComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer .social-ul img{\n  width: 32px;\n}\n\n.social-ul{\n  max-width: 300px;\n  margin-top: 20px;\n}\n\nfooter .social-ul ul{\n  list-style-type: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  margin: 0px;\n  padding: 0px;\n}\n\nfooter .social-ul li{\n  display: inline-block;\n}\n\n.copy{\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\nfooter section.container {\n  padding-top: 50px;\n  padding-bottom: 30px;\n}\n\n.company-col{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.newsletter-col{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.newsletter-col h4{\n  font-size: 2em;\n}\n\n.newsletter-input-div{\n  margin-top: 10px;\n  width: 100%;\n}\n\n.newsletter-input-div input{\n  border: 1px solid #8eb132;\n  border-radius: 10px 0px 0px 10px;\n  box-sizing: border-box;\n  padding: 10px 20px;\n}\n\n.newsletter-input-div button{\n  padding: 10px 20px;\n  border: 0px;\n  background-color: #8eb132;\n  color: white;\n  box-sizing: border-box;\n  border: 1px solid #8eb132;\n  border-radius: 0px 10px 10px 0px ;\n}\n\n.corner-footer{\n  position: absolute;\n  right: 0px;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  margin-top: -100px;\n  z-index: -1;\n}\n\n.logo{\n  width: 300px;\n}\n\n.input-news{\n  width: 175px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsOEJBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIgLnNvY2lhbC11bCBpbWd7XG4gIHdpZHRoOiAzMnB4O1xufVxuXG4uc29jaWFsLXVse1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5mb290ZXIgLnNvY2lhbC11bCB1bHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuZm9vdGVyIC5zb2NpYWwtdWwgbGl7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvcHl7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuZm9vdGVyIHNlY3Rpb24uY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uY29tcGFueS1jb2x7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi5uZXdzbGV0dGVyLWNvbHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uZXdzbGV0dGVyLWNvbCBoNHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5uZXdzbGV0dGVyLWlucHV0LWRpdntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXdzbGV0dGVyLWlucHV0LWRpdiBpbnB1dHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhlYjEzMjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLm5ld3NsZXR0ZXItaW5wdXQtZGl2IGJ1dHRvbntcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhlYjEzMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGViMTMyO1xuICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweCA7XG59XG5cbi5jb3JuZXItZm9vdGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5sb2dve1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5pbnB1dC1uZXdze1xuICB3aWR0aDogMTc1cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #header{\n  background-image: url('../../../assets/header-image.jpg');\n  background-size: cover;\n  background-position-x: right;\n  background-position-y: center;\n} */\n\n.header-image img{\n  height: 500px;\n}\n\n.header-text{\n  padding-top: 150px;\n  min-width: 400px;\n}\n\n.header-image{\n  text-align: center;\n}\n\n#header-content p{\n  max-width: 500px;\n}\n\n#header-content h2{\n  font-size: 3em;\n}\n\n.green-text{\n  color: #8eb132;\n}\n\n.orange-text{\n  color: #F1803A;\n}\n\n#header{\n  background-color: #eaeae8;\n}\n\n@media only screen and (max-width: 465px){\n  .header-image img{\n    max-height: 341px;\n  }\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogI2hlYWRlcntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaGVhZGVyLWltYWdlLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbn0gKi9cblxuLmhlYWRlci1pbWFnZSBpbWd7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5oZWFkZXItdGV4dHtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICBtaW4td2lkdGg6IDQwMHB4O1xufVxuXG4uaGVhZGVyLWltYWdle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuI2hlYWRlci1jb250ZW50IHB7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG4jaGVhZGVyLWNvbnRlbnQgaDJ7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4uZ3JlZW4tdGV4dHtcbiAgY29sb3I6ICM4ZWIxMzI7XG59XG5cbi5vcmFuZ2UtdGV4dHtcbiAgY29sb3I6ICNGMTgwM0E7XG59XG5cbiNoZWFkZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZTg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY1cHgpe1xuICAuaGVhZGVyLWltYWdlIGltZ3tcbiAgICBtYXgtaGVpZ2h0OiAzNDFweDtcbiAgfVxufVxuXG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/meal/meal.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/meal/meal.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".meal-image {\n  background-image: url('drink.jpg');\n  background-position: center;\n  background-size: cover;\n  border-radius: 10px;\n  padding: 0px;\n  background-repeat: no-repeat;\n}\n\n.example-card{\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 10px;\n  margin: 5px auto;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZWFsL21lYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrRDtFQUNsRCwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lYWwvbWVhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lYWwtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvZHJpbmsuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5leGFtcGxlLWNhcmR7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/meal/meal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/meal/meal.component.ts ***!
  \***************************************************/
/*! exports provided: MealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealComponent", function() { return MealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MealComponent = /** @class */ (function () {
    function MealComponent() {
    }
    MealComponent.prototype.ngOnInit = function () {
        console.log(":: data", this.data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MealComponent.prototype, "data", void 0);
    MealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meal',
            template: __webpack_require__(/*! raw-loader!./meal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/meal/meal.component.html"),
            styles: [__webpack_require__(/*! ./meal.component.css */ "./src/app/components/meal/meal.component.css")]
        })
    ], MealComponent);
    return MealComponent;
}());



/***/ }),

/***/ "./src/app/components/meals-list/meals-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/meals-list/meals-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVhbHMtbGlzdC9tZWFscy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/meals-list/meals-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/meals-list/meals-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MealsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsListComponent", function() { return MealsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipe/recipe.component */ "./src/app/components/recipe/recipe.component.ts");




var MealsListComponent = /** @class */ (function () {
    function MealsListComponent(dialog) {
        this.dialog = dialog;
        this.meals = [1, 2, 3, 4, 5, 6, 7];
    }
    MealsListComponent.prototype.ngOnInit = function () {
        console.log(":: selectedData", this.selectedDayData);
    };
    MealsListComponent.prototype.openDialog = function (data) {
        this.dialog.open(_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_3__["RecipeComponent"], { data: data });
    };
    MealsListComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MealsListComponent.prototype, "selectedDayData", void 0);
    MealsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meals-list',
            template: __webpack_require__(/*! raw-loader!./meals-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/meals-list/meals-list.component.html"),
            styles: [__webpack_require__(/*! ./meals-list.component.css */ "./src/app/components/meals-list/meals-list.component.css")]
        })
    ], MealsListComponent);
    return MealsListComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#corner {\n  position: absolute;\n  left: 0;\n  top: 30px;\n  z-index: 0;\n}\n\n#logo {\n  z-index: 10;\n  background-image: url('corner.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  height: 220px;\n  width: 538px;\n}\n\n#logo img {\n  width: 325.8px;\n  height: 90.9px;\n  padding-left: 10px;\n  padding-top: 10px;\n}\n\n#navbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100px;\n  padding-right: 20px;\n  z-index: 1000;\n}\n\nnav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nnav a {\n  color: black;\n}\n\nnav a:hover {\n  cursor: pointer;\n}\n\nnav ul {\n  list-style-type: none;\n  margin: 0px;\n}\n\nnav li {\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.nav-ham {\n  height: 30px;\n  display: none;\n}\n\n@media only screen and (max-width: 800px) {\n  #logo {\n    height: 130px;\n    width: 250px;\n  }\n  #logo img {\n    width: 161px;\n    height: 51.8px;\n    padding-left: 5px;\n    padding-top: 5px;\n  }\n\n}\n\n@media only screen and (max-width: 1100px) {\n  #nav-ul {\n    display: none;\n  }\n  .nav-ham{\n    display: block;\n  }\n}\n\n.menu-absolute{\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  z-index: 1000000;\n  padding: 0px;\n  display: none;\n}\n\n.menu-absolute img{\n  height: 30px;\n  position: absolute;\n  top: 30px;\n  right: 30px;\n}\n\n.menu-absolute ul li a {\n  color: black;\n  font-size: 20px;\n}\n\n#nav-ul-ham{\n  display: block;\n  color: black;\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100%;\n  text-align: center !important;\n  /* margin-top: 50px; */\n    width: 100vw !important;\n    padding: 0px !important;\n    list-style-type: none !important;\n\n}\n\n#nav-ul-ham li{\n  height: 15vh;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUNBQW1EO0VBQ25ELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztBQUVGOztBQUlBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLCtCQUF3QjtFQUF4Qix3QkFBd0I7RUFDeEIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHNCQUFzQjtJQUNwQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdDQUFnQzs7QUFFcEM7O0FBRUE7RUFDRSxZQUFZOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29ybmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDMwcHg7XG4gIHotaW5kZXg6IDA7XG59XG5cbiNsb2dvIHtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jb3JuZXIuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjIwcHg7XG4gIHdpZHRoOiA1MzhweDtcbn1cblxuI2xvZ28gaW1nIHtcbiAgd2lkdGg6IDMyNS44cHg7XG4gIGhlaWdodDogOTAuOXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4jbmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm5hdiBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5uYXYgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubmF2IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDBweDtcbn1cbm5hdiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ubmF2LWhhbSB7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICNsb2dvIHtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICAjbG9nbyBpbWcge1xuICAgIHdpZHRoOiAxNjFweDtcbiAgICBoZWlnaHQ6IDUxLjhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG5cbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICNuYXYtdWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm5hdi1oYW17XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLm1lbnUtYWJzb2x1dGV7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDAwMDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUtYWJzb2x1dGUgaW1ne1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogMzBweDtcbn1cblxuLm1lbnUtYWJzb2x1dGUgdWwgbGkgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jbmF2LXVsLWhhbXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLyogbWFyZ2luLXRvcDogNTBweDsgKi9cbiAgICB3aWR0aDogMTAwdncgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmUgIWltcG9ydGFudDtcblxufVxuXG4jbmF2LXVsLWhhbSBsaXtcbiAgaGVpZ2h0OiAxNXZoO1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        // this.menu.nativeElement.style.display = "none";
    };
    NavbarComponent.prototype.handleNavHam = function () {
        console.log("menu opened");
        this.menu.nativeElement.style.display = "block";
    };
    NavbarComponent.prototype.handleClose = function () {
        this.menu.nativeElement.style.display = "none";
    };
    NavbarComponent.prototype.itemClicked = function () {
        this.menu.nativeElement.style.display = "none";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("menu", { static: false })
    ], NavbarComponent.prototype, "menu", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe-modal/recipe-modal.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/recipe-modal/recipe-modal.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlLW1vZGFsL3JlY2lwZS1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/recipe-modal/recipe-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/recipe-modal/recipe-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: RecipeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeModalComponent", function() { return RecipeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeModalComponent = /** @class */ (function () {
    function RecipeModalComponent() {
    }
    RecipeModalComponent.prototype.ngOnInit = function () {
    };
    RecipeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-modal',
            template: __webpack_require__(/*! raw-loader!./recipe-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/recipe-modal/recipe-modal.component.html"),
            styles: [__webpack_require__(/*! ./recipe-modal.component.css */ "./src/app/components/recipe-modal/recipe-modal.component.css")]
        })
    ], RecipeModalComponent);
    return RecipeModalComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe/recipe.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#recipe-section{\n    max-width: 600px;\n    min-width: 70vw;\n    max-height: 500px;\n    \n}\n\n.recipe-container{\n    padding: 0px;\n    margin: 0 auto;\n    text-align: center;\n}\n\n.left {\n    text-align: left;\n}\n\n.main-tab-ing {\n    margin: 10px;\n}\n\n.recipe-image{\n    background-image: url('1.jpeg');\n    background-position: center;\n    background-size: cover;\n    display: -webkit-box;\n    display: flex;\n    padding: 0px;\n    height: 300px;\n}\n\n.overlay{\n    -webkit-box-align: center;\n            align-items: center;\n    width: 100%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: absolute;\n    bottom: 0px;\n    background-color: rgba(0, 0, 0,0.5);\n    color: white;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.nutrition-buttons{\n    background-color: transparent;\n    border: 1px solid white;\n    color: white;\n    margin-left: 3px;\n    margin-right: 3px;\n    margin: 2px 3px;\n}\n\n.container{\n    padding: 0px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBb0Q7SUFDcEQsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixvQkFBYTtJQUFiLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjaXBlL3JlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlY2lwZS1zZWN0aW9ue1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWluLXdpZHRoOiA3MHZ3O1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIFxufVxuXG4ucmVjaXBlLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tYWluLXRhYi1pbmcge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLnJlY2lwZS1pbWFnZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3JlY2lwZS8xLmpwZWcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cbi5vdmVybGF5e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLDAuNSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubnV0cml0aW9uLWJ1dHRvbnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgbWFyZ2luOiAycHggM3B4O1xufVxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/recipe/recipe.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.ts ***!
  \*******************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.totalCarbs = 0;
        this.totalProtein = 0;
        this.totalCal = 0;
        this.totalFat = 0;
        this.recipeData = this.data.meal.data;
        console.log(":: recipe data", this.data.meal.name);
        this.mealName = this.data.meal.name;
    }
    RecipeComponent.prototype.ngOnInit = function () {
        console.log(":: recipe data", this.recipeData);
        this.getNutrients(this.recipeData);
    };
    RecipeComponent.prototype.getNutrients = function (recipeArray) {
        var _this = this;
        this.totalProtein = 0;
        this.totalCal = 0;
        this.totalFat = 0;
        this.totalCarbs = 0;
        recipeArray.forEach(function (recipe) {
            console.log(":: recipe", recipe);
            _this.totalCarbs += recipe.recipe.carbs ? parseFloat(recipe.recipe.carbs) : 0;
            _this.totalCal += recipe.recipe.cal ? parseFloat(recipe.recipe.cal) : 0;
            _this.totalProtein += recipe.recipe.protein ? parseFloat(recipe.recipe.protein) : 0;
            _this.totalFat += recipe.recipe.fat ? parseFloat(recipe.recipe.fat) : 0;
        });
        console.log(":: carbs", this.totalCarbs);
        console.log(":: protein", this.totalProtein);
        console.log(":: fat", this.totalFat);
        console.log(":: cal", this.totalCal);
    };
    RecipeComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    RecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! raw-loader!./recipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.css */ "./src/app/components/recipe/recipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/slide/foodpreference/foodpreference.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/slide/foodpreference/foodpreference.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#foodpref-section{\n    text-align: center;\n    /* background-image: url(../../../../assets/peronslized-slide-5/background-image-5.jpg);\n    background-position: center;\n    background-size: cover; */\n    color: black;\n    text-align: center;   \n}\n\n\n\n.checked{\n    background-color: white;\n    color: black;\n}\n\n\n\nimg{\n    height: 50px;\n    width: 50px;\n}\n\n\n\ninput{\n    display: none;\n}\n\n\n\n.pref-image{\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n\n\nimg{\n    cursor: pointer;\n}\n\n\n\n.bottom-container{\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    z-index: 100;\n    margin: 0px;\n    padding: 0px;\n}\n\n\n\n.bottom-row{\n    width: 100%;\n    margin: 0px;\n    padding: 0px;\n}\n\n\n\n.next{\n    background-color: #F1803A;\n    color: white;\n    width: 100%;\n    border: 0px;\n    height: 50px;\n    margin: 0px;\n    padding: 0px;\n    font-size: 20px;\n}\n\n\n\n.back{\n    background-color: gray;\n    color: white;\n    width: 100%;\n    border: 0px;\n    height: 50px;\n    margin: 0px;\n    padding: 0px;\n    font-size: 20px;\n    max-width: 500px;\n}\n\n\n\n.bottom-col{\n    padding: 0px;\n    margin: 0px;\n}\n\n\n\n@media only screen and (min-width:769px){\n    .bottom-container{\n      position:inherit;\n      background-color: transparent;\n      margin-top: 200px;\n      margin-left: 0px;\n      margin-right: 0px;\n    }\n    .block-button{\n        margin-top: 50px;\n    }\n    .bottom-row{\n        width: 100%;\n        \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZS9mb29kcHJlZmVyZW5jZS9mb29kcHJlZmVyZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCOzs2QkFFeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7OztBQUlBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7Ozs7QUFFQTtJQUNJLGFBQWE7QUFDakI7Ozs7QUFJQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7Ozs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7Ozs7QUFFQTtJQUNJO01BQ0UsZ0JBQWdCO01BQ2hCLDZCQUE2QjtNQUM3QixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXOztJQUVmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NsaWRlL2Zvb2RwcmVmZXJlbmNlL2Zvb2RwcmVmZXJlbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vZHByZWYtc2VjdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9wZXJvbnNsaXplZC1zbGlkZS01L2JhY2tncm91bmQtaW1hZ2UtNS5qcGcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXG59XG5cblxuXG4uY2hlY2tlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmltZ3tcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbmlucHV0e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuXG4ucHJlZi1pbWFnZXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmltZ3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib3R0b20tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmJvdHRvbS1yb3d7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ubmV4dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjE4MDNBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJhY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmJvdHRvbS1jb2x7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpe1xuICAgIC5ib3R0b20tY29udGFpbmVye1xuICAgICAgcG9zaXRpb246aW5oZXJpdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIC5ibG9jay1idXR0b257XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIC5ib3R0b20tcm93e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/slide/foodpreference/foodpreference.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/slide/foodpreference/foodpreference.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FoodpreferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpreferenceComponent", function() { return FoodpreferenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");



var FoodpreferenceComponent = /** @class */ (function () {
    function FoodpreferenceComponent(service) {
        this.service = service;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
    }
    FoodpreferenceComponent.prototype.ngOnInit = function () {
        if (this.service.slideData.food_pref == "veg") {
            this.foodpref = this.service.slideData.food_pref;
            this.veg = true;
            this.nonveg = false;
            this.egg = false;
        }
        if (this.service.slideData.food_pref == "non_veg") {
            this.foodpref = this.service.slideData.food_pref;
            this.veg = false;
            this.nonveg = true;
            this.egg = false;
        }
        if (this.service.slideData.food_pref == "egg") {
            this.foodpref = this.service.slideData.food_pref;
            this.veg = false;
            this.nonveg = false;
            this.egg = true;
        }
        this.warning = false;
    };
    FoodpreferenceComponent.prototype.handleveg = function () {
        var _this = this;
        console.log(":: veg clicked");
        this.foodpref = "veg";
        this.veg = true;
        this.nonveg = false;
        this.egg = false;
        this.service.updateFoodPref(this.foodpref);
        //updating slide
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    FoodpreferenceComponent.prototype.handlenonveg = function () {
        var _this = this;
        console.log(":: nonveg clicked");
        this.foodpref = "non_veg";
        this.veg = false;
        this.nonveg = true;
        this.egg = false;
        this.service.updateFoodPref(this.foodpref);
        //updating slide
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    FoodpreferenceComponent.prototype.handleegg = function () {
        var _this = this;
        console.log(":: egg clicked");
        this.foodpref = "egg";
        this.veg = false;
        this.nonveg = false;
        this.egg = true;
        this.service.updateFoodPref(this.foodpref);
        //updating slide
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    FoodpreferenceComponent.prototype.handlePrev = function () {
        //updating property in service
        this.service.updateFoodPref(this.foodpref);
        //updating slide
        this.prev.emit();
    };
    FoodpreferenceComponent.ctorParameters = function () { return [
        { type: src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_2__["CustomSlideService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FoodpreferenceComponent.prototype, "next", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FoodpreferenceComponent.prototype, "prev", void 0);
    FoodpreferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foodpreference',
            template: __webpack_require__(/*! raw-loader!./foodpreference.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slide/foodpreference/foodpreference.component.html"),
            styles: [__webpack_require__(/*! ./foodpreference.component.css */ "./src/app/components/slide/foodpreference/foodpreference.component.css")]
        })
    ], FoodpreferenceComponent);
    return FoodpreferenceComponent;
}());



/***/ }),

/***/ "./src/app/components/slide/goal/goal.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/slide/goal/goal.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block-button{\n    background-color: transparent;\n    color: gray;\n    outline: none;\n    border: 1px solid gray;\n    cursor: pointer;\n    width: 90%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-top: 5px;\n    max-width: 500px;\n}\n\n#goal-section{\n    color: black;\n    text-align: center;   \n}\n\n.overlay{\n    \n}\n\n.checked{\n    background-color: transparent;\n    color: #F1803A;\n    border: 1px solid #F1803A;\n}\n\nimg{\n    height: 50px;\n    cursor: pointer;\n}\n\ninput{\n    display: none;\n}\n\n@media only screen and (max-width:500px){\n    .block-button{\n        margin-left: 15px;\n        margin-right: 15px;\n        margin-top: 10px;\n    }\n}\n\n.bottom-container{\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    z-index: 100;\n    padding: 0px;\n}\n\n.bottom-row{\n    width: 100vw;\n    margin: 0px;\n}\n\n.back{\n    width: 100%;\n    color: white;\n    background-color: gray;\n    height: 50px;\n    max-width: 500px;\n    border: 0px;\n    font-size: 20px;\n}\n\n.bottom-col{\n    padding: 0px;\n}\n\n@media only screen and (min-width:769px){\n    .bottom-container{\n      position:inherit;\n      background-color: transparent;\n      margin-top: 200px;\n      margin-left: 0px;\n      margin-right: 0px;\n    }\n    .block-button{\n        margin-top: 50px;\n    }\n    .bottom-row{\n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZS9nb2FsL2dvYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7TUFDRSxnQkFBZ0I7TUFDaEIsNkJBQTZCO01BQzdCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZS9nb2FsL2dvYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9jay1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4jZ29hbC1zZWN0aW9ue1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXG59XG5cbi5vdmVybGF5e1xuICAgIFxufVxuXG4uY2hlY2tlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI0YxODAzQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjE4MDNBO1xufVxuXG5pbWd7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXR7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KXtcbiAgICAuYmxvY2stYnV0dG9ue1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuLmJvdHRvbS1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uYm90dG9tLXJvd3tcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5iYWNre1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJvdHRvbS1jb2x7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpe1xuICAgIC5ib3R0b20tY29udGFpbmVye1xuICAgICAgcG9zaXRpb246aW5oZXJpdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIC5ibG9jay1idXR0b257XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIC5ib3R0b20tcm93e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/slide/goal/goal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/slide/goal/goal.component.ts ***!
  \*********************************************************/
/*! exports provided: GoalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalComponent", function() { return GoalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");



var GoalComponent = /** @class */ (function () {
    function GoalComponent(service) {
        this.service = service;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
    }
    GoalComponent.prototype.ngOnInit = function () {
        // initailsing the values in service
        this.goal = this.service.slideData.goal;
    };
    GoalComponent.prototype.handleweightgain = function () {
        var _this = this;
        console.log(":: weight gain selected");
        this.goal = "weight_gain";
        this.service.updateGoal(this.goal);
        // changing slide
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    GoalComponent.prototype.handleweightloss = function () {
        var _this = this;
        this.goal = "weight_loss";
        this.service.updateGoal(this.goal);
        // changing slide
        setTimeout(function () {
            _this.next.emit();
        }, 500);
    };
    GoalComponent.prototype.handlemusclebuilding = function () {
        var _this = this;
        this.goal = "muscle_building";
        this.service.updateGoal(this.goal);
        // changing slide
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    GoalComponent.prototype.handlePrev = function () {
        //updating property in service
        this.service.updateGoal(this.goal);
        //changing slide
        this.prev.emit();
    };
    GoalComponent.ctorParameters = function () { return [
        { type: src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_2__["CustomSlideService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoalComponent.prototype, "next", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], GoalComponent.prototype, "prev", void 0);
    GoalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goal',
            template: __webpack_require__(/*! raw-loader!./goal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slide/goal/goal.component.html"),
            styles: [__webpack_require__(/*! ./goal.component.css */ "./src/app/components/slide/goal/goal.component.css")]
        })
    ], GoalComponent);
    return GoalComponent;
}());



/***/ }),

/***/ "./src/app/components/slide/male-female/male-female.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/slide/male-female/male-female.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    height: 100px;\n    width: 100px;\n    cursor: pointer;\n}\n\n#male-female{\n    text-align  : center;\n    /* background-image: url(../../../../assets/personalized-slide-1/background-image.jpg); */\n    background-position: center;\n    background-size: cover;\n    color: black;\n}\n\nh3{\n    padding-top: 10px;\n}\n\ninput{\n    display: none;\n}\n\n.overlay{\n    min-height: 500px;\n}\n\n.navigate-button{\n    height: 50px;\n}\n\n.warning{\n    color: red;\n    font-weight: 600;\n    font-size: larger;\n}\n\n.bottom-container {\n   margin-top: 50px;\n   width: 100%;\n}\n\n@media only screen and (max-width:500px){\n    /* .image-div{\n        margin-left: 20px;\n        margin-right: 20px;\n    } */\n}\n\n.navigate-div{\n    padding: 0px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZS9tYWxlLWZlbWFsZS9tYWxlLWZlbWFsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlGQUF5RjtJQUN6RiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBSUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFJQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0dBQ0csZ0JBQWdCO0dBQ2hCLFdBQVc7QUFDZDs7QUFFQTtJQUNJOzs7T0FHRztBQUNQOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGUvbWFsZS1mZW1hbGUvbWFsZS1mZW1hbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtYWxlLWZlbWFsZXtcbiAgICB0ZXh0LWFsaWduICA6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BlcnNvbmFsaXplZC1zbGlkZS0xL2JhY2tncm91bmQtaW1hZ2UuanBnKTsgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmgze1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5cblxuaW5wdXR7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm92ZXJsYXl7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG59XG5cbi5uYXZpZ2F0ZS1idXR0b257XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG5cblxuLndhcm5pbmd7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uYm90dG9tLWNvbnRhaW5lciB7XG4gICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDBweCl7XG4gICAgLyogLmltYWdlLWRpdntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9ICovXG59XG5cbi5uYXZpZ2F0ZS1kaXZ7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/slide/male-female/male-female.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/slide/male-female/male-female.component.ts ***!
  \***********************************************************************/
/*! exports provided: MaleFemaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaleFemaleComponent", function() { return MaleFemaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_slide_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");



var MaleFemaleComponent = /** @class */ (function () {
    function MaleFemaleComponent(service) {
        this.service = service;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MaleFemaleComponent.prototype.ngOnInit = function () {
        if (this.service.slideData && this.service.slideData.gender == 'male') {
            this.gender = "male";
            this.male = true;
            this.female = false;
        }
        if (this.service.slideData && this.service.slideData.gender == "female") {
            this.gender = "female";
            this.male = false;
            this.female = true;
        }
        this.warning = false;
    };
    MaleFemaleComponent.prototype.handlemaleclick = function () {
        var _this = this;
        console.log(":: male clicked");
        this.gender = "male";
        this.male = true;
        this.female = false;
        //moving the slider & updating the vals in service
        this.service.updateGender(this.gender);
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    MaleFemaleComponent.prototype.handlefemaleclick = function () {
        var _this = this;
        console.log(":: female clicked");
        this.gender = "female";
        this.male = false;
        this.female = true;
        //moving the slider & updating the vals in service
        this.service.updateGender(this.gender);
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    MaleFemaleComponent.ctorParameters = function () { return [
        { type: _custom_slide_service_service__WEBPACK_IMPORTED_MODULE_2__["CustomSlideService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MaleFemaleComponent.prototype, "next", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MaleFemaleComponent.prototype, "prev", void 0);
    MaleFemaleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-male-female',
            template: __webpack_require__(/*! raw-loader!./male-female.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slide/male-female/male-female.component.html"),
            styles: [__webpack_require__(/*! ./male-female.component.css */ "./src/app/components/slide/male-female/male-female.component.css")]
        })
    ], MaleFemaleComponent);
    return MaleFemaleComponent;
}());



/***/ }),

/***/ "./src/app/components/slide/personalized-measurements/personalized-measurements.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/slide/personalized-measurements/personalized-measurements.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#measurements-section{\n    color: black;\n    text-align: center;\n    /* background-image: url(../../../../assets/personlaized-slide-2/background-image-1.jpg); */\n    background-size: cover;\n    background-position: center;\n    position: relative;\n    height: 100vh;\n  }\n\n.overlay{\n    /* background-color:rgba(0, 0, 0, 0.5 ); */\n    /* padding-top: 50px; */\n    height: 100vh;\n}\n\n@media screen and (max-width:500px){\n  .overlay{\n    min-height: 650px;\n  }\n}\n\nh3{\n    padding: 5px;\n}\n\nimg{\n    height: 50px;\n}\n\ninput{\n  color: black;\n  border: 0px;\n  border-bottom: 2px solid black;\n  padding: 15px 10px;\n  background-color: transparent;\n  margin-left: 10px;\n  width: 90% !important;\n  margin-right: 20px;\n}\n\ninput::-webkit-input-placeholder{\n    color: black;\n  }\n\ninput::-moz-placeholder{\n    color: black;\n  }\n\ninput::-ms-input-placeholder{\n    color: black;\n  }\n\ninput::placeholder{\n    color: black;\n  }\n\ninput:focus{\n    border-bottom: 2px solid black;\n    outline: none;\n  }\n\nselect {\n    background-color: rgba(0,0,0,0);\n    color: black;\n    border: 0px;\n    border-bottom: 2px solid black;\n    padding: 15px 10px;\n    outline: none;\n    margin-left: 10px;\n  }\n\n.dropdown-content {\n    max-height: 100px !important;\n  }\n\n@media only screen and (min-width:330px){\n    select{\n      margin-top: 4vh;\n    }\n    input{\n      margin-top: 4vh;\n      display: inline-block;\n      width: 120px !important;\n    }\n  }\n\noption{\n    color: black;\n    padding: 5px 10px;\n  }\n\n.warning{\n    color: red;\n  }\n\n@media only screen and (max-width:768px){\n    select{\n      display: block;\n      width: 90%;\n    }\n  }\n\n.bottom-container{\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    background-color: white;\n    z-index: 1000;\n    margin: 0px;\n    padding: 0px;\n  }\n\n.back{\n    width: 100%;\n    background-color:gray ;\n    color: white;\n    height: 50px;\n    border: 0px;\n  }\n\n.next{\n    width: 100%;\n    background-color: #F1803A;\n    color: white;\n    border: 0px;\n    height: 50px;\n  }\n\n.bottom-col{\n    padding: 0px;\n  }\n\n.bottom-row{\n    margin: 0px;\n    padding: 0px;\n  }\n\n@media only screen and (min-width:769px){\n    .bottom-container{\n      position:inherit;\n      background-color: transparent;\n      margin-top: 200px;\n      margin-left: 0px;\n      margin-right: 0px;\n    }\n    .back{\n      max-width: 500px;\n      font-size: 20px;\n    }\n    .next{\n      max-width: 500px;\n      font-size: 20px;\n    }\n    .bottom-row{\n      width: 100%;\n      margin: 0px;\n    }\n  }\n\n.input-div{\n    display: inline-block;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZS9wZXJzb25hbGl6ZWQtbWVhc3VyZW1lbnRzL3BlcnNvbmFsaXplZC1tZWFzdXJlbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkZBQTJGO0lBQzNGLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7QUFFRjtJQUNJLDBDQUEwQztJQUMxQyx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUU7SUFDRSxZQUFZO0VBQ2Q7O0FBRkE7SUFDRSxZQUFZO0VBQ2Q7O0FBRkE7SUFDRSxZQUFZO0VBQ2Q7O0FBRkE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSw4QkFBOEI7SUFDOUIsYUFBYTtFQUNmOztBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztBQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxlQUFlO01BQ2YscUJBQXFCO01BQ3JCLHVCQUF1QjtJQUN6QjtFQUNGOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7QUFHQTtJQUNFLFVBQVU7RUFDWjs7QUFHQTtJQUNFO01BQ0UsY0FBYztNQUNkLFVBQVU7SUFDWjtFQUNGOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUVBO0lBQ0U7TUFDRSxnQkFBZ0I7TUFDaEIsNkJBQTZCO01BQzdCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsZUFBZTtJQUNqQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGVBQWU7SUFDakI7SUFDQTtNQUNFLFdBQVc7TUFDWCxXQUFXO0lBQ2I7RUFDRjs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGUvcGVyc29uYWxpemVkLW1lYXN1cmVtZW50cy9wZXJzb25hbGl6ZWQtbWVhc3VyZW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVhc3VyZW1lbnRzLXNlY3Rpb257XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BlcnNvbmxhaXplZC1zbGlkZS0yL2JhY2tncm91bmQtaW1hZ2UtMS5qcGcpOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbi5vdmVybGF5e1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUgKTsgKi9cbiAgICAvKiBwYWRkaW5nLXRvcDogNTBweDsgKi9cbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KXtcbiAgLm92ZXJsYXl7XG4gICAgbWluLWhlaWdodDogNjUwcHg7XG4gIH1cbn1cblxuaDN7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5pbWd7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG5pbnB1dHtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbiAgaW5wdXQ6OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGlucHV0OmZvY3Vze1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAuZHJvcGRvd24tY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMzBweCl7XG4gICAgc2VsZWN0e1xuICAgICAgbWFyZ2luLXRvcDogNHZoO1xuICAgIH1cbiAgICBpbnB1dHtcbiAgICAgIG1hcmdpbi10b3A6IDR2aDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIG9wdGlvbntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gIH1cblxuXG4gIC53YXJuaW5ne1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgc2VsZWN0e1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgfVxuXG4gIC5ib3R0b20tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuYmFja3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXkgO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gIH1cblxuICAubmV4dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjE4MDNBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICAuYm90dG9tLWNvbHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuYm90dG9tLXJvd3tcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpe1xuICAgIC5ib3R0b20tY29udGFpbmVye1xuICAgICAgcG9zaXRpb246aW5oZXJpdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIC5iYWNre1xuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLm5leHR7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuYm90dG9tLXJvd3tcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLmlucHV0LWRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/slide/personalized-measurements/personalized-measurements.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/slide/personalized-measurements/personalized-measurements.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PersonalizedMeasurementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizedMeasurementsComponent", function() { return PersonalizedMeasurementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");




var PersonalizedMeasurementsComponent = /** @class */ (function () {
    function PersonalizedMeasurementsComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.ageArr = [];
        this.measurementform = this.fb.group({
            'age': [this.service.slideData.age || "age", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'heightft': ["heightft", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'heightinch': ["heightin", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'weight': [this.service.slideData.weight || "", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    PersonalizedMeasurementsComponent.prototype.ngOnInit = function () {
        if (this.service.slideData.height) {
            console.log(":: height ft", this.previousHeightIn);
            this.previousHeightFt = this.service.slideData.height.split('ft')[0];
            this.measurementform.controls['heightft'].setValue(this.previousHeightFt);
            this.previousHeightIn = this.service.slideData.height.split('ft')[1].split('inch')[0].trim();
            this.measurementform.controls['heightinch'].setValue(this.previousHeightIn);
        }
        this.warning = false;
        this.generateAgeArr();
    };
    PersonalizedMeasurementsComponent.prototype.generateAgeArr = function () {
        for (var i = 18; i <= 60; i++) {
            this.ageArr.push(i);
        }
        this.ageArr.push("60+");
    };
    PersonalizedMeasurementsComponent.prototype.handleNext = function () {
        console.log("::measurement form");
        if (this.measurementform.controls.age.value !== "age" && this.measurementform.controls.heightft.value !== "heightft" && this.measurementform.controls.heightinch.value !== "heightin" && this.measurementform.controls.weight.value !== "") {
            console.log(":: entered in if");
            // adding form value to variables
            var age = this.measurementform.controls.age.value;
            console.log(":: age is", age);
            var heightFt = this.measurementform.controls.heightft.value;
            console.log(":: ft is", heightFt);
            var heightinch = this.measurementform.controls.heightinch.value;
            console.log(":: inch is", heightinch);
            var weight = this.measurementform.controls.weight.value;
            console.log(":: weight is", weight);
            console.log(":: vales captured");
            var height = heightFt + "ft " + heightinch + "inch";
            //calling service fxn to upadte pproperties in service
            this.service.updateMeasurement(age, height, weight);
            this.next.emit();
        }
        else {
            console.log(":: entered in else");
            this.warning = true;
        }
    };
    PersonalizedMeasurementsComponent.prototype.handlePrev = function () {
        // adding form value to variables
        // let age = this.measurementform.controls.age.value;
        // console.log(":: age is", age);
        // let heightFt = this.measurementform.controls.heightft.value;
        // console.log(":: ft is", heightFt);
        // let heightinch = this.measurementform.controls.heightinch.value;
        // console.log(":: inch is", heightinch);
        // let weight = this.measurementform.controls.weight.value;
        // console.log(":: weight is", weight);
        // let profession = this.measurementform.controls.profession.value;
        // console.log(":: profession is", profession);
        // console.log(":: vales captured");
        // //calling service fxn to upadte pproperties in service
        // this.service.updateMeasurement(age,heightFt,heightinch,weight,profession);
        this.prev.emit();
    };
    PersonalizedMeasurementsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomSlideService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PersonalizedMeasurementsComponent.prototype, "next", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PersonalizedMeasurementsComponent.prototype, "prev", void 0);
    PersonalizedMeasurementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personalized-measurements',
            template: __webpack_require__(/*! raw-loader!./personalized-measurements.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slide/personalized-measurements/personalized-measurements.component.html"),
            styles: [__webpack_require__(/*! ./personalized-measurements.component.css */ "./src/app/components/slide/personalized-measurements/personalized-measurements.component.css")]
        })
    ], PersonalizedMeasurementsComponent);
    return PersonalizedMeasurementsComponent;
}());



/***/ }),

/***/ "./src/app/components/slide/physical-active/physical-active.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/slide/physical-active/physical-active.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#physical-active-section{\n    text-align: center;\n    color: black;\n}\n\n.transparent-button{\n    width: 200px;\n    margin-top: 10px;\n    outline: none;\n    background-color: transparent;\n    color: gray;\n    border: 1px solid gray;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    width: 80vw;\n}\n\n.checked{\n    background-color: transparent;\n    color: #F1803A;\n    border: 1px solid #F1803A;\n}\n\nselect {\n    background-color: rgba(0,0,0,0);\n    color: white;\n    border: 0px;\n    border-bottom: 2px solid white;\n    padding: 5px 10px;\n    margin-left: 20px;\n    margin-top: 20px;\n    outline: none;\n  }\n\noption{\n    color: black;\n    padding: 5px 10px;\n  }\n\ninput{\n    color: white;\n    background-color: rgba(0,0,0,0);\n    border: 0px;\n    border-bottom: 2px solid #d2d2d2;\n    padding: 5px 10px;\n    margin-left: 20px;\n  }\n\ninput::-webkit-input-placeholder{\n    color: #d2d2d2;\n  }\n\ninput::-moz-placeholder{\n    color: #d2d2d2;\n  }\n\ninput::-ms-input-placeholder{\n    color: #d2d2d2;\n  }\n\ninput::placeholder{\n    color: #d2d2d2;\n  }\n\ninput:focus{\n    border-bottom: 3px solid white;\n    outline: none;\n  }\n\nimg{\n    height: 50px;\n    cursor: pointer;\n  }\n\n.hidden{\n    display: none;\n  }\n\n.warning{\n    color: red;\n    font-weight: 600;\n  }\n\n@media only screen and (min-width:769px){\n    .bottom-container{\n      position:inherit !important;\n      background-color: transparent !important;\n      margin-top: 20px;\n      margin-left: 0px;\n      margin-right: 0px;\n    }\n    .back{\n      max-width: 500px;\n      font-size: 20px;\n    }\n    .next{\n      max-width: 500px;\n      font-size: 20px;\n    }\n    .bottom-row{\n      width: 100% !important;\n    }\n  }\n\n.bottom-container{\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    background-color: transparent;\n    z-index: 1000;\n    padding: 0px;\n    margin: 0px;\n  }\n\n.back{\n    width: 100%;\n    background-color:gray ;\n    color: white;\n    height: 50px;\n    border: 0px;\n    margin-top: 20px;\n  }\n\n.next{\n    width: 100%;\n    background-color: #F1803A;\n    color: white;\n    border: 0px;\n    height: 50px;\n  }\n\n.bottom-col{\n    padding: 0px;\n  }\n\n.bottom-row{\n    width: 100% ;\n    padding: 0px;\n    margin: 0px;\n  }\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZS9waHlzaWNhbC1hY3RpdmUvcGh5c2ljYWwtYWN0aXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFGQTtJQUNFLGNBQWM7RUFDaEI7O0FBRkE7SUFDRSxjQUFjO0VBQ2hCOztBQUZBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLDhCQUE4QjtJQUM5QixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRTtNQUNFLDJCQUEyQjtNQUMzQix3Q0FBd0M7TUFDeEMsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsZUFBZTtJQUNqQjtJQUNBO01BQ0Usc0JBQXNCO0lBQ3hCO0VBQ0Y7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGUvcGh5c2ljYWwtYWN0aXZlL3BoeXNpY2FsLWFjdGl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BoeXNpY2FsLWFjdGl2ZS1zZWN0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi50cmFuc3BhcmVudC1idXR0b257XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmctdG9wOiA3cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICB3aWR0aDogODB2dztcbn1cblxuLmNoZWNrZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNGMTgwM0E7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YxODAzQTtcbn1cblxuc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgb3B0aW9ue1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgfVxuXG4gIGlucHV0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJkMmQyO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgaW5wdXQ6OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOiAjZDJkMmQyO1xuICB9XG5cbiAgaW5wdXQ6Zm9jdXN7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICBpbWd7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5oaWRkZW57XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC53YXJuaW5ne1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7XG4gICAgLmJvdHRvbS1jb250YWluZXJ7XG4gICAgICBwb3NpdGlvbjppbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICB9XG4gICAgLmJhY2t7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAubmV4dHtcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5ib3R0b20tcm93e1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuYm90dG9tLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLmJhY2t7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmF5IDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAubmV4dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjE4MDNBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICAuYm90dG9tLWNvbHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuYm90dG9tLXJvd3tcbiAgICB3aWR0aDogMTAwJSA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/slide/physical-active/physical-active.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/slide/physical-active/physical-active.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PhysicalActiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicalActiveComponent", function() { return PhysicalActiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");




var PhysicalActiveComponent = /** @class */ (function () {
    function PhysicalActiveComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.noactivity = false;
        this.oftenWalk = false;
        this.oneTwoTimes = false;
        this.threeFiveTimes = false;
        this.fiveSevenTimes = false;
    }
    PhysicalActiveComponent.prototype.ngOnInit = function () {
        if (this.service.slideData.physical_activity == "noactivity") {
            this.noactivity = true;
        }
        if (this.service.slideData.physical_activity == "oftenWalk") {
            this.oftenWalk = true;
        }
        if (this.service.slideData.physical_activity == "1-2 times") {
            this.oneTwoTimes = true;
        }
        if (this.service.slideData.physical_activity == "3-5 times") {
            this.threeFiveTimes = true;
        }
        if (this.service.slideData.physical_activity == "5-7 times") {
            this.fiveSevenTimes = true;
        }
    };
    PhysicalActiveComponent.prototype.handlenoactivity = function () {
        var _this = this;
        this.service.updatePhysicalActive("noactivity");
        this.noactivity = true;
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    PhysicalActiveComponent.prototype.handleoften = function () {
        var _this = this;
        this.service.updatePhysicalActive("oftenWalk");
        this.oftenWalk = true;
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    PhysicalActiveComponent.prototype.handleonetwo = function () {
        var _this = this;
        this.service.updatePhysicalActive("1-2 times");
        this.oneTwoTimes = true;
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    PhysicalActiveComponent.prototype.handlethreefive = function () {
        var _this = this;
        this.service.updatePhysicalActive("3-5 times");
        this.threeFiveTimes = true;
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    PhysicalActiveComponent.prototype.handlefiveseven = function () {
        var _this = this;
        this.service.updatePhysicalActive("5-7 times");
        this.fiveSevenTimes = true;
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    PhysicalActiveComponent.prototype.handlePrev = function () {
        //updating slide
        this.prev.emit();
    };
    PhysicalActiveComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomSlideService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PhysicalActiveComponent.prototype, "next", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PhysicalActiveComponent.prototype, "prev", void 0);
    PhysicalActiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-physical-active',
            template: __webpack_require__(/*! raw-loader!./physical-active.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slide/physical-active/physical-active.component.html"),
            styles: [__webpack_require__(/*! ./physical-active.component.css */ "./src/app/components/slide/physical-active/physical-active.component.css")]
        })
    ], PhysicalActiveComponent);
    return PhysicalActiveComponent;
}());



/***/ }),

/***/ "./src/app/components/slide/true/true.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/slide/true/true.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#physical-active-section{\n    text-align: center;\n    color: black;\n}\n\n.transparent-button{\n    width: 200px;\n    margin-top: 10px;\n    outline: none;\n    background-color: transparent;\n    color: gray;\n    border: 1px solid gray;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    width: 80vw;\n}\n\n.checked{\n    background-color: transparent;\n    color: #F1803A;\n    border: 1px solid #F1803A;\n}\n\nselect {\n    background-color: rgba(0,0,0,0);\n    color: white;\n    border: 0px;\n    border-bottom: 2px solid white;\n    padding: 5px 10px;\n    margin-left: 20px;\n    margin-top: 20px;\n    outline: none;\n  }\n\noption{\n    color: black;\n    padding: 5px 10px;\n  }\n\ninput{\n    color: white;\n    background-color: rgba(0,0,0,0);\n    border: 0px;\n    border-bottom: 2px solid #d2d2d2;\n    padding: 5px 10px;\n    margin-left: 20px;\n  }\n\ninput::-webkit-input-placeholder{\n    color: #d2d2d2;\n  }\n\ninput::-moz-placeholder{\n    color: #d2d2d2;\n  }\n\ninput::-ms-input-placeholder{\n    color: #d2d2d2;\n  }\n\ninput::placeholder{\n    color: #d2d2d2;\n  }\n\ninput:focus{\n    border-bottom: 3px solid white;\n    outline: none;\n  }\n\nimg{\n    height: 50px;\n    cursor: pointer;\n  }\n\n.hidden{\n    display: none;\n  }\n\n.warning{\n    color: red;\n    font-weight: 600;\n  }\n\n@media only screen and (min-width:769px){\n    .bottom-container{\n      position:inherit !important;\n      background-color: transparent !important;\n      margin-top: 20px;\n      margin-left: 0px;\n      margin-right: 0px;\n    }\n    .back{\n      max-width: 500px;\n      font-size: 20px;\n    }\n    .next{\n      max-width: 500px;\n      font-size: 20px;\n    }\n    .bottom-row{\n      width: 100% !important;\n    }\n  }\n\n.bottom-container{\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    background-color: transparent;\n    z-index: 1000;\n    margin: 0px;\n    padding: 0px;\n  }\n\n.back{\n    width: 100%;\n    background-color:gray ;\n    color: white;\n    height: 50px;\n    border: 0px;\n    margin-top: 20px;\n  }\n\n.next{\n    width: 100%;\n    background-color: #F1803A;\n    color: white;\n    border: 0px;\n    height: 50px;\n    margin-top: 20px;\n  }\n\n.bottom-col{\n    padding: 0px;\n  }\n\n.bottom-row{\n    width: 100% ;\n    padding: 0px;\n    margin: 0px;\n  }\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZS90cnVlL3RydWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUZBO0lBQ0UsY0FBYztFQUNoQjs7QUFGQTtJQUNFLGNBQWM7RUFDaEI7O0FBRkE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsOEJBQThCO0lBQzlCLGFBQWE7RUFDZjs7QUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFO01BQ0UsMkJBQTJCO01BQzNCLHdDQUF3QztNQUN4QyxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGVBQWU7SUFDakI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxzQkFBc0I7SUFDeEI7RUFDRjs7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGUvdHJ1ZS90cnVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGh5c2ljYWwtYWN0aXZlLXNlY3Rpb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnRyYW5zcGFyZW50LWJ1dHRvbntcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgIHdpZHRoOiA4MHZ3O1xufVxuXG4uY2hlY2tlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI0YxODAzQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjE4MDNBO1xufVxuXG5zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICBvcHRpb257XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICB9XG5cbiAgaW5wdXR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmQyZDI7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICBpbnB1dDo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6ICNkMmQyZDI7XG4gIH1cblxuICBpbnB1dDpmb2N1c3tcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIGltZ3tcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmhpZGRlbntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLndhcm5pbmd7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXtcbiAgICAuYm90dG9tLWNvbnRhaW5lcntcbiAgICAgIHBvc2l0aW9uOmluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cbiAgICAuYmFja3tcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5uZXh0e1xuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmJvdHRvbS1yb3d7XG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5ib3R0b20tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuYmFja3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXkgO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5uZXh0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMTgwM0E7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLmJvdHRvbS1jb2x7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgLmJvdHRvbS1yb3d7XG4gICAgd2lkdGg6IDEwMCUgO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/slide/true/true.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/slide/true/true.component.ts ***!
  \*********************************************************/
/*! exports provided: TrueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrueComponent", function() { return TrueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_checkout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/checkout.service */ "./src/app/checkout.service.ts");






var TrueComponent = /** @class */ (function () {
    function TrueComponent(fb, service, router, CheckoutService) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.CheckoutService = CheckoutService;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.sleep = false;
        this.eatlate = false;
        this.salt = false;
        this.sweets = false;
        this.none = false;
    }
    TrueComponent.prototype.ngOnInit = function () {
    };
    TrueComponent.prototype.handleSleep = function () {
        this.none = false;
        this.sleep = !this.sleep;
    };
    TrueComponent.prototype.handleEatLate = function () {
        this.none = false;
        this.eatlate = !this.eatlate;
    };
    TrueComponent.prototype.handleSalt = function () {
        this.none = false;
        this.salt = !this.salt;
    };
    TrueComponent.prototype.handleSweets = function () {
        this.none = false;
        this.sweets = !this.sweets;
    };
    TrueComponent.prototype.handleNone = function () {
        this.none = !this.none;
        if (this.none == true) {
            this.sleep = false;
            this.eatlate = false;
            this.salt = false;
            this.sweets = false;
        }
    };
    TrueComponent.prototype.handlePrev = function () {
        this.prev.emit();
    };
    TrueComponent.prototype.handleNext = function () {
        var _this = this;
        var trueStatement = [];
        if (this.sleep) {
            trueStatement.push("I do not get Enough Sleep");
        }
        if (this.salt) {
            trueStatement.push("I consume a lot of salt");
        }
        if (this.sweets) {
            trueStatement.push("I cannot give up eating sweets");
        }
        if (this.eatlate) {
            trueStatement.push("I eat late at Night");
        }
        if (this.none) {
            trueStatement.push("None of the above");
        }
        //checking the length of the array
        if (trueStatement.length >= 1) {
            this.service.updateTrue(trueStatement);
            this.CheckoutService.getPersonalizedDietPrice().subscribe(function (amount) {
                console.log(":: pricing for plan", amount);
                var actualAmount = 100 * amount;
                _this.CheckoutService.setPricing(actualAmount);
                _this.router.navigate(['profile-summary']);
            });
        }
        else {
            this.warning = true;
        }
    };
    TrueComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomSlideService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_checkout_service__WEBPACK_IMPORTED_MODULE_5__["CheckoutService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TrueComponent.prototype, "next", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TrueComponent.prototype, "prev", void 0);
    TrueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-true',
            template: __webpack_require__(/*! raw-loader!./true.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slide/true/true.component.html"),
            styles: [__webpack_require__(/*! ./true.component.css */ "./src/app/components/slide/true/true.component.css")]
        })
    ], TrueComponent);
    return TrueComponent;
}());



/***/ }),

/***/ "./src/app/components/slide/typical-day/typical-day.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/slide/typical-day/typical-day.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#physical-active-section{\n    text-align: center;\n    color: black;\n}\n\n.transparent-button{\n    width: 200px;\n    margin-top: 10px;\n    outline: none;\n    background-color: transparent;\n    color: gray;\n    border: 1px solid gray;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    width: 80vw;\n}\n\n.checked{\n    background-color: transparent;\n    color: #F1803A;\n    border: 1px solid #F1803A;\n}\n\nselect {\n    background-color: rgba(0,0,0,0);\n    color: white;\n    border: 0px;\n    border-bottom: 2px solid white;\n    padding: 5px 10px;\n    margin-left: 20px;\n    margin-top: 20px;\n    outline: none;\n  }\n\noption{\n    color: black;\n    padding: 5px 10px;\n  }\n\ninput{\n    color: white;\n    background-color: rgba(0,0,0,0);\n    border: 0px;\n    border-bottom: 2px solid #d2d2d2;\n    padding: 5px 10px;\n    margin-left: 20px;\n  }\n\ninput::-webkit-input-placeholder{\n    color: #d2d2d2;\n  }\n\ninput::-moz-placeholder{\n    color: #d2d2d2;\n  }\n\ninput::-ms-input-placeholder{\n    color: #d2d2d2;\n  }\n\ninput::placeholder{\n    color: #d2d2d2;\n  }\n\ninput:focus{\n    border-bottom: 3px solid white;\n    outline: none;\n  }\n\nimg{\n    height: 50px;\n    cursor: pointer;\n  }\n\n.hidden{\n    display: none;\n  }\n\n.warning{\n    color: red;\n    font-weight: 600;\n  }\n\n@media only screen and (min-width:769px){\n    .bottom-container{\n      position:inherit !important;\n      background-color: transparent !important;\n      margin-top: 20px;\n      margin-left: 0px;\n      margin-right: 0px;\n    }\n    .back{\n      max-width: 500px;\n      font-size: 20px;\n      margin-top: 20px;\n    }\n    .next{\n      max-width: 500px;\n      font-size: 20px;\n    }\n    .bottom-row{\n      width: 95vw !important;\n    }\n  }\n\n.bottom-container{\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    background-color: transparent;\n    z-index: 1000;\n    margin: 0px;\n    padding: 0px;\n  }\n\n.back{\n    width: 100%;\n    background-color:gray ;\n    color: white;\n    height: 50px;\n    border: 0px;\n  }\n\n.next{\n    width: 100%;\n    background-color: #F1803A;\n    color: white;\n    border: 0px;\n    height: 50px;\n  }\n\n.bottom-col{\n    padding: 0px;\n  }\n\n.bottom-row{\n    width: 100% !important;\n    padding: 0px;\n    margin: 0px;\n  }\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZS90eXBpY2FsLWRheS90eXBpY2FsLWRheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7QUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRkE7SUFDRSxjQUFjO0VBQ2hCOztBQUZBO0lBQ0UsY0FBYztFQUNoQjs7QUFGQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSw4QkFBOEI7SUFDOUIsYUFBYTtFQUNmOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0U7TUFDRSwyQkFBMkI7TUFDM0Isd0NBQXdDO01BQ3hDLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGVBQWU7SUFDakI7SUFDQTtNQUNFLHNCQUFzQjtJQUN4QjtFQUNGOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGUvdHlwaWNhbC1kYXkvdHlwaWNhbC1kYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaHlzaWNhbC1hY3RpdmUtc2VjdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4udHJhbnNwYXJlbnQtYnV0dG9ue1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgd2lkdGg6IDgwdnc7XG59XG5cbi5jaGVja2Vke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjRjE4MDNBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMTgwM0E7XG59XG5cbnNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIG9wdGlvbntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gIH1cblxuICBpbnB1dHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyZDJkMjtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIGlucHV0OjpwbGFjZWhvbGRlcntcbiAgICBjb2xvcjogI2QyZDJkMjtcbiAgfVxuXG4gIGlucHV0OmZvY3Vze1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgaW1ne1xuICAgIGhlaWdodDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAud2FybmluZ3tcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpe1xuICAgIC5ib3R0b20tY29udGFpbmVye1xuICAgICAgcG9zaXRpb246aW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIC5iYWNre1xuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICAgIC5uZXh0e1xuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmJvdHRvbS1yb3d7XG4gICAgICB3aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5ib3R0b20tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuYmFja3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyYXkgO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gIH1cblxuICAubmV4dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjE4MDNBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICAuYm90dG9tLWNvbHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuYm90dG9tLXJvd3tcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/slide/typical-day/typical-day.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/slide/typical-day/typical-day.component.ts ***!
  \***********************************************************************/
/*! exports provided: TypicalDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypicalDayComponent", function() { return TypicalDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");




var TypicalDayComponent = /** @class */ (function () {
    function TypicalDayComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.atoffice = false;
        this.gooutregular = false;
        this.onfoot = false;
        this.labour = false;
        this.athome = false;
    }
    TypicalDayComponent.prototype.ngOnInit = function () {
        if (this.service.slideData.typical_day == "atoffice") {
            this.atoffice = true;
        }
        if (this.service.slideData.typical_day == "gooutregular") {
            this.gooutregular = true;
        }
        if (this.service.slideData.typical_day == "onfoot") {
            this.onfoot = true;
        }
        if (this.service.slideData.typical_day == "labour") {
            this.labour = true;
        }
        if (this.service.slideData.typical_day == "athome") {
            this.athome = true;
        }
    };
    TypicalDayComponent.prototype.handleAtOffice = function () {
        var _this = this;
        this.service.updateTypicalDay("atoffice");
        this.atoffice = true;
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    TypicalDayComponent.prototype.handleGoOutRegular = function () {
        var _this = this;
        this.service.updateTypicalDay("gooutregular");
        this.gooutregular = true;
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    TypicalDayComponent.prototype.handleOnFoot = function () {
        var _this = this;
        this.service.updateTypicalDay("onfoot");
        this.onfoot = true;
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    TypicalDayComponent.prototype.handleLabour = function () {
        var _this = this;
        this.service.updateTypicalDay("labour");
        this.labour = true;
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    TypicalDayComponent.prototype.handleAtHome = function () {
        var _this = this;
        this.athome = true;
        this.service.updateTypicalDay("athome");
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    TypicalDayComponent.prototype.handlePrev = function () {
        //updating slide
        this.prev.emit();
    };
    TypicalDayComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomSlideService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TypicalDayComponent.prototype, "next", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TypicalDayComponent.prototype, "prev", void 0);
    TypicalDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typical-day',
            template: __webpack_require__(/*! raw-loader!./typical-day.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slide/typical-day/typical-day.component.html"),
            styles: [__webpack_require__(/*! ./typical-day.component.css */ "./src/app/components/slide/typical-day/typical-day.component.css")]
        })
    ], TypicalDayComponent);
    return TypicalDayComponent;
}());



/***/ }),

/***/ "./src/app/components/slide/water-intake/water-intake.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/slide/water-intake/water-intake.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#foodpref-section{\n    text-align: center;\n    /* background-image: url(../../../../assets/peronslized-slide-9/bakcground-image-water-intake.jpg);\n    background-position: top;\n    background-size: cover; */\n    color: black;\n    text-align: center;   \n}\n\nimg{\n    height: 30x;\n    width: 30px;\n}\n\n.overlay{\n    text-align: center;\n}\n\n.image-div{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\nbutton{\n    display: block;\n    outline: none;\n}\n\n.transparent-button{\n    margin-top: 10px;\n    outline: none;\n    background-color: transparent;\n    color: gray;\n    border: 1px solid gray;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    width: 90vw;\n    margin-right: 0px !important;\n}\n\n.form{\n    text-align: center;\n}\n\n.checked{\n    background-color: transparent;\n    color: #F1803A;\n    border: 1px solid #F1803A;\n}\n\n.submitbutton{\n    display: inline-block;\n}\n\n.prev-button{\n    cursor: pointer;\n}\n\ninput{\n    display: none;\n}\n\n@media only screen and (min-width:769px){\n    .bottom-container{\n      position:inherit !important;\n      background-color: transparent !important;\n      margin-top: 120px;\n      margin-left: 0px;\n      margin-right: 0px;\n    }\n    .back{\n      max-width: 500px;\n      font-size: 20px;\n    }\n    .next{\n      max-width: 500px;\n      font-size: 20px;\n    }\n    .transparent-button{\n        width: 70vw;\n    }\n    .bottom-row{\n      width: 95vw !important;\n    }\n  }\n\n.bottom-container{\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    z-index: 1000;\n    margin: 0px !important;\n    padding: 0px !important;\n  }\n\n.back{\n    width: 100%;\n    background-color:gray ;\n    color: white;\n    height: 50px;\n    border: 0px;\n    margin-top: 20px;\n  }\n\n.next{\n    width: 100%;\n    background-color: #F1803A;\n    color: white;\n    border: 0px;\n    height: 50px;\n  }\n\n.bottom-col{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 0px;\n  }\n\n.bottom-row{\n    width: 100%  !important;\n    padding: 0px !important;\n    text-align: center;\n    margin: 0px !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZS93YXRlci1pbnRha2Uvd2F0ZXItaW50YWtlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEI7OzZCQUV5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBSUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBSUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO01BQ0UsMkJBQTJCO01BQzNCLHdDQUF3QztNQUN4QyxpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGVBQWU7SUFDakI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixlQUFlO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtNQUNFLHNCQUFzQjtJQUN4QjtFQUNGOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGUvd2F0ZXItaW50YWtlL3dhdGVyLWludGFrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb2RwcmVmLXNlY3Rpb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGVyb25zbGl6ZWQtc2xpZGUtOS9iYWtjZ3JvdW5kLWltYWdlLXdhdGVyLWludGFrZS5qcGcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXG59XG5cbmltZ3tcbiAgICBoZWlnaHQ6IDMweDtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuLm92ZXJsYXl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuXG5idXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRyYW5zcGFyZW50LWJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvcm17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hlY2tlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI0YxODAzQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjE4MDNBO1xufVxuXG5cblxuLnN1Ym1pdGJ1dHRvbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wcmV2LWJ1dHRvbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7XG4gICAgLmJvdHRvbS1jb250YWluZXJ7XG4gICAgICBwb3NpdGlvbjppbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIC5iYWNre1xuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLm5leHR7XG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAudHJhbnNwYXJlbnQtYnV0dG9ue1xuICAgICAgICB3aWR0aDogNzB2dztcbiAgICB9XG4gICAgLmJvdHRvbS1yb3d7XG4gICAgICB3aWR0aDogOTV2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5ib3R0b20tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJhY2t7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmF5IDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAubmV4dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjE4MDNBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cblxuICAuYm90dG9tLWNvbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC5ib3R0b20tcm93e1xuICAgIHdpZHRoOiAxMDAlICAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/slide/water-intake/water-intake.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/slide/water-intake/water-intake.component.ts ***!
  \*************************************************************************/
/*! exports provided: WaterIntakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterIntakeComponent", function() { return WaterIntakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");



var WaterIntakeComponent = /** @class */ (function () {
    function WaterIntakeComponent(service) {
        this.service = service;
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
    }
    WaterIntakeComponent.prototype.ngOnInit = function () {
        if (this.service.slideData.water_intake == "onelitre") {
            this.onelitre = true;
        }
        if (this.service.slideData.water_intake == "twolitre") {
            this.twolitre = true;
        }
        if (this.service.slideData.water_intake == "morethanthreelitre") {
            this.morethanthreelitre = true;
        }
    };
    WaterIntakeComponent.prototype.handleonelitre = function () {
        var _this = this;
        this.onelitre = true;
        this.water = "onelitre";
        this.service.updateWaterIntake(this.water);
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    WaterIntakeComponent.prototype.handleoneandhalflitre = function () {
        this.water = "onepointfivelitre";
        this.service.updateWaterIntake(this.water);
        this.next.emit();
    };
    WaterIntakeComponent.prototype.handletwolitre = function () {
        var _this = this;
        this.twolitre = true;
        this.water = "twolitre";
        this.service.updateWaterIntake(this.water);
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    WaterIntakeComponent.prototype.handlethreelitre = function () {
        this.water = "threelitre";
        this.service.updateWaterIntake(this.water);
        this.next.emit();
    };
    WaterIntakeComponent.prototype.handlemorethanthreelitre = function () {
        var _this = this;
        this.morethanthreelitre = true;
        this.water = "morethanthreelitre";
        this.service.updateWaterIntake(this.water);
        setTimeout(function () {
            _this.next.emit();
            console.log(":: emitted from child");
        }, 500);
    };
    WaterIntakeComponent.prototype.handlePrev = function () {
        this.prev.emit();
    };
    WaterIntakeComponent.ctorParameters = function () { return [
        { type: src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_2__["CustomSlideService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], WaterIntakeComponent.prototype, "next", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], WaterIntakeComponent.prototype, "prev", void 0);
    WaterIntakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-water-intake',
            template: __webpack_require__(/*! raw-loader!./water-intake.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slide/water-intake/water-intake.component.html"),
            styles: [__webpack_require__(/*! ./water-intake.component.css */ "./src/app/components/slide/water-intake/water-intake.component.css")]
        })
    ], WaterIntakeComponent);
    return WaterIntakeComponent;
}());



/***/ }),

/***/ "./src/app/custom-slide-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/custom-slide-service.service.ts ***!
  \*************************************************/
/*! exports provided: CustomSlideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSlideService", function() { return CustomSlideService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomSlideService = /** @class */ (function () {
    function CustomSlideService() {
        this.slideData = {
            gender: undefined,
            name: '',
            email: '',
            age: undefined,
            height: undefined,
            weight: undefined,
            physical_activity: undefined,
            goal: undefined,
            food_pref: undefined,
            water_intake: undefined,
            typical_day: undefined,
            true_statements: undefined,
            rzp_order_id: '',
            contact: ''
        };
    }
    CustomSlideService.prototype.updateGender = function (gender) {
        this.slideData.gender = gender;
    };
    CustomSlideService.prototype.resetData = function () {
        this.slideData = {
            gender: undefined,
            name: '',
            email: '',
            age: undefined,
            height: undefined,
            weight: undefined,
            physical_activity: undefined,
            goal: undefined,
            food_pref: undefined,
            water_intake: undefined,
            typical_day: undefined,
            true_statements: undefined,
            rzp_order_id: '',
            contact: ''
        };
    };
    CustomSlideService.prototype.updateMeasurement = function (age, height, weight) {
        this.slideData.age = age;
        this.slideData.height = height;
        this.slideData.weight = weight;
    };
    CustomSlideService.prototype.updatePhysicalActive = function (physicalActive) {
        this.slideData.physical_activity = physicalActive;
    };
    CustomSlideService.prototype.updateGoal = function (goal) {
        this.slideData.goal = goal;
    };
    CustomSlideService.prototype.updateFoodPref = function (foodpref) {
        this.slideData.food_pref = foodpref;
    };
    CustomSlideService.prototype.updateWaterIntake = function (waterintake) {
        this.slideData.water_intake = waterintake;
    };
    CustomSlideService.prototype.updateTypicalDay = function (typicalDay) {
        this.slideData.typical_day = typicalDay;
    };
    CustomSlideService.prototype.updateTrue = function (truth) {
        this.slideData.true_statements = truth;
    };
    CustomSlideService.prototype.updateNameEmailContact = function (name, email, contact) {
        this.slideData.name = name;
        this.slideData.email = email;
        this.slideData.contact = contact;
    };
    CustomSlideService.prototype.allValuesPresent = function () {
        for (var key in this.slideData) {
            if (this.slideData[key] === undefined) {
                return false;
            }
        }
        return true;
    };
    CustomSlideService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CustomSlideService);
    return CustomSlideService;
}());



/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\n    display: block;\n}\n\n\n.payment-span{\n      text-align: center;\n  }\n\n\n.error {\n    color: red;\n}\n\n\n.button-container{\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    padding: 0px;\n    margin: 0px;\n    width: 100vw;\n    z-index: 1000;\n}\n\n\n.button-row{\n    margin: 0px;\n    padding: 0px;\n    width: 100vw;\n}\n\n\n.button-box{\n    padding: 0px;\n    margin: 0px;\n}\n\n\n.grey-button{\n      background-color: grey;\n      color: white;\n      height: 50px;\n      border: 0px;\n  }\n\n\n.button-container{\n    text-align: center;\n}\n\n\n.payment-container img{\n    height: 30px;\n    margin: 0 auto;\n    padding-left:10px;\n    height: 50px;\n    border: 0px;\n}\n\n\n.block-button{\n    width: 100%;\n    height: 50px;\n    border: 0px;\n}\n\n\n.checked{\n    border: 1px solid black;\n}\n\n\n@media only screen and (min-width: 800px){\n    .heading{\n        margin-top: 100px;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7OztBQUdBO01BQ00sa0JBQWtCO0VBQ3RCOzs7QUFFRjtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFFQTtNQUNNLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osWUFBWTtNQUNaLFdBQVc7RUFDZjs7O0FBRUY7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLnBheW1lbnQtc3BhbntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5idXR0b24tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG5cbi5idXR0b24tcm93e1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cbi5idXR0b24tYm94e1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmdyZXktYnV0dG9ue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlcjogMHB4O1xuICB9XG5cbi5idXR0b24tY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBheW1lbnQtY29udGFpbmVyIGltZ3tcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogMHB4O1xufVxuXG5cblxuLmJsb2NrLWJ1dHRvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbi5jaGVja2Vke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KXtcbiAgICAuaGVhZGluZ3tcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_checkout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/checkout.service */ "./src/app/checkout.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_window_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/window.service */ "./src/app/window.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(fb, slideService, router, checkoutService, windowService, route, CustomSlideService) {
        this.fb = fb;
        this.slideService = slideService;
        this.router = router;
        this.checkoutService = checkoutService;
        this.windowService = windowService;
        this.route = route;
        this.CustomSlideService = CustomSlideService;
        this.price = 0;
        this.success = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](false);
        this.checkoutform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        if (!this.CustomSlideService.allValuesPresent()) {
            this.router.navigateByUrl('/');
        }
        else if (this.checkoutService.getPricing()) {
            this.price = this.checkoutService.getPricing();
        }
    };
    CheckoutComponent.prototype.proceed = function () {
        var _this = this;
        // check for form filled
        var name = this.checkoutform.controls.name.value;
        var email = this.checkoutform.controls.email.value;
        var contact = this.checkoutform.controls.phone.value;
        if (!this.checkoutform.valid) {
            this.formError = true;
        }
        else {
            this.formError = false;
            this.CustomSlideService.updateNameEmailContact(name, email, contact);
            console.log(":: slide data", this.CustomSlideService.slideData);
            // prepare razorpay config
            var razorPayOptions_1 = {
                "key": "rzp_test_d8qs8mxXhWH9vS",
                "amount": this.price,
                "currency": _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].razorpay.currency,
                "name": _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].razorpay.name,
                "description": "Personalized Diet Plan",
                "order_id": "",
                "image": "https://picsum.photos/200",
                "theme": {
                    "color": _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].razorpay.color
                },
                "prefill": {
                    "name": this.checkoutform.get('name').value,
                    "email": this.checkoutform.get('email').value,
                    "contact": this.checkoutform.get('phone').value
                },
                "handler": function (res) {
                    console.log(':: first captur handler', res);
                }
            };
            // Overriding handler fxn
            razorPayOptions_1.handler = (function (response) {
                console.log(':: razorpay response after payment done', response);
                var rzp_order_id = _this.checkoutService.getOrderId();
                _this.checkoutService.capturePayment(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, response, { amount: _this.price, rzp_order_id: rzp_order_id })).subscribe(function (res) {
                    console.log(':: captured payment successfuly', res);
                    if (res.error_code == null) {
                        _this.windowService.window.location.href = "/login";
                    }
                    else {
                        _this.windowService.window.location.href = "/payment-failed";
                    }
                    // this.windowService.window.location.href="/payment-success";
                }, function (err) {
                    _this.router.navigate[('payment-failed')];
                    //this.windowService.window.location.href="/payment-failed";
                });
            });
            // placeOrder on Server
            console.log(':: proceed button clicked');
            var slideData = this.CustomSlideService.slideData;
            console.log(":: slide data checkout", slideData);
            this.checkoutService.placePersonalizedOrder(slideData).subscribe(function (order) {
                console.log(':: order from server ', order);
                _this.checkoutService.setOrderId(order.rzp_order_id);
                // here open razorpay dialog
                var orderId = order.id;
                razorPayOptions_1.order_id = orderId;
                var rzp = new _this.windowService.window.Razorpay(razorPayOptions_1);
                rzp.open();
            }, function (err) {
                _this.router.navigate[('payment-failed')];
            });
        }
    };
    CheckoutComponent.prototype.handleCancel = function () {
        this.router.navigateByUrl('/');
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomSlideService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_checkout_service__WEBPACK_IMPORTED_MODULE_5__["CheckoutService"] },
        { type: src_app_window_service__WEBPACK_IMPORTED_MODULE_7__["WindowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomSlideService"] }
    ]; };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/pages/checkout/checkout.component.css")]
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n    background-image: url('contact-us-header.jpg');\n    background-position-x:left;\n    background-position-y: top;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.header-content{\n    text-align: center;\n    padding-bottom: 250px;\n    padding-top: 50px;\n}\n\n.bullet-image{\n    display: inline-block;\n}\n\n.bullet-text{\n    display: inline-block;\n    padding-left: 10px;\n}\n\n.bullet-image img{\n    max-height: 20px !important;\n}\n\n.address img{\n    max-height: 40px;\n}\n\n.contact-form-section h3{\n    color: #73c620;\n    font-size: x-large;\n}\n\n.contact{\n    margin-left: 5px;\n}\n\n.contact-form-section h2{\n    font-size: x-large;\n}\n\n.contact-form-section{\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n.contact-form img{\n    max-height: 40px;\n}\n\n.contact-form textarea{\n    text-align: left;\n}\n\n.contact input {\n    display: block;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 80%;\n    margin-top: 20px;\n}\n\n.contact textarea{\n    width: 80%;\n    margin-top: 20px;\n    display: block;\n}\n\n.contact button{\n    padding-left: 50px;\n    padding-right: 50px;\n    border: none;\n    border-radius: 50px;\n    margin-top: 20px;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4Q0FBNEQ7SUFDNUQsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2NvbnRhY3QtdXMtaGVhZGVyLmpwZyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OmxlZnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiB0b3A7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uaGVhZGVyLWNvbnRlbnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNTBweDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmJ1bGxldC1pbWFnZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idWxsZXQtdGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uYnVsbGV0LWltYWdlIGltZ3tcbiAgICBtYXgtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRyZXNzIGltZ3tcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xufVxuXG4uY29udGFjdC1mb3JtLXNlY3Rpb24gaDN7XG4gICAgY29sb3I6ICM3M2M2MjA7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4uY29udGFjdHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY29udGFjdC1mb3JtLXNlY3Rpb24gaDJ7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4uY29udGFjdC1mb3JtLXNlY3Rpb257XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5jb250YWN0LWZvcm0gaW1ne1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG59XG5cbi5jb250YWN0LWZvcm0gdGV4dGFyZWF7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRhY3QgaW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRhY3QgdGV4dGFyZWF7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGFjdCBidXR0b257XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/pages/contact-us/contact-us.component.css")]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\n    display: block;\n}\n\n\n.payment-span{\n      text-align: center;\n  }\n\n\n.button-container{\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    padding: 0px;\n    margin: 0px;\n    width: 100vw;\n    z-index: 1000;\n}\n\n\n.error {\n    color: red;\n}\n\n\n.button-row{\n    margin: 0px;\n    padding: 0px;\n    width: 100vw;\n}\n\n\n.button-box{\n    padding: 0px;\n    margin: 0px;\n}\n\n\n.grey-button{\n      background-color: grey;\n      color: white;\n      height: 50px;\n      border: 0px;\n  }\n\n\n.button-container{\n    text-align: center;\n}\n\n\n.payment-container img{\n    height: 30px;\n    margin: 0 auto;\n    padding-left:10px;\n    height: 50px;\n    border: 0px;\n}\n\n\n.block-button{\n    width: 100%;\n    height: 50px;\n    border: 0px;\n}\n\n\n.checked{\n    border: 1px solid black;\n}\n\n\n@media only screen and (min-width: 800px){\n    .heading{\n        margin-top: 100px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7OztBQUdBO01BQ00sa0JBQWtCO0VBQ3RCOzs7QUFFRjtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFFQTtNQUNNLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osWUFBWTtNQUNaLFdBQVc7RUFDZjs7O0FBRUY7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLnBheW1lbnQtc3BhbntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4uYnV0dG9uLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uYnV0dG9uLXJvd3tcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uYnV0dG9uLWJveHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5ncmV5LWJ1dHRvbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXI6IDBweDtcbiAgfVxuXG4uYnV0dG9uLWNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYXltZW50LWNvbnRhaW5lciBpbWd7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IDBweDtcbn1cblxuXG5cbi5ibG9jay1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogMHB4O1xufVxuXG4uY2hlY2tlZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCl7XG4gICAgLmhlYWRpbmd7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_checkout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/checkout.service */ "./src/app/checkout.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, service) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.apiError = false;
    };
    LoginComponent.prototype.login = function (email) {
        var _this = this;
        console.log(":: login", email);
        if (this.loginForm.valid) {
            this.service.getDietPlanFromServer(email).subscribe(function (res) {
                if (res) {
                    _this.service.setDietPlan(res);
                    _this.router.navigateByUrl('/diet-plan');
                }
                else {
                    _this.apiError = true;
                }
            });
        }
    };
    LoginComponent.prototype.handleCancel = function () {
        console.log(":: cancel login");
        this.router.navigateByUrl('/');
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_checkout_service__WEBPACK_IMPORTED_MODULE_4__["CheckoutService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n#page-not-found h1{\n  text-align: center;\n}\n\n.header-content{\n  padding-top: 100px;\n  padding-bottom: 50px;\n}\n\nmain{\n  max-width: 500px;\n  max-height: 500px;\n  margin: 0 auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuI3BhZ2Utbm90LWZvdW5kIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItY29udGVudHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxubWFpbntcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.options = {
            path: '../../../assets/data.json',
        };
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.prototype.animationCreated = function (event) {
        console.log(':: event', event);
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pages/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/payment-failure/payment-failure.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/payment-failure/payment-failure.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-content{\n  padding-top: 100px;\n  padding-bottom: 50px;\n}\n\n.header-content h1 {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1mYWlsdXJlL3BheW1lbnQtZmFpbHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtZmFpbHVyZS9wYXltZW50LWZhaWx1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGVudHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmhlYWRlci1jb250ZW50IGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/payment-failure/payment-failure.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/payment-failure/payment-failure.component.ts ***!
  \********************************************************************/
/*! exports provided: PaymentFailureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFailureComponent", function() { return PaymentFailureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentFailureComponent = /** @class */ (function () {
    function PaymentFailureComponent() {
    }
    PaymentFailureComponent.prototype.ngOnInit = function () {
    };
    PaymentFailureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-failure',
            template: __webpack_require__(/*! raw-loader!./payment-failure.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment-failure/payment-failure.component.html"),
            styles: [__webpack_require__(/*! ./payment-failure.component.css */ "./src/app/pages/payment-failure/payment-failure.component.css")]
        })
    ], PaymentFailureComponent);
    return PaymentFailureComponent;
}());



/***/ }),

/***/ "./src/app/pages/payment-success/payment-success.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/payment-success/payment-success.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-content{\n  padding-top: 100px;\n  padding-bottom: 50px;\n}\n\n.header-content h1 {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1zdWNjZXNzL3BheW1lbnQtc3VjY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtc3VjY2Vzcy9wYXltZW50LXN1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGVudHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmhlYWRlci1jb250ZW50IGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/payment-success/payment-success.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/payment-success/payment-success.component.ts ***!
  \********************************************************************/
/*! exports provided: PaymentSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function() { return PaymentSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentSuccessComponent = /** @class */ (function () {
    function PaymentSuccessComponent() {
    }
    PaymentSuccessComponent.prototype.handleOkayClicked = function () {
        console.log(":: okay clicked");
    };
    PaymentSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-success',
            template: __webpack_require__(/*! raw-loader!./payment-success.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment-success/payment-success.component.html"),
            styles: [__webpack_require__(/*! ./payment-success.component.css */ "./src/app/pages/payment-success/payment-success.component.css")]
        })
    ], PaymentSuccessComponent);
    return PaymentSuccessComponent;
}());



/***/ }),

/***/ "./src/app/pages/personalized-diet/personalized-diet.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/personalized-diet/personalized-diet.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.all{\n    background-image: url('background.jpg');\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 100vh;\n    max-height: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyc29uYWxpemVkLWRpZXQvcGVyc29uYWxpemVkLWRpZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1Q0FBMkQ7SUFDM0QsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcnNvbmFsaXplZC1kaWV0L3BlcnNvbmFsaXplZC1kaWV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hbGx7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL25ldy9iYWNrZ3JvdW5kLmpwZyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/personalized-diet/personalized-diet.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/personalized-diet/personalized-diet.component.ts ***!
  \************************************************************************/
/*! exports provided: PersonalizedDietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalizedDietComponent", function() { return PersonalizedDietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_slide_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");



var PersonalizedDietComponent = /** @class */ (function () {
    function PersonalizedDietComponent(service) {
        this.service = service;
    }
    PersonalizedDietComponent.prototype.ngOnInit = function () {
        this.selectedSlide = 0;
        this.service.resetData();
    };
    PersonalizedDietComponent.prototype.handleNextInParent = function () {
        this.selectedSlide += 1;
    };
    PersonalizedDietComponent.prototype.handlePrevInParent = function () {
        this.selectedSlide -= 1;
    };
    PersonalizedDietComponent.ctorParameters = function () { return [
        { type: _custom_slide_service_service__WEBPACK_IMPORTED_MODULE_2__["CustomSlideService"] }
    ]; };
    PersonalizedDietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personalized-diet',
            template: __webpack_require__(/*! raw-loader!./personalized-diet.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/personalized-diet/personalized-diet.component.html"),
            styles: [__webpack_require__(/*! ./personalized-diet.component.css */ "./src/app/pages/personalized-diet/personalized-diet.component.css")]
        })
    ], PersonalizedDietComponent);
    return PersonalizedDietComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile-summary/profile-summary.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/profile-summary/profile-summary.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading-section{\n    text-align: center;\n    padding-top: 20px;\n}\n\nimg{\n    height: 50px;\n}\n\n#profile-section{\n    text-align: center;\n}\n\n.ideal-body-div{\n    background-image: url('image1.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100px;\n}\n\n.ideal-weight-kg{\n    color: green;\n}\n\n.water-intake{\n    margin: 20px;\n}\n\n.water-intake img{\n    height: 120px;\n    margin: 10px;\n}\n\n.payment-container{\n    text-align: center;\n}\n\n.ideal-body-weight{\n    background-color: rgba(0, 0, 0, 0.5);\n    height: 100%;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.ideal-body-weight h4{\n    color: white;\n}\n\n.bold{\n    font-weight: 700;\n}\n\n.purple{\n    color: orchid;\n}\n\n.profile-section{\n    text-align: center;\n}\n\n.heading-section h1{\n    padding-bottom: 30px;\n}\n\n.heading-section h5{\n    margin-top: 25px;\n}\n\n.comitted{\n    margin-bottom: 50px;\n}\n\n.metabolic-age img{\n    height: 100px;\n}\n\n.metabolic-age{\n    background-color: rgba(152,251,152, 0.1);\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.calorie-div{\n    background-color: rgba(255,192,203, 0.1);\n    padding-top: 20px;\n    padding-bottom: 20px;\n    height: 420px;\n}\n\n.kit h4{\n    padding-bottom: 10px;\n    padding-top: 10px;\n}\n\n.rupee-image img{\n    height: 200px;\n    padding: 0px !important;\n}\n\n.img-col{\n    padding: 5px !important;\n}\n\n.button-div{\n    padding-top: 10px;\n    padding: 0px !important;\n    align-self: center;\n}\n\n.button-div p{\n    padding-top: 10px;\n}\n\n.block-button{\n    width: 80%;\n    background-color: #ee5f36;\n    color: white;\n}\n\n.ngx-charts {\n    display: block;\n    float: none;\n}\n\n.bmi-guage{\n    width: 330px;\n    height: 350px;\n    margin: 0 auto;\n}\n\ndiv.bmi-guage tspan{\n    font-size: 3em;\n}\n\n.strike{\n    text-decoration: line-through;\n    color: darkgray;\n    margin-right: 20px;\n}\n\n.bottom-container{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    z-index: 1000;\n}\n\n.price-div{\n    width: 100%;\n    background-color: gray;\n    height: 50px;\n    padding-top: 15px;\n    color: white;\n}\n\n.button-div{\n    width: 100%;\n    height: 50px;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.block-button{\n    width: 100%;\n    border: 0px;\n    height: 50px;\n}\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1zdW1tYXJ5L3Byb2ZpbGUtc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBbUU7SUFDbkUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlLXN1bW1hcnkvcHJvZmlsZS1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZy1zZWN0aW9ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuaW1ne1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuI3Byb2ZpbGUtc2VjdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pZGVhbC1ib2R5LWRpdntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvcHJvZmlsZS1zdW1tYXJ5L2ltYWdlMS5qcGcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmlkZWFsLXdlaWdodC1rZ3tcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi53YXRlci1pbnRha2V7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4ud2F0ZXItaW50YWtlIGltZ3tcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLnBheW1lbnQtY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlkZWFsLWJvZHktd2VpZ2h0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5pZGVhbC1ib2R5LXdlaWdodCBoNHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wdXJwbGV7XG4gICAgY29sb3I6IG9yY2hpZDtcbn1cblxuLnByb2ZpbGUtc2VjdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nLXNlY3Rpb24gaDF7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5oZWFkaW5nLXNlY3Rpb24gaDV7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmNvbWl0dGVke1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5tZXRhYm9saWMtYWdlIGltZ3tcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubWV0YWJvbGljLWFnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwyNTEsMTUyLCAwLjEpO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY2Fsb3JpZS1kaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMTkyLDIwMywgMC4xKTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBoZWlnaHQ6IDQyMHB4O1xufVxuXG4ua2l0IGg0e1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ucnVwZWUtaW1hZ2UgaW1ne1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWctY29se1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWRpdntcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5idXR0b24tZGl2IHB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5ibG9jay1idXR0b257XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU1ZjM2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5neC1jaGFydHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBub25lO1xufVxuXG4uYm1pLWd1YWdle1xuICAgIHdpZHRoOiAzMzBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuZGl2LmJtaS1ndWFnZSB0c3BhbntcbiAgICBmb250LXNpemU6IDNlbTtcbn1cblxuLnN0cmlrZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYm90dG9tLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucHJpY2UtZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi1kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYmxvY2stYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuXG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/profile-summary/profile-summary.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/profile-summary/profile-summary.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSummaryComponent", function() { return ProfileSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../custom-slide-service.service */ "./src/app/custom-slide-service.service.ts");
/* harmony import */ var src_app_checkout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/checkout.service */ "./src/app/checkout.service.ts");





var ProfileSummaryComponent = /** @class */ (function () {
    function ProfileSummaryComponent(router, service, checkoutService) {
        this.router = router;
        this.service = service;
        this.checkoutService = checkoutService;
        this.view = [330, 350];
        this.legend = false;
        this.legendPosition = 'below';
        // proerties for display BMI
        this.BMI = 0;
        this.colorScheme = {
            domain: ['orchid']
        };
        this.colorSchemeCalorie = {
            domain: ['#F1803A']
        };
        this.BMI = this.calcBMI();
        this.userWeightKg = this.service.slideData.weight;
        this.userAge = this.service.slideData.age;
        this.gender = this.service.slideData.gender;
        this.idealWeight = this.calcIdealWeight();
    }
    ProfileSummaryComponent.prototype.ngOnInit = function () {
        this.pricing = this.checkoutService.getPricing();
        // redirect to home page, if any value is missing
        console.log(":: serviice", this.service.slideData);
        if (!this.service.allValuesPresent()) {
            this.router.navigate(['']);
        }
        this.single = [
            {
                "name": this.BMI,
                "value": this.BMI
            }
        ];
        this.customColors = function (value) {
            console.log(value, ":: value");
            if (value < 18.5) {
                return "#FF0000";
            }
            if (value >= 18.5 && value < 25) {
                return "#008000";
            }
            if (value >= 25 && value < 30) {
                return "#FFA500";
            }
            if (value >= 30) {
                return "#FF0000";
            }
        };
        this.calcCalorie(this.service.slideData.goal, this.service.slideData.weight);
        this.singleCalorie = [
            {
                "name": "Calories",
                "value": this.calorie
            }
        ];
    };
    // calculating calorie on basis of goal
    ProfileSummaryComponent.prototype.calcCalorie = function (goal, weight) {
        if (goal == "weightgain") {
            console.log(":: goal is weight gain");
            this.calorie = weight * 42;
        }
        else if (goal == "weightloss") {
            console.log(":: goal is weight loss");
            this.calorie = weight * 24;
        }
        else {
            console.log(":: goal is muscle");
            this.calorie = weight * 32;
        }
    };
    ProfileSummaryComponent.prototype.onSelect = function (data) {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    };
    ProfileSummaryComponent.prototype.onActivate = function (data) {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    };
    ProfileSummaryComponent.prototype.onDeactivate = function (data) {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    };
    ProfileSummaryComponent.prototype.handleCheckout = function () {
        this.router.navigate(["checkout"]);
    };
    ProfileSummaryComponent.prototype.calcBMI = function () {
        var userHeightFt = parseInt(this.service.slideData.height.split('ft')[0]);
        var userHeightIn = parseInt(this.service.slideData.height.split('ft')[1].split('inch')[0].trim());
        this.userHeightM = this.convertHeight(userHeightFt, userHeightIn);
        var weightKg = this.service.slideData.weight;
        return weightKg / (this.userHeightM * this.userHeightM);
    };
    ProfileSummaryComponent.prototype.convertHeight = function (userHeightFt, userHeightIn) {
        var userHeightMeter = (userHeightFt * 0.305) + (userHeightIn * 0.0254);
        return userHeightMeter;
    };
    ProfileSummaryComponent.prototype.calcIdealWeight = function () {
        var userHeightCm = this.userHeightM * 100;
        console.log(userHeightCm, "height in cm");
        console.log(this.gender, "gender");
        if (this.gender == "male") {
            var idealBodyWeight = userHeightCm - 100;
            console.log(idealBodyWeight, "maleBodyWeight");
            return idealBodyWeight;
        }
        else if (this.gender == "female") {
            var idealBodyWeight = userHeightCm - 105;
            console.log(idealBodyWeight, "femaleBodyWeight");
            return idealBodyWeight;
        }
    };
    ProfileSummaryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _custom_slide_service_service__WEBPACK_IMPORTED_MODULE_3__["CustomSlideService"] },
        { type: src_app_checkout_service__WEBPACK_IMPORTED_MODULE_4__["CheckoutService"] }
    ]; };
    ProfileSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-summary',
            template: __webpack_require__(/*! raw-loader!./profile-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile-summary/profile-summary.component.html"),
            styles: [__webpack_require__(/*! ./profile-summary.component.css */ "./src/app/pages/profile-summary/profile-summary.component.css")]
        })
    ], ProfileSummaryComponent);
    return ProfileSummaryComponent;
}());



/***/ }),

/***/ "./src/app/window.service.ts":
/*!***********************************!*\
  !*** ./src/app/window.service.ts ***!
  \***********************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


function _window() {
    // return the global native browser window object
    return window;
}
var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "window", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], WindowService);
    return WindowService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    API_URL: "http://localhost:3000/backend/",
    production: false,
    razorpay: {
        key: 'rzp_test_d8qs8mxXhWH9vS',
        currency: 'INR',
        name: 'Custom Diet',
        color: '#62B52E'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nuttygeek/ProNutritionFrontend/ProNutritionFrontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map