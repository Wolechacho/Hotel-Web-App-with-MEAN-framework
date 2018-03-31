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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var ThankYouComponent = (function () {
    function ThankYouComponent(router) {
        this.router = router;
    }
    ThankYouComponent.prototype.gotoHomePage = function () {
        var command = [""];
        this.router.navigate(command);
    };
    ThankYouComponent = __decorate([
        core_1.Component({
            selector: 'thankYou',
            template: "\n        <p class=\"alert alert-success\">\n                Thank you for staying with us \n                we hope to make your stay awesome and full of wonders\n                Contact our administrator for more pleasurable experience\n        </p>\n        <p>\n            <button (click)=\"gotoHomePage()\">HOME PAGE</button>\n        </p>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ThankYouComponent);
    return ThankYouComponent;
}());
exports.ThankYouComponent = ThankYouComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50aGFua3lvdWNvbWNvbXBlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUN4QixDQUFDLENBRHNDO0FBQ3ZDLHVCQUFxQixpQkFFckIsQ0FBQyxDQUZxQztBQWlCdEM7SUFFSSwyQkFBb0IsTUFBYTtRQUFiLFdBQU0sR0FBTixNQUFNLENBQU87SUFHakMsQ0FBQztJQUVNLHdDQUFZLEdBQW5CO1FBRUksSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBMUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRyxpV0FTVjtTQUNKLENBQUM7O3lCQUFBO0lBZUYsd0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLHlCQUFpQixvQkFZN0IsQ0FBQSIsImZpbGUiOiJhcHAudGhhbmt5b3Vjb21jb21wZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndGhhbmtZb3UnLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgICAgPHAgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICBUaGFuayB5b3UgZm9yIHN0YXlpbmcgd2l0aCB1cyBcclxuICAgICAgICAgICAgICAgIHdlIGhvcGUgdG8gbWFrZSB5b3VyIHN0YXkgYXdlc29tZSBhbmQgZnVsbCBvZiB3b25kZXJzXHJcbiAgICAgICAgICAgICAgICBDb250YWN0IG91ciBhZG1pbmlzdHJhdG9yIGZvciBtb3JlIHBsZWFzdXJhYmxlIGV4cGVyaWVuY2VcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImdvdG9Ib21lUGFnZSgpXCI+SE9NRSBQQUdFPC9idXR0b24+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgYFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUaGFua1lvdUNvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb3RvSG9tZVBhZ2UoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBbXCJcIl1cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShjb21tYW5kKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
