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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageSize = 10;
        this.pageChanged = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        this.currentPage = 1;
        this.pages = [];
        var noOfPages = Math.ceil(this.items.length / this.pageSize);
        for (var i = 1; i <= noOfPages; i++) {
            this.pages.push(i);
        }
    };
    PaginationComponent.prototype.onPrevious = function () {
        if (this.currentPage == 1)
            return;
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    };
    PaginationComponent.prototype.onNext = function () {
        if (this.currentPage == this.pages.length)
            return;
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    };
    PaginationComponent.prototype.setPage = function (page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    };
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            template: "\n            <nav class=\"text-center\" *ngIf=\"items.length > pageSize\">\n                <ul class=\"pagination pagination-md\">\n                    <li [class.disabled]=\"currentPage == 1\">\n                        <a (click)=\"onPrevious()\" aria-label=\"Previous\">\n                            <span aria-hidden=\"true\">&laquo;</span>\n                        </a>\n                    </li>\n                    <li *ngFor=\"let page of pages\" (click)=\"setPage(page)\">\n                        <a>{{page}}</a>\n                    </li>\n                    <li [class.disabled]=\"currentPage == pages.length\">\n                        <a (click)=\"onNext\" aria-label=\"Next\">\n                            <span aria-hidden=\"true\">&raquo;</span>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n    ",
            inputs: ['items', 'pageSize'],
            outputs: ['pageChanged']
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5wYWdpbmF0aW9uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEQsZUFFNUQsQ0FBQyxDQUYwRTtBQTZCM0U7SUFBQTtRQUdJLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQXNDckMsQ0FBQztJQWxDRyx5Q0FBVyxHQUFYO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsSUFBSSxTQUFTLEVBQUMsQ0FBQyxFQUFFLEVBQ2hDLENBQUM7WUFDRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUlNLHdDQUFVLEdBQWpCO1FBRUksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFBO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sb0NBQU0sR0FBYjtRQUVJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDekMsTUFBTSxDQUFBO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0scUNBQU8sR0FBZCxVQUFlLElBQVc7UUFFdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQXBFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUcsWUFBWTtZQUN2QixRQUFRLEVBQ1IseTJCQWtCQztZQUNELE1BQU0sRUFBQyxDQUFDLE9BQU8sRUFBQyxVQUFVLENBQUM7WUFDM0IsT0FBTyxFQUFDLENBQUMsYUFBYSxDQUFDO1NBQzFCLENBQUM7OzJCQUFBO0lBNkNGLDBCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDWSwyQkFBbUIsc0JBMEMvQixDQUFBIiwiZmlsZSI6ImFwcC5wYWdpbmF0aW9uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlcixPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ3BhZ2luYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6XHJcbiAgICBgXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gcGFnZVNpemVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24gcGFnaW5hdGlvbi1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3MuZGlzYWJsZWRdPVwiY3VycmVudFBhZ2UgPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25QcmV2aW91cygpXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNcIiAoY2xpY2spPVwic2V0UGFnZShwYWdlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57e3BhZ2V9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBbY2xhc3MuZGlzYWJsZWRdPVwiY3VycmVudFBhZ2UgPT0gcGFnZXMubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbk5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnJhcXVvOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6WydpdGVtcycsJ3BhZ2VTaXplJ10sXHJcbiAgICBvdXRwdXRzOlsncGFnZUNoYW5nZWQnXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzXHJcbntcclxuICAgIGl0ZW1zOltdO1xyXG4gICAgcGFnZVNpemU6bnVtYmVyID0gMTA7XHJcbiAgICBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHBhZ2VzOmFueVtdO1xyXG4gICAgY3VycmVudFBhZ2UgOiBudW1iZXI7XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMucGFnZXMgPSBbXTtcclxuICAgICAgICBsZXQgbm9PZlBhZ2VzID0gTWF0aC5jZWlsKHRoaXMuaXRlbXMubGVuZ3RoIC8gIHRoaXMucGFnZVNpemUpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDE7aSA8PSBub09mUGFnZXM7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBvblByZXZpb3VzKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFBhZ2UgPT0gMSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk5leHQoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50UGFnZSA9PSB0aGlzLnBhZ2VzLmxlbmd0aClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQYWdlKHBhZ2U6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VcclxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
