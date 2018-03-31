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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var room_model_1 = require('./room.model');
var RoomService = (function () {
    function RoomService(http) {
        this.http = http;
    }
    RoomService.prototype.getRooms = function () {
        return this.http.get("http://localhost:3000/room/list")
            .map(function (response, index) {
            var jsonResponse = response.json();
            var room;
            var roomArray = [];
            for (var _i = 0, _a = jsonResponse.rooms; _i < _a.length; _i++) {
                var jroom = _a[_i];
                room = new room_model_1.Room();
                room.id = jroom._id;
                room.name = jroom.name;
                room.description = jroom.description;
                room.imageUrl = jroom.imageUrl;
                room.price = jroom.price;
                roomArray.push(room);
            }
            return roomArray;
        });
    };
    RoomService.prototype.createRoom = function (room) {
        var url = "http://localhost:3000/room/save";
        var body = JSON.stringify(room);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers });
    };
    RoomService.prototype.editRoom = function (room) {
        var url = "http://localhost:3000/room/update";
        var body = JSON.stringify(room);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put(url, body, { headers: headers });
    };
    RoomService.prototype.getRoom = function (roomId) {
        var editRoom = new room_model_1.Room();
        var url = "http://localhost:3000/room/edit/" + roomId;
        return this.http.get(url).map(function (response) {
            var jsonResponse = response.json();
            var room = jsonResponse.room;
            editRoom.id = room._id;
            editRoom.name = room.name;
            editRoom.description = room.description;
            editRoom.price = room.price;
            editRoom.imageUrl = room.imageUrl;
            return editRoom;
        });
    };
    RoomService.prototype.delete = function (id) {
        var url = "http://localhost:3000/room/delete/" + id;
        return this.http.delete(url);
    };
    RoomService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RoomService);
    return RoomService;
}());
exports.RoomService = RoomService;

//# sourceMappingURL=data:application/json;base64,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WUFBWSxDQUFDLElBQUksQ0FBQztZQUU3QixRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdkIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN2QyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBRU0sNEJBQU0sR0FBYixVQUFjLEVBQVM7UUFFbkIsSUFBSSxHQUFHLEdBQUcsb0NBQW9DLEdBQUMsRUFBRSxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBckVMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFzRWIsa0JBQUM7QUFBRCxDQXJFQSxBQXFFQyxJQUFBO0FBckVZLG1CQUFXLGNBcUV2QixDQUFBIiwiZmlsZSI6InJvb20uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtIdHRwLFJlc3BvbnNlLEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xyXG5pbXBvcnQgJ3J4anMvUngnXHJcblxyXG5pbXBvcnQge1Jvb219IGZyb20gJy4vcm9vbS5tb2RlbCdcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJvb21TZXJ2aWNlXHJcbntcclxuICAgIHByaXZhdGUgaGVhZGVyIDogSGVhZGVycztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSb29tcygpOk9ic2VydmFibGU8QXJyYXk8Um9vbT4+e1xyXG4gICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcm9vbS9saXN0XCIpXHJcbiAgICAgICAubWFwKChyZXNwb25zZTpSZXNwb25zZSxpbmRleDpudW1iZXIpID0+IHtcclxuICAgICAgICAgICBsZXQganNvblJlc3BvbnNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgIGxldCByb29tIDpSb29tO1xyXG4gICAgICAgICAgIGxldCByb29tQXJyYXkgOiBBcnJheTxSb29tPiA9IFtdO1xyXG4gICAgICAgICAgIGZvcihsZXQganJvb20gb2YganNvblJlc3BvbnNlLnJvb21zKVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgcm9vbSA9IG5ldyBSb29tKCk7XHJcbiAgICAgICAgICAgICAgIHJvb20uaWQgPSBqcm9vbS5faWQ7XHJcbiAgICAgICAgICAgICAgIHJvb20ubmFtZSA9IGpyb29tLm5hbWU7XHJcbiAgICAgICAgICAgICAgIHJvb20uZGVzY3JpcHRpb24gPSBqcm9vbS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgcm9vbS5pbWFnZVVybCA9IGpyb29tLmltYWdlVXJsO1xyXG4gICAgICAgICAgICAgICByb29tLnByaWNlID0ganJvb20ucHJpY2U7XHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgcm9vbUFycmF5LnB1c2gocm9vbSlcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgcmV0dXJuIHJvb21BcnJheTtcclxuICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVSb29tKHJvb206YW55KTpPYnNlcnZhYmxlPFJlc3BvbnNlPlxyXG4gICAge1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yb29tL3NhdmVcIjtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHJvb20pO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCxib2R5LHtoZWFkZXJzOmhlYWRlcnN9KTtcclxuICAgIH1cclxuXHJcbiAgICAgcHVibGljIGVkaXRSb29tKHJvb206YW55KTpPYnNlcnZhYmxlPFJlc3BvbnNlPlxyXG4gICAge1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yb29tL3VwZGF0ZVwiO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocm9vbSk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsYm9keSx7aGVhZGVyczpoZWFkZXJzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJvb20ocm9vbUlkOnN0cmluZyk6T2JzZXJ2YWJsZTxSb29tPlxyXG4gICAge1xyXG4gICAgICAgIGxldCBlZGl0Um9vbSA6IFJvb20gPSBuZXcgUm9vbSgpO1xyXG4gICAgICAgIGxldCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yb29tL2VkaXQvXCIrcm9vbUlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkubWFwKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQganNvblJlc3BvbnNlID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBsZXQgcm9vbSA9IGpzb25SZXNwb25zZS5yb29tO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBlZGl0Um9vbS5pZCA9IHJvb20uX2lkO1xyXG4gICAgICAgICAgICBlZGl0Um9vbS5uYW1lID0gcm9vbS5uYW1lO1xyXG4gICAgICAgICAgICBlZGl0Um9vbS5kZXNjcmlwdGlvbj0gcm9vbS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgZWRpdFJvb20ucHJpY2UgPSByb29tLnByaWNlO1xyXG4gICAgICAgICAgICBlZGl0Um9vbS5pbWFnZVVybCA9IHJvb20uaW1hZ2VVcmw7ICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBlZGl0Um9vbTsgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZShpZDpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Jvb20vZGVsZXRlL1wiK2lkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
