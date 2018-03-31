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
var roomservicedetail_model_1 = require('./roomservicedetail.model');
var RoomDetailService = (function () {
    function RoomDetailService(http) {
        this.http = http;
    }
    RoomDetailService.prototype.saveRoomServiceDetails = function (data) {
        var body = JSON.stringify(data);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post("http://localhost:3000/roomServiceDetails/save", body, { headers: headers });
    };
    RoomDetailService.prototype.getRoomServiceDetails = function () {
        var url = "http://localhost:3000/roomServiceDetails/getDetails";
        return this.http.get(url)
            .map(function (response) {
            var data = response.json();
            var roomServiceSummary;
            var list = [];
            console.log(data.result);
            for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                var r = _a[_i];
                roomServiceSummary = new roomservicedetail_model_1.RoomServiceSummary();
                roomServiceSummary.id = r._id;
                roomServiceSummary.description = r.room.description;
                roomServiceSummary.firstName = r.customer.firstName;
                roomServiceSummary.lastName = r.customer.lastName;
                roomServiceSummary.roomName = r.room.name;
                list.push(roomServiceSummary);
            }
            console.log(list);
            return list;
        });
    };
    RoomDetailService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RoomDetailService);
    return RoomDetailService;
}());
exports.RoomDetailService = RoomDetailService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb21zZXJ2aWNlZGV0YWlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQ3pCLENBQUMsQ0FEdUM7QUFDeEMscUJBQW9DLGVBRXBDLENBQUMsQ0FGa0Q7QUFHbkQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUVqQix3Q0FBaUMsMkJBRWpDLENBQUMsQ0FGMkQ7QUFHNUQ7SUFHSSwyQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFHN0IsQ0FBQztJQUVNLGtEQUFzQixHQUE3QixVQUE4QixJQUFJO1FBRTNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUE7UUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLCtDQUErQyxFQUNwRSxJQUFJLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0saURBQXFCLEdBQTVCO1FBRUksSUFBSSxHQUFHLEdBQUcscURBQXFELENBQUE7UUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQyxRQUFRO1lBQ1YsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLElBQUksa0JBQXNDLENBQUE7WUFDMUMsSUFBSSxJQUFJLEdBQStCLEVBQUUsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixHQUFHLENBQUEsQ0FBVSxVQUFXLEVBQVgsS0FBQSxJQUFJLENBQUMsTUFBTSxFQUFYLGNBQVcsRUFBWCxJQUFXLENBQUM7Z0JBQXJCLElBQUksQ0FBQyxTQUFBO2dCQUVOLGtCQUFrQixHQUFHLElBQUksNENBQWtCLEVBQUUsQ0FBQTtnQkFDN0Msa0JBQWtCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzlCLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDcEQsa0JBQWtCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO2dCQUNwRCxrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ2xELGtCQUFrQixDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFFMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTFDTDtRQUFDLGlCQUFVLEVBQUU7O3lCQUFBO0lBMkNiLHdCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDWSx5QkFBaUIsb0JBMEM3QixDQUFBIiwiZmlsZSI6InJvb21zZXJ2aWNlZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtIdHRwLEhlYWRlcnMsUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnXHJcblxyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ1J4anMvT2JzZXJ2YWJsZSdcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7Um9vbVNlcnZpY2VTdW1tYXJ5fSBmcm9tICcuL3Jvb21zZXJ2aWNlZGV0YWlsLm1vZGVsJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUm9vbURldGFpbFNlcnZpY2Vcclxue1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVSb29tU2VydmljZURldGFpbHMoZGF0YSk6T2JzZXJ2YWJsZTxSZXNwb25zZT5cclxuICAgIHsgICAgXHJcbiAgICAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9KVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3Jvb21TZXJ2aWNlRGV0YWlscy9zYXZlXCIsXHJcbiAgICAgICAgICAgYm9keSx7aGVhZGVyczpoZWFkZXJzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJvb21TZXJ2aWNlRGV0YWlscygpOk9ic2VydmFibGU8QXJyYXk8Um9vbVNlcnZpY2VTdW1tYXJ5Pj5cclxuICAgIHtcclxuICAgICAgICBsZXQgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcm9vbVNlcnZpY2VEZXRhaWxzL2dldERldGFpbHNcIlxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAubWFwKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGxldCByb29tU2VydmljZVN1bW1hcnkgOlJvb21TZXJ2aWNlU3VtbWFyeVxyXG4gICAgICAgICAgICBsZXQgbGlzdCA6IEFycmF5PFJvb21TZXJ2aWNlU3VtbWFyeT4gPSBbXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgZm9yKGxldCByIG9mIGRhdGEucmVzdWx0KVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm9vbVNlcnZpY2VTdW1tYXJ5ID0gbmV3IFJvb21TZXJ2aWNlU3VtbWFyeSgpXHJcbiAgICAgICAgICAgICAgICByb29tU2VydmljZVN1bW1hcnkuaWQgPSByLl9pZDtcclxuICAgICAgICAgICAgICAgIHJvb21TZXJ2aWNlU3VtbWFyeS5kZXNjcmlwdGlvbiA9IHIucm9vbS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIHJvb21TZXJ2aWNlU3VtbWFyeS5maXJzdE5hbWUgPSByLmN1c3RvbWVyLmZpcnN0TmFtZTtcclxuICAgICAgICAgICAgICAgIHJvb21TZXJ2aWNlU3VtbWFyeS5sYXN0TmFtZSA9IHIuY3VzdG9tZXIubGFzdE5hbWU7XHJcbiAgICAgICAgICAgICAgICByb29tU2VydmljZVN1bW1hcnkucm9vbU5hbWUgPSByLnJvb20ubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gocm9vbVNlcnZpY2VTdW1tYXJ5KTtcclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0KTtcclxuICAgICAgICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
