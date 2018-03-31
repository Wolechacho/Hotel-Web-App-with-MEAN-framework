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
var app_navbarcomponent_1 = require('./app.navbarcomponent');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n    <navComponent></navComponent>\n    <div class=\"main-container\">\n        <router-outlet></router-outlet>      \n    </div>\n    ",
            directives: [app_navbarcomponent_1.NavBarComponent, router_1.RouterOutlet]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxvQ0FBOEIsdUJBRTlCLENBQUMsQ0FGb0Q7QUFFckQsdUJBQTJCLGlCQUczQixDQUFDLENBSDJDO0FBYzVDO0lBQUE7SUFFQSxDQUFDO0lBYkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSwwSUFLVDtZQUNELFVBQVUsRUFBQyxDQUFDLHFDQUFlLEVBQUMscUJBQVksQ0FBQztTQUM1QyxDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2QmFyQ29tcG9uZW50fSBmcm9tICcuL2FwcC5uYXZiYXJjb21wb25lbnQnXG5cbmltcG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8bmF2Q29tcG9uZW50PjwvbmF2Q29tcG9uZW50PlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+ICAgICAgXG4gICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltOYXZCYXJDb21wb25lbnQsUm91dGVyT3V0bGV0XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
