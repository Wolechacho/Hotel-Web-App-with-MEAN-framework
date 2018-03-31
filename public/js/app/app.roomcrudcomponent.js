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
var room_service_1 = require('./room.service');
var RoomCrudComponent = (function () {
    function RoomCrudComponent(roomservice, router) {
        this.roomservice = roomservice;
        this.router = router;
        this.roomList = [];
    }
    RoomCrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomservice.getRooms()
            .subscribe(function (rooms) {
            _this.roomList = rooms;
        });
    };
    RoomCrudComponent.prototype.delete = function (roomId) {
        var _this = this;
        this.roomservice.delete(roomId).subscribe(function () {
            _this.router.navigate(['roomDetails']);
        });
    };
    RoomCrudComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'room-details',
            templateUrl: 'app.roomcrudtemplate.html',
            styles: ["\n                tr td{\n                    font-weight : bolder;\n                }\n\n                td button{\n                    height : 35px;\n                }\n    "],
            providers: [room_service_1.RoomService]
        }), 
        __metadata('design:paramtypes', [room_service_1.RoomService, router_1.Router])
    ], RoomCrudComponent);
    return RoomCrudComponent;
}());
exports.RoomCrudComponent = RoomCrudComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb29tY3J1ZGNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQy9CLENBQUMsQ0FENkM7QUFDOUMsdUJBQWdDLGlCQUNoQyxDQUFDLENBRGdEO0FBQ2pELDZCQUEwQixnQkFDMUIsQ0FBQyxDQUR5QztBQW1CMUM7SUFHSSwyQkFBb0IsV0FBd0IsRUFBUyxNQUFhO1FBQTlDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUQxRCxhQUFRLEdBQWlCLEVBQUUsQ0FBQztJQUlwQyxDQUFDO0lBQ0Esb0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBSkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7YUFDMUIsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUNiLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLGtDQUFNLEdBQWIsVUFBYyxNQUFhO1FBQTNCLGlCQUtDO1FBSEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFwQ047UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLFFBQVEsRUFBRyxjQUFjO1lBQ3pCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsTUFBTSxFQUFHLENBQUMsbUxBUVQsQ0FBQztZQUNGLFNBQVMsRUFBRyxDQUFDLDBCQUFXLENBQUM7U0FDNUIsQ0FBQzs7eUJBQUE7SUF5QkYsd0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHlCQUFpQixvQkF1QjdCLENBQUEiLCJmaWxlIjoiYXBwLnJvb21jcnVkY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1JvdXRlcixSb3V0ZXJMaW5rfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7Um9vbVNlcnZpY2V9IGZyb20gJy4vcm9vbS5zZXJ2aWNlJ1xyXG5pbXBvcnQge1Jvb219ZnJvbSAnLi4vYXBwL3Jvb20ubW9kZWwnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkIDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3IgOiAncm9vbS1kZXRhaWxzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnJvb21jcnVkdGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZXMgOiBbYFxyXG4gICAgICAgICAgICAgICAgdHIgdGR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQgOiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGQgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBgXSxcclxuICAgIHByb3ZpZGVycyA6IFtSb29tU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tQ3J1ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdFxyXG57XHJcbiAgICBwcml2YXRlIHJvb21MaXN0IDogQXJyYXk8Um9vbT4gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vbXNlcnZpY2UgOlJvb21TZXJ2aWNlLHByaXZhdGUgcm91dGVyOlJvdXRlcilcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICBuZ09uSW5pdCgpXHJcbiAgICAge1xyXG4gICAgICAgICB0aGlzLnJvb21zZXJ2aWNlLmdldFJvb21zKClcclxuICAgICAgICAgLnN1YnNjcmliZSgocm9vbXMpID0+IHtcclxuICAgICAgICAgICAgIHRoaXMucm9vbUxpc3QgPSByb29tcztcclxuICAgICAgICAgfSlcclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBkZWxldGUocm9vbUlkOnN0cmluZyk6dm9pZFxyXG4gICAgIHtcclxuICAgICAgICAgdGhpcy5yb29tc2VydmljZS5kZWxldGUocm9vbUlkKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydyb29tRGV0YWlscyddKTtcclxuICAgICAgICAgfSlcclxuICAgICB9XHJcblxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
