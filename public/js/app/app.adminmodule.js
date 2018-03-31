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
var AdminModuleComponent = (function () {
    function AdminModuleComponent(router) {
        this.router = router;
    }
    AdminModuleComponent.prototype.gotoRoomDetails = function () {
        this.router.navigate(["roomDetails"]);
    };
    AdminModuleComponent.prototype.gotoRoomServiceDetails = function () {
        this.router.navigate(["roomServiceDetails"]);
    };
    AdminModuleComponent = __decorate([
        core_1.Component({
            selector: 'adminModule',
            template: "\n        <div class=\"alert alert-info\" id=\"message-container\">\n            <p id=\"admin-message\" class=\"text-center\">\n                CHOOSE THE MODULE TO OPERATE ON\n            </p>\n            <p class=\"text-center\">\n                <button class=\"btn btn-success\" (click)=\"gotoRoomDetails()\">ROOM MODULE</button>\n                <button class=\"btn btn-success\" (click)=\"gotoRoomServiceDetails()\">ROOM SERVICE MODULE</button>\n            </p>\n        </div>\n    ",
            styles: ["\n            #admin-message{\n                font-size:25px;\n                padding:25px;\n            }\n            #message-container{\n                margin-top : 70px;\n            }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AdminModuleComponent);
    return AdminModuleComponent;
}());
exports.AdminModuleComponent = AdminModuleComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5hZG1pbm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQ3hCLENBQUMsQ0FEc0M7QUFDdkMsdUJBQXFCLGlCQUNyQixDQUFDLENBRHFDO0FBMEJ0QztJQUVJLDhCQUFvQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztJQUdqQyxDQUFDO0lBRU0sOENBQWUsR0FBdEI7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHFEQUFzQixHQUF0QjtRQUVLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF4Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFHLGFBQWE7WUFDeEIsUUFBUSxFQUNSLDhlQVVDO1lBQ0QsTUFBTSxFQUFDLENBQUMsd01BUVAsQ0FBQztTQUNMLENBQUM7OzRCQUFBO0lBa0JGLDJCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSw0QkFBb0IsdUJBZ0JoQyxDQUFBIiwiZmlsZSI6ImFwcC5hZG1pbm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ2FkbWluTW9kdWxlJyxcclxuICAgIHRlbXBsYXRlOlxyXG4gICAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvXCIgaWQ9XCJtZXNzYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8cCBpZD1cImFkbWluLW1lc3NhZ2VcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBDSE9PU0UgVEhFIE1PRFVMRSBUTyBPUEVSQVRFIE9OXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJnb3RvUm9vbURldGFpbHMoKVwiPlJPT00gTU9EVUxFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cImdvdG9Sb29tU2VydmljZURldGFpbHMoKVwiPlJPT00gU0VSVklDRSBNT0RVTEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgICAgICAjYWRtaW4tbWVzc2FnZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNtZXNzYWdlLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3AgOiA3MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluTW9kdWxlQ29tcG9uZW50XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOlJvdXRlcilcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvdG9Sb29tRGV0YWlscygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJyb29tRGV0YWlsc1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ290b1Jvb21TZXJ2aWNlRGV0YWlscygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicm9vbVNlcnZpY2VEZXRhaWxzXCJdKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
