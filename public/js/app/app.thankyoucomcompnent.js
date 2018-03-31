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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50aGFua3lvdWNvbWNvbXBuZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFDeEIsQ0FBQyxDQURzQztBQUN2Qyx1QkFBcUIsaUJBRXJCLENBQUMsQ0FGcUM7QUFpQnRDO0lBRUksMkJBQW9CLE1BQWE7UUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO0lBR2pDLENBQUM7SUFFTSx3Q0FBWSxHQUFuQjtRQUVJLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTFCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUcsaVdBU1Y7U0FDSixDQUFDOzt5QkFBQTtJQWVGLHdCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSx5QkFBaUIsb0JBWTdCLENBQUEiLCJmaWxlIjoiYXBwLnRoYW5reW91Y29tY29tcG5lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0aGFua1lvdScsXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8cCBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3Igc3RheWluZyB3aXRoIHVzIFxyXG4gICAgICAgICAgICAgICAgd2UgaG9wZSB0byBtYWtlIHlvdXIgc3RheSBhd2Vzb21lIGFuZCBmdWxsIG9mIHdvbmRlcnNcclxuICAgICAgICAgICAgICAgIENvbnRhY3Qgb3VyIGFkbWluaXN0cmF0b3IgZm9yIG1vcmUgcGxlYXN1cmFibGUgZXhwZXJpZW5jZVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZ290b0hvbWVQYWdlKClcIj5IT01FIFBBR0U8L2J1dHRvbj5cclxuICAgICAgICA8L3A+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRoYW5rWW91Q29tcG9uZW50XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcilcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvdG9Ib21lUGFnZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY29tbWFuZCA9IFtcIlwiXVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGNvbW1hbmQpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
