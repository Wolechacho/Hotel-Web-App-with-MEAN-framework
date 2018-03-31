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
var app_paginationcomponent_1 = require('./app.paginationcomponent');
var router_1 = require('@angular/router');
require('rxjs/Rx');
var room_service_1 = require('../app/room.service');
var IdExport_1 = require('./IdExport');
var RoomComponent = (function () {
    function RoomComponent(roomService, router) {
        this.roomService = roomService;
        this.router = router;
        this.newPageSize = 4;
        this.PagedRoomArray = [];
        this.RoomArray = [];
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomService.getRooms()
            .subscribe(function (rooms) {
            _this.RoomArray = rooms;
            _this.PagedRoomArray = _.take(_.rest(_this.RoomArray, 0), _this.newPageSize);
            console.log(_this.RoomArray);
            console.log(_this.PagedRoomArray);
        });
    };
    RoomComponent.prototype.OnPageChanged = function (page) {
        var startIndex = (page - 1) * this.newPageSize;
        this.PagedRoomArray = _.take(_.rest(this.RoomArray, startIndex), this.newPageSize);
        console.log(this.RoomArray);
        console.log(this.PagedRoomArray);
    };
    RoomComponent.prototype.bookRoom = function (roomId) {
        IdExport_1.Utility.id = roomId;
        console.log(IdExport_1.Utility.id);
        var command = ["book"];
        this.router.navigate(command);
    };
    RoomComponent = __decorate([
        core_1.Component({
            selector: 'room-component',
            template: "\n      <div class=\"row well text-center\" *ngFor=\"let room of PagedRoomArray\">\n\t    <div class=\"col-md-8\">\n            <img [src]=\"room.imageUrl\" class=\"img-responsive\">\n        </div>\n\t    <div class=\"col-md-4\">\n            <p class=\"room-name\">{{room.name | uppercase}}</p>\n            <p>{{room.description}}</p>\n            <p class=\"room-price\">{{room.price | currency:'USD':true}}</p>\n            <p>\n                <button type=\"submit\" class=\"btn btn-danger\" (click)=\"bookRoom(room.id)\">BOOK ROOM</button>\n            </p>\n        </div>\n    </div>\n    <pagination [items]=\"RoomArray\" [pageSize]=\"newPageSize\" (pageChanged)=\"OnPageChanged($event)\"></pagination>\n    ",
            providers: [room_service_1.RoomService],
            directives: [app_paginationcomponent_1.PaginationComponent]
        }), 
        __metadata('design:paramtypes', [room_service_1.RoomService, router_1.Router])
    ], RoomComponent);
    return RoomComponent;
}());
exports.RoomComponent = RoomComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb29tY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFDL0IsQ0FBQyxDQUQ2QztBQUM5Qyx3Q0FBa0MsMkJBQ2xDLENBQUMsQ0FENEQ7QUFDN0QsdUJBQXFCLGlCQUVyQixDQUFDLENBRnFDO0FBRXRDLFFBQU8sU0FFUCxDQUFDLENBRmU7QUFFaEIsNkJBQTBCLHFCQUMxQixDQUFDLENBRDhDO0FBQy9DLHlCQUFzQixZQUN0QixDQUFDLENBRGlDO0FBMEJsQztJQUtJLHVCQUFvQixXQUF5QixFQUFTLE1BQWU7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBSHJFLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFDaEMsY0FBUyxHQUFpQixFQUFFLENBQUM7SUFJcEMsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVJHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFFWixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtZQUN0QixLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxxQ0FBYSxHQUFwQixVQUFxQixJQUFXO1FBRTVCLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxVQUFVLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLGdDQUFRLEdBQWYsVUFBZ0IsTUFBYTtRQUV6QixrQkFBTyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbEMsQ0FBQztJQTNETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsZ0JBQWdCO1lBQ3pCLFFBQVEsRUFDUCxpdEJBZUE7WUFDRCxTQUFTLEVBQUcsQ0FBQywwQkFBVyxDQUFDO1lBQ3pCLFVBQVUsRUFBRyxDQUFDLDZDQUFtQixDQUFDO1NBQ3JDLENBQUM7O3FCQUFBO0lBdUNGLG9CQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtBQXJDWSxxQkFBYSxnQkFxQ3pCLENBQUEiLCJmaWxlIjoiYXBwLnJvb21jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7UGFnaW5hdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hcHAucGFnaW5hdGlvbmNvbXBvbmVudCdcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbmltcG9ydCAncnhqcy9SeCdcclxuXHJcbmltcG9ydCB7Um9vbVNlcnZpY2V9IGZyb20gJy4uL2FwcC9yb29tLnNlcnZpY2UnXHJcbmltcG9ydCB7VXRpbGl0eX0gZnJvbSAnLi9JZEV4cG9ydCdcclxuaW1wb3J0IHtSb29tfWZyb20gJy4uL2FwcC9yb29tLm1vZGVsJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3Rvcjoncm9vbS1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGU6XHJcbiAgICAgYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHdlbGwgdGV4dC1jZW50ZXJcIiAqbmdGb3I9XCJsZXQgcm9vbSBvZiBQYWdlZFJvb21BcnJheVwiPlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgPGltZyBbc3JjXT1cInJvb20uaW1hZ2VVcmxcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0ICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInJvb20tbmFtZVwiPnt7cm9vbS5uYW1lIHwgdXBwZXJjYXNlfX08L3A+XHJcbiAgICAgICAgICAgIDxwPnt7cm9vbS5kZXNjcmlwdGlvbn19PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInJvb20tcHJpY2VcIj57e3Jvb20ucHJpY2UgfCBjdXJyZW5jeTonVVNEJzp0cnVlfX08L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJib29rUm9vbShyb29tLmlkKVwiPkJPT0sgUk9PTTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwYWdpbmF0aW9uIFtpdGVtc109XCJSb29tQXJyYXlcIiBbcGFnZVNpemVdPVwibmV3UGFnZVNpemVcIiAocGFnZUNoYW5nZWQpPVwiT25QYWdlQ2hhbmdlZCgkZXZlbnQpXCI+PC9wYWdpbmF0aW9uPlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVycyA6IFtSb29tU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzIDogW1BhZ2luYXRpb25Db21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdFxyXG57XHJcbiAgICBuZXdQYWdlU2l6ZSA9IDQ7XHJcbiAgICBwdWJsaWMgUGFnZWRSb29tQXJyYXk6QXJyYXk8Um9vbT4gPSBbXTtcclxuICAgIHB1YmxpYyBSb29tQXJyYXkgOiBBcnJheTxSb29tPiA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb29tU2VydmljZSA6IFJvb21TZXJ2aWNlLHByaXZhdGUgcm91dGVyIDogUm91dGVyKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucm9vbVNlcnZpY2UuZ2V0Um9vbXMoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocm9vbXMgPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLlJvb21BcnJheSA9IHJvb21zXHJcbiAgICAgICAgICAgIHRoaXMuUGFnZWRSb29tQXJyYXkgPSBfLnRha2UoXy5yZXN0KHRoaXMuUm9vbUFycmF5LDApLHRoaXMubmV3UGFnZVNpemUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLlJvb21BcnJheSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUGFnZWRSb29tQXJyYXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBPblBhZ2VDaGFuZ2VkKHBhZ2U6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gKHBhZ2UgLSAxKSAqIHRoaXMubmV3UGFnZVNpemU7ICAgICAgIFxyXG4gICAgICAgIHRoaXMuUGFnZWRSb29tQXJyYXkgPSBfLnRha2UoXy5yZXN0KHRoaXMuUm9vbUFycmF5LHN0YXJ0SW5kZXgpLHRoaXMubmV3UGFnZVNpemUpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5Sb29tQXJyYXkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUGFnZWRSb29tQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBib29rUm9vbShyb29tSWQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgVXRpbGl0eS5pZCA9IHJvb21JZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhVdGlsaXR5LmlkKTtcclxuICAgICAgICBsZXQgY29tbWFuZCA9IFtcImJvb2tcIl07XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoY29tbWFuZCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
