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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var form_validator_1 = require('./form.validator');
var room_service_1 = require('./room.service');
var CreateRoomComponent = (function () {
    function CreateRoomComponent(formBuilder, roomService, router) {
        this.roomService = roomService;
        this.router = router;
        this.newRoomForm = formBuilder.group({
            name: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])],
            description: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(10)])],
            price: ["", forms_1.Validators.compose([forms_1.Validators.required, form_validator_1.FormValidator.priceRange])],
            imageUrl: ["Chacho.png", forms_1.Validators.compose([forms_1.Validators.required])],
        });
    }
    CreateRoomComponent.prototype.create = function () {
        var _this = this;
        var elementValue = document.getElementById("upload").value;
        var replaced = "imgs/HImages/" + elementValue.substr(12);
        console.log(replaced);
        console.log(this.newRoomForm);
        console.log(this.newRoomForm.value);
        this.newRoomForm.value["imageUrl"] = replaced;
        console.log(this.newRoomForm.value);
        console.log(this.newRoomForm);
        this.roomService.createRoom(this.newRoomForm.value)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['roomDetails']);
        });
    };
    CreateRoomComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-room',
            templateUrl: 'app.createroomtemplate.html',
            providers: [room_service_1.RoomService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, room_service_1.RoomService, router_1.Router])
    ], CreateRoomComponent);
    return CreateRoomComponent;
}());
exports.CreateRoomComponent = CreateRoomComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jcmVhdGVyb29tY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFDeEIsQ0FBQyxDQURzQztBQUN2QyxzQkFBK0QsZ0JBQy9ELENBQUMsQ0FEOEU7QUFDL0UsdUJBQXFCLGlCQUNyQixDQUFDLENBRHFDO0FBQ3RDLCtCQUE0QixrQkFFNUIsQ0FBQyxDQUY2QztBQUc5Qyw2QkFBMEIsZ0JBSTFCLENBQUMsQ0FKeUM7QUFXMUM7SUFHSSw2QkFBWSxXQUF1QixFQUMzQixXQUF1QixFQUN2QixNQUFhO1FBRGIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUVqQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxFQUFHLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUMsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdFLFdBQVcsRUFBRyxDQUFDLEVBQUUsRUFBQyxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFDLGtCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRixLQUFLLEVBQUcsQ0FBQyxFQUFFLEVBQUMsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBQyw4QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDL0UsUUFBUSxFQUFFLENBQUMsWUFBWSxFQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3JFLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxvQ0FBTSxHQUFiO1FBQUEsaUJBc0JDO1FBcEJHLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksUUFBUSxHQUFHLGVBQWUsR0FBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXhELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBR3BDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFJOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7YUFDbEQsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE1Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLFFBQVEsRUFBRyxhQUFhO1lBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFHLENBQUMsMEJBQVcsQ0FBQztTQUM1QixDQUFDOzsyQkFBQTtJQXdDRiwwQkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksMkJBQW1CLHNCQXNDL0IsQ0FBQSIsImZpbGUiOiJhcHAuY3JlYXRlcm9vbWNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLEZvcm1Db250cm9sTmFtZSxGb3JtR3JvdXAsVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7Rm9ybVZhbGlkYXRvcn0gZnJvbSAnLi9mb3JtLnZhbGlkYXRvcidcclxuXHJcbmltcG9ydCB7Um9vbX0gZnJvbSAnLi9yb29tLm1vZGVsJ1xyXG5pbXBvcnQge1Jvb21TZXJ2aWNlfSBmcm9tICcuL3Jvb20uc2VydmljZSdcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZCA6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yIDogJ2NyZWF0ZS1yb29tJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLmNyZWF0ZXJvb210ZW1wbGF0ZS5odG1sJyxcclxuICAgIHByb3ZpZGVycyA6IFtSb29tU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVSb29tQ29tcG9uZW50XHJcbntcclxuICAgIHByaXZhdGUgbmV3Um9vbUZvcm0gOiBGb3JtR3JvdXA7XHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtQnVpbGRlcjpGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcm9vbVNlcnZpY2U6Um9vbVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uZXdSb29tRm9ybSA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZSA6IFtcIlwiLFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KV0pXSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBbXCJcIixWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoMTApXSldLFxyXG4gICAgICAgICAgICBwcmljZSA6IFtcIlwiLFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxGb3JtVmFsaWRhdG9yLnByaWNlUmFuZ2VdKV0sXHJcbiAgICAgICAgICAgIGltYWdlVXJsIDpbXCJDaGFjaG8ucG5nXCIsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpXHJcbiAgICB7ICAgIFxyXG4gICAgICAgIHZhciBlbGVtZW50VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwbG9hZFwiKS52YWx1ZTtcclxuICAgICAgICB2YXIgcmVwbGFjZWQgPSBcImltZ3MvSEltYWdlcy9cIisgZWxlbWVudFZhbHVlLnN1YnN0cigxMik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcGxhY2VkKTtcclxuICAgICAgICAgY29uc29sZS5sb2codGhpcy5uZXdSb29tRm9ybSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3Um9vbUZvcm0udmFsdWUpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLm5ld1Jvb21Gb3JtLnZhbHVlW1wiaW1hZ2VVcmxcIl0gPSByZXBsYWNlZDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld1Jvb21Gb3JtLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld1Jvb21Gb3JtKTtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnJvb21TZXJ2aWNlLmNyZWF0ZVJvb20odGhpcy5uZXdSb29tRm9ybS52YWx1ZSlcclxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydyb29tRGV0YWlscyddKTtcclxuICAgICAgICB9KSBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
