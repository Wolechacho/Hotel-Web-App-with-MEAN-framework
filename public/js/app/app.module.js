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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var app_homecomponent_1 = require('./app.homecomponent');
var app_roomcomponent_1 = require('./app.roomcomponent');
var app_book_form_component_1 = require('./app.book-form.component');
var app_thankyoucomponent_1 = require('./app.thankyoucomponent');
var app_logincomponent_1 = require('./app.logincomponent');
var app_adminmodule_1 = require('./app.adminmodule');
var app_roomcrudcomponent_1 = require('./app.roomcrudcomponent');
var app_createroomcomponent_1 = require('./app.createroomcomponent');
var app_editroomcomponent_1 = require('./app.editroomcomponent');
var app_roomservicedetailcomponent_1 = require('./app.roomservicedetailcomponent');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.ReactiveFormsModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent,
                app_homecomponent_1.HomeComponent,
                app_roomcomponent_1.RoomComponent,
                app_book_form_component_1.BookFormComponent,
                app_thankyoucomponent_1.ThankYouComponent,
                app_logincomponent_1.LoginComponent,
                app_adminmodule_1.AdminModuleComponent,
                app_roomcrudcomponent_1.RoomCrudComponent,
                app_createroomcomponent_1.CreateRoomComponent,
                app_editroomcomponent_1.EditRoomComponent,
                app_roomservicedetailcomponent_1.RoomServiceDetail],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0Msc0JBQW9DLGdCQUFnQixDQUFDLENBQUE7QUFFckQsNEJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBRTNELDhCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELHdDQUFnQywyQkFDaEMsQ0FBQyxDQUQwRDtBQUMzRCxzQ0FBZ0MseUJBQ2hDLENBQUMsQ0FEd0Q7QUFDekQsbUNBQTZCLHNCQUM3QixDQUFDLENBRGtEO0FBQ25ELGdDQUFtQyxtQkFDbkMsQ0FBQyxDQURxRDtBQUN0RCxzQ0FBZ0MseUJBQ2hDLENBQUMsQ0FEd0Q7QUFDekQsd0NBQWtDLDJCQUNsQyxDQUFDLENBRDREO0FBQzdELHNDQUFnQyx5QkFDaEMsQ0FBQyxDQUR3RDtBQUN6RCwrQ0FBZ0Msa0NBR2hDLENBQUMsQ0FIaUU7QUFtQmxFO0lBQUE7SUFFQSxDQUFDO0lBbEJEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFPLENBQUMsZ0NBQWEsRUFBQyxpQkFBVSxFQUFDLDJCQUFtQixFQUFDLHFCQUFPLENBQUM7WUFDcEUsWUFBWSxFQUFNLENBQUMsNEJBQVk7Z0JBQ2IsaUNBQWE7Z0JBQ2IsaUNBQWE7Z0JBQ2IsMkNBQWlCO2dCQUNqQix5Q0FBaUI7Z0JBQ2pCLG1DQUFjO2dCQUNkLHNDQUFvQjtnQkFDcEIseUNBQWlCO2dCQUNqQiw2Q0FBbUI7Z0JBQ25CLHlDQUFpQjtnQkFDakIsa0RBQWlCLENBQUM7WUFDcEMsU0FBUyxFQUFLLENBQUMsaUNBQW1CLENBQUM7WUFDbkMsU0FBUyxFQUFLLENBQUUsNEJBQVksQ0FBRTtTQUMvQixDQUFDOztpQkFBQTtJQUdGLGdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxpQkFBUyxZQUVyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgcm91dGluZyxhcHBSb3V0aW5nUHJvdmlkZXJzfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmhvbWVjb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb29tQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLnJvb21jb21wb25lbnQnO1xyXG5pbXBvcnQge0Jvb2tGb3JtQ29tcG9uZW50fSBmcm9tICcuL2FwcC5ib29rLWZvcm0uY29tcG9uZW50J1xyXG5pbXBvcnQge1RoYW5rWW91Q29tcG9uZW50fSBmcm9tICcuL2FwcC50aGFua3lvdWNvbXBvbmVudCdcclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9hcHAubG9naW5jb21wb25lbnQnXHJcbmltcG9ydCB7QWRtaW5Nb2R1bGVDb21wb25lbnR9IGZyb20gJy4vYXBwLmFkbWlubW9kdWxlJ1xyXG5pbXBvcnQge1Jvb21DcnVkQ29tcG9uZW50fSBmcm9tICcuL2FwcC5yb29tY3J1ZGNvbXBvbmVudCdcclxuaW1wb3J0IHtDcmVhdGVSb29tQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jcmVhdGVyb29tY29tcG9uZW50J1xyXG5pbXBvcnQge0VkaXRSb29tQ29tcG9uZW50fSBmcm9tICcuL2FwcC5lZGl0cm9vbWNvbXBvbmVudCdcclxuaW1wb3J0IHtSb29tU2VydmljZURldGFpbH0gZnJvbSAnLi9hcHAucm9vbXNlcnZpY2VkZXRhaWxjb21wb25lbnQnXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiAgICAgIFtCcm93c2VyTW9kdWxlLEh0dHBNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSxyb3V0aW5nXSxcclxuICBkZWNsYXJhdGlvbnM6ICAgICBbQXBwQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgUm9vbUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICBCb29rRm9ybUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICBUaGFua1lvdUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICBBZG1pbk1vZHVsZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICBSb29tQ3J1ZENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICBDcmVhdGVSb29tQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIEVkaXRSb29tQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIFJvb21TZXJ2aWNlRGV0YWlsXSxcclxuICBwcm92aWRlcnMgOiAgIFthcHBSb3V0aW5nUHJvdmlkZXJzXSxcclxuICBib290c3RyYXA6ICAgIFsgQXBwQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZVxyXG57IFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
