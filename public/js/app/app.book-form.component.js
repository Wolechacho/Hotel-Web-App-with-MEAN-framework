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
var http_1 = require('@angular/http');
var form_validator_1 = require('./form.validator');
var forms_1 = require('@angular/forms');
var customer_service_1 = require('./customer.service');
var roomservicedetails_1 = require('./roomservicedetails');
var IdExport_1 = require('./IdExport');
require('rxjs/Rx');
var BookFormComponent = (function () {
    function BookFormComponent(formBuilder, customerService, http, roomdetailService, router) {
        this.customerService = customerService;
        this.http = http;
        this.roomdetailService = roomdetailService;
        this.router = router;
        this.bookForm = formBuilder.group({
            firstName: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3)])],
            lastName: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3)])],
            age: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    form_validator_1.FormValidator.mustbeAboveEighteen])],
            address: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3)])],
            gender: ['',
                forms_1.Validators.compose([
                    forms_1.Validators.required, form_validator_1.FormValidator.chooseGender])]
        });
    }
    BookFormComponent.prototype.save = function () {
        var _this = this;
        var transformedData = {};
        var data = this.bookForm.value;
        data["id"] = IdExport_1.Utility.id;
        this.customerService
            .saveData(data)
            .subscribe(function (newResult) {
            var jsonResponse = newResult.json();
            var newdata = jsonResponse.result;
            var date = new Date();
            transformedData = { customer_id: newdata._id, date: date, room_id: IdExport_1.Utility.id };
            _this.roomdetailService.saveRoomServiceDetails(transformedData)
                .subscribe(function (d) {
                console.log(d);
                _this.router.navigate(['thankyou']);
            });
        });
    };
    BookFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'book-form',
            templateUrl: 'app.book-form.template.html',
            styles: ["\n                .error\n                {\n                    color:red;\n                    font-weight:bold;\n                }"
            ],
            providers: [customer_service_1.CustomerService, roomservicedetails_1.RoomDetailService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, customer_service_1.CustomerService, http_1.Http, roomservicedetails_1.RoomDetailService, router_1.Router])
    ], BookFormComponent);
    return BookFormComponent;
}());
exports.BookFormComponent = BookFormComponent;

//# sourceMappingURL=data:application/json;base64,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LENBQUM7Z0JBQ2YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0lBcEVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUMsV0FBVztZQUNwQixXQUFXLEVBQUMsNkJBQTZCO1lBQ3pDLE1BQU0sRUFBRSxDQUFDLHVJQUtLO2FBQ0w7WUFDVCxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxFQUFDLHNDQUFpQixDQUFDO1NBQ2pELENBQUM7O3lCQUFBO0lBMERGLHdCQUFDO0FBQUQsQ0F4REEsQUF3REMsSUFBQTtBQXhEWSx5QkFBaUIsb0JBd0Q3QixDQUFBIiwiZmlsZSI6ImFwcC5ib29rLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7SHR0cCxIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJ1xyXG5pbXBvcnQge0Zvcm1WYWxpZGF0b3J9IGZyb20gJy4vZm9ybS52YWxpZGF0b3InXHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsVmFsaWRhdG9ycyxGb3JtR3JvdXAsRm9ybUNvbnRyb2wsRm9ybUNvbnRyb2xOYW1lfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuXHJcbmltcG9ydCB7Q3VzdG9tZXJTZXJ2aWNlfSBmcm9tICcuL2N1c3RvbWVyLnNlcnZpY2UnXHJcbmltcG9ydCB7Um9vbURldGFpbFNlcnZpY2V9IGZyb20gJy4vcm9vbXNlcnZpY2VkZXRhaWxzJ1xyXG5cclxuaW1wb3J0IHtVdGlsaXR5fSBmcm9tICcuL0lkRXhwb3J0J1xyXG5pbXBvcnQgJ3J4anMvUngnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjonYm9vay1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOidhcHAuYm9vay1mb3JtLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgICAgICAgICAgLmVycm9yXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbQ3VzdG9tZXJTZXJ2aWNlLFJvb21EZXRhaWxTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2tGb3JtQ29tcG9uZW50XHJcbntcclxuICAgIHByaXZhdGUgYm9va0Zvcm0gOiBGb3JtR3JvdXBcclxuICAgIGNvbnN0cnVjdG9yKGZvcm1CdWlsZGVyOkZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBjdXN0b21lclNlcnZpY2U6Q3VzdG9tZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwOkh0dHAscHJpdmF0ZSByb29tZGV0YWlsU2VydmljZTpSb29tRGV0YWlsU2VydmljZVxyXG4gICAgLHByaXZhdGUgcm91dGVyIDpSb3V0ZXIpXHJcbiAgICB7IFxyXG4gICAgICAgdGhpcy5ib29rRm9ybSA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOlsnJyxWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXSldLFxyXG5cclxuICAgICAgICAgICAgbGFzdE5hbWU6WycnLFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKV0sXHJcblxyXG4gICAgICAgICAgICBhZ2U6WycnLFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgRm9ybVZhbGlkYXRvci5tdXN0YmVBYm92ZUVpZ2h0ZWVuXSldLFxyXG5cclxuICAgICAgICAgICAgYWRkcmVzczpbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuXHJcbiAgICAgICAgICAgZ2VuZGVyOlsnJyxcclxuICAgICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLEZvcm1WYWxpZGF0b3IuY2hvb3NlR2VuZGVyXSldXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBzYXZlKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCB0cmFuc2Zvcm1lZERhdGEgPSB7fTtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuYm9va0Zvcm0udmFsdWU7XHJcbiAgICAgICAgZGF0YVtcImlkXCJdID0gVXRpbGl0eS5pZDtcclxuXHJcbiAgICAgICAgdGhpcy5jdXN0b21lclNlcnZpY2VcclxuICAgICAgICAuc2F2ZURhdGEoZGF0YSlcclxuICAgICAgICAuc3Vic2NyaWJlKChuZXdSZXN1bHQpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQganNvblJlc3BvbnNlID0gbmV3UmVzdWx0Lmpzb24oKTtcclxuICAgICAgICAgICAgdmFyIG5ld2RhdGEgPSBqc29uUmVzcG9uc2UucmVzdWx0O1xyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybWVkRGF0YSA9IHtjdXN0b21lcl9pZDpuZXdkYXRhLl9pZCxkYXRlIDpkYXRlLHJvb21faWQgOiBVdGlsaXR5LmlkfTsgICBcclxuICAgICAgICAgICAgdGhpcy5yb29tZGV0YWlsU2VydmljZS5zYXZlUm9vbVNlcnZpY2VEZXRhaWxzKHRyYW5zZm9ybWVkRGF0YSlcclxuICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGQpPT5cclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd0aGFua3lvdSddKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
