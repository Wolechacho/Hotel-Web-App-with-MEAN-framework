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
var EditRoomComponent = (function () {
    function EditRoomComponent(formBuilder, roomService, router, activatedRoute) {
        this.formBuilder = formBuilder;
        this.roomService = roomService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.room = { name: '', description: '', price: 0, imageUrl: '' };
    }
    EditRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editRoomForm = this.formBuilder.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])],
            description: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(10)])],
            price: ['', forms_1.Validators.compose([forms_1.Validators.required, form_validator_1.FormValidator.priceRange])],
            imageUrl: ['', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        console.log(this.editRoomForm);
        this.activatedRoute.params
            .map(function (p) { return p['id']; })
            .switchMap(function (roomId) {
            return _this.roomService.getRoom(roomId);
        })
            .subscribe(function (data) {
            console.log(data);
            _this.room['name'] = data['name'];
            _this.room['description'] = data['description'];
            _this.room['price'] = data['price'];
            _this.room["imageUrl"] = data['imageUrl'];
            _this.editRoomForm.setValue(_this.room);
            _this.room['id'] = data['id'];
        });
    };
    EditRoomComponent.prototype.edit = function () {
        var _this = this;
        this.room['name'] = this.editRoomForm.value['name'];
        this.room['description'] = this.editRoomForm.value['description'];
        this.room['price'] = this.editRoomForm.value['price'];
        console.log(this.room);
        this.roomService.editRoom(this.room)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['roomDetails']);
        });
    };
    EditRoomComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'edit-room',
            templateUrl: 'app.editroomtemplate.html',
            providers: [room_service_1.RoomService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, room_service_1.RoomService, router_1.Router, router_1.ActivatedRoute])
    ], EditRoomComponent);
    return EditRoomComponent;
}());
exports.EditRoomComponent = EditRoomComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5lZGl0cm9vbWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQy9CLENBQUMsQ0FENkM7QUFDOUMsc0JBQTJFLGdCQUMzRSxDQUFDLENBRDBGO0FBQzNGLHVCQUFvQyxpQkFDcEMsQ0FBQyxDQURvRDtBQUNyRCwrQkFBNEIsa0JBRTVCLENBQUMsQ0FGNkM7QUFHOUMsNkJBQTBCLGdCQUMxQixDQUFDLENBRHlDO0FBYTFDO0lBZ0NJLDJCQUFvQixXQUF1QixFQUNuQyxXQUF1QixFQUN2QixNQUFhLEVBQ2IsY0FBNkI7UUFIakIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDbkMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBaEM3QixTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLFdBQVcsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUM7SUFrQzVELENBQUM7SUFqQ0Qsb0NBQVEsR0FBUjtRQUFBLGlCQTBCQztRQXhCSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3hDLElBQUksRUFBRyxDQUFDLEVBQUUsRUFBQyxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFDLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RSxXQUFXLEVBQUcsQ0FBQyxFQUFFLEVBQUMsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBQyxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckYsS0FBSyxFQUFHLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUMsOEJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQy9FLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBQyxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUN2RCxDQUFDLENBQUE7UUFFTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU07YUFDekIsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFQLENBQU8sQ0FBQzthQUNqQixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFBaEMsQ0FBZ0MsQ0FBQzthQUNwQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFHekMsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVNNLGdDQUFJLEdBQVg7UUFBQSxpQkFlQztRQVhHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE5REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLFFBQVEsRUFBRyxXQUFXO1lBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFHLENBQUMsMEJBQVcsQ0FBQztTQUU1QixDQUFDOzt5QkFBQTtJQXlERix3QkFBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUF2RFkseUJBQWlCLG9CQXVEN0IsQ0FBQSIsImZpbGUiOiJhcHAuZWRpdHJvb21jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsRm9ybUNvbnRyb2xOYW1lLEZvcm1Hcm91cCxWYWxpZGF0b3JzLEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuaW1wb3J0IHtSb3V0ZXIsQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHtGb3JtVmFsaWRhdG9yfSBmcm9tICcuL2Zvcm0udmFsaWRhdG9yJ1xyXG5cclxuaW1wb3J0IHtSb29tfSBmcm9tICcuL3Jvb20ubW9kZWwnXHJcbmltcG9ydCB7Um9vbVNlcnZpY2V9IGZyb20gJy4vcm9vbS5zZXJ2aWNlJ1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSdcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZCA6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yIDogJ2VkaXQtcm9vbScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC5lZGl0cm9vbXRlbXBsYXRlLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzIDogW1Jvb21TZXJ2aWNlXVxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0Um9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdFxyXG57XHJcbiAgICBwcml2YXRlIGVkaXRSb29tRm9ybSA6IEZvcm1Hcm91cDtcclxuICAgIHByaXZhdGUgcm9vbSA9IHtuYW1lOicnLGRlc2NyaXB0aW9uOicnLHByaWNlOjAsaW1hZ2VVcmw6Jyd9O1xyXG4gICAgbmdPbkluaXQoKVxyXG4gICAge1xyXG4gICAgICAgICB0aGlzLmVkaXRSb29tRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lIDogWycnLFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KV0pXSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEwKV0pXSxcclxuICAgICAgICAgICAgcHJpY2UgOiBbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLEZvcm1WYWxpZGF0b3IucHJpY2VSYW5nZV0pXSxcclxuICAgICAgICAgICAgaW1hZ2VVcmwgOlsnJyxWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5lZGl0Um9vbUZvcm0pO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zXHJcbiAgICAgICAgLm1hcChwID0+IHBbJ2lkJ10pXHJcbiAgICAgICAgLnN3aXRjaE1hcChyb29tSWQgPT5cclxuICAgICAgICAgICAgdGhpcy5yb29tU2VydmljZS5nZXRSb29tKHJvb21JZCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLnJvb21bJ25hbWUnXSA9IGRhdGFbJ25hbWUnXTtcclxuICAgICAgICB0aGlzLnJvb21bJ2Rlc2NyaXB0aW9uJ10gPSBkYXRhWydkZXNjcmlwdGlvbiddO1xyXG4gICAgICAgIHRoaXMucm9vbVsncHJpY2UnXSA9IGRhdGFbJ3ByaWNlJ107XHJcbiAgICAgICAgdGhpcy5yb29tW1wiaW1hZ2VVcmxcIl0gPSBkYXRhWydpbWFnZVVybCddO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5lZGl0Um9vbUZvcm0uc2V0VmFsdWUodGhpcy5yb29tKTtcclxuICAgICAgICB0aGlzLnJvb21bJ2lkJ10gPSBkYXRhWydpZCddOyAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6Rm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJvb21TZXJ2aWNlOlJvb21TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSlcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZWRpdCgpXHJcbiAgICB7ICAgIFxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yb29tWyduYW1lJ10gPSB0aGlzLmVkaXRSb29tRm9ybS52YWx1ZVsnbmFtZSddO1xyXG4gICAgICAgIHRoaXMucm9vbVsnZGVzY3JpcHRpb24nXSA9IHRoaXMuZWRpdFJvb21Gb3JtLnZhbHVlWydkZXNjcmlwdGlvbiddO1xyXG4gICAgICAgIHRoaXMucm9vbVsncHJpY2UnXSA9IHRoaXMuZWRpdFJvb21Gb3JtLnZhbHVlWydwcmljZSddO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvb20pO1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5yb29tU2VydmljZS5lZGl0Um9vbSh0aGlzLnJvb20pXHJcbiAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncm9vbURldGFpbHMnXSk7XHJcbiAgICAgICAgfSkgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
