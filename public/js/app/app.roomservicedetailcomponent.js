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
var roomservicedetails_1 = require('./roomservicedetails');
require('rxjs/Rx');
var RoomServiceDetail = (function () {
    function RoomServiceDetail(roomDetailService) {
        this.roomDetailService = roomDetailService;
        this.list = [];
    }
    RoomServiceDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.roomDetailService.getRoomServiceDetails()
            .subscribe(function (details) { return _this.list = details; });
    };
    RoomServiceDetail = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'roomServiceDetails',
            templateUrl: 'app.roomdetailstemplate.html',
            providers: [roomservicedetails_1.RoomDetailService]
        }), 
        __metadata('design:paramtypes', [roomservicedetails_1.RoomDetailService])
    ], RoomServiceDetail);
    return RoomServiceDetail;
}());
exports.RoomServiceDetail = RoomServiceDetail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb29tc2VydmljZWRldGFpbGNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xELG1DQUFpQyxzQkFBc0IsQ0FBQyxDQUFBO0FBR3hELFFBQU8sU0FBUyxDQUFDLENBQUE7QUFRakI7SUFHSSwyQkFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFEL0MsU0FBSSxHQUErQixFQUFFLENBQUM7SUFJOUMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFJRTtRQUZHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRTthQUM3QyxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFsQk47UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUcsQ0FBQyxzQ0FBaUIsQ0FBQztTQUNsQyxDQUFDOzt5QkFBQTtJQWNGLHdCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSx5QkFBaUIsb0JBYTdCLENBQUEiLCJmaWxlIjoiYXBwLnJvb21zZXJ2aWNlZGV0YWlsY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFJvb21EZXRhaWxTZXJ2aWNlfSBmcm9tICcuL3Jvb21zZXJ2aWNlZGV0YWlscyc7XHJcbmltcG9ydCB7Um9vbVNlcnZpY2VTdW1tYXJ5fSBmcm9tICcuL3Jvb21zZXJ2aWNlZGV0YWlsLm1vZGVsJ1xyXG5cclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAncm9vbVNlcnZpY2VEZXRhaWxzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnJvb21kZXRhaWxzdGVtcGxhdGUuaHRtbCcsXHJcbiAgICBwcm92aWRlcnMgOiBbUm9vbURldGFpbFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb29tU2VydmljZURldGFpbCBpbXBsZW1lbnRzIE9uSW5pdCBcclxue1xyXG4gICAgcHJpdmF0ZSBsaXN0IDogQXJyYXk8Um9vbVNlcnZpY2VTdW1tYXJ5PiA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb29tRGV0YWlsU2VydmljZTpSb29tRGV0YWlsU2VydmljZSkgXHJcbiAgICB7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpXHJcbiAgICAge1xyXG4gICAgICAgICB0aGlzLnJvb21EZXRhaWxTZXJ2aWNlLmdldFJvb21TZXJ2aWNlRGV0YWlscygpXHJcbiAgICAgICAgIC5zdWJzY3JpYmUoZGV0YWlscyA9PiB0aGlzLmxpc3QgPSBkZXRhaWxzKTtcclxuICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
