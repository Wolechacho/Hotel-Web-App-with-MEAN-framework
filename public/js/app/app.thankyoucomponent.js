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
            template: "\n    <div class=\"alert alert-success thanks-info\">\n            <p>\n                Thank you for staying with us \n                we hope to make your stay awesome and full of wonders\n                Contact our administrator for more pleasurable experience\n            </p>\n            <p class=\"text-center\">\n                <button class=\"btn btn-addcolor\" (click)=\"gotoHomePage()\">HOME PAGE</button>\n            </p>\n    </div>\n    ",
            styles: ["\n                .thanks-info\n                {\n                    font-size : 25px;\n                    padding:25px;\n                    margin-top : 50px;\n\n                }\n\n                .btn-addcolor\n                {\n                    color:#18bc9c;\n                    background-color:white;\n                    width : 200px;\n                }\n            "]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ThankYouComponent);
    return ThankYouComponent;
}());
exports.ThankYouComponent = ThankYouComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50aGFua3lvdWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQ3hCLENBQUMsQ0FEc0M7QUFDdkMsdUJBQXFCLGlCQUVyQixDQUFDLENBRnFDO0FBc0N0QztJQUVJLDJCQUFvQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztJQUdqQyxDQUFDO0lBRU0sd0NBQVksR0FBbkI7UUFFSSxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUEvQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFHLHljQVdWO1lBQ0EsTUFBTSxFQUNDLENBQUMsb1lBZUEsQ0FBQztTQUdiLENBQUM7O3lCQUFBO0lBZUYsd0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLHlCQUFpQixvQkFZN0IsQ0FBQSIsImZpbGUiOiJhcHAudGhhbmt5b3Vjb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0aGFua1lvdScsXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzIHRoYW5rcy1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciBzdGF5aW5nIHdpdGggdXMgXHJcbiAgICAgICAgICAgICAgICB3ZSBob3BlIHRvIG1ha2UgeW91ciBzdGF5IGF3ZXNvbWUgYW5kIGZ1bGwgb2Ygd29uZGVyc1xyXG4gICAgICAgICAgICAgICAgQ29udGFjdCBvdXIgYWRtaW5pc3RyYXRvciBmb3IgbW9yZSBwbGVhc3VyYWJsZSBleHBlcmllbmNlXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYWRkY29sb3JcIiAoY2xpY2spPVwiZ290b0hvbWVQYWdlKClcIj5IT01FIFBBR0U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgIHN0eWxlczpcclxuICAgICAgICAgICAgW2BcclxuICAgICAgICAgICAgICAgIC50aGFua3MtaW5mb1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3AgOiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnRuLWFkZGNvbG9yXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IzE4YmM5YztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBdXHJcbiAgICBcclxuICAgICAgIFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUaGFua1lvdUNvbXBvbmVudFxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb3RvSG9tZVBhZ2UoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBbXCJcIl1cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShjb21tYW5kKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
