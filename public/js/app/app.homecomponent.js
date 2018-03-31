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
var app_carouselcomponent_1 = require('./app.carouselcomponent');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'homeTemplate',
            template: "\n        <carouselImage></carouselImage>\n        <div class=\"row well text-center\">\n\t    <div class=\"col-md-8\">\n            <img src=\"imgs/HImages/hotel1.jpg\" class=\"img-responsive\">\n        </div>\n\t    <div class=\"col-md-4\">\n            <p  class=\"room-name\">\n            Etoile de Sahile\n            </p>\n            <p>\n                Very Nice hotel to be\n            </p>\n            <p class=\"room-price\">\n                $500.00\n            </p>\n            <p>\n                <button type=\"submit\" class=\"btn btn-danger\">BOOK HOTEL</button>\n            </p>\n        </div>\n    </div>\n     <div class=\"row well  text-center\">\n\t    <div class=\"col-md-7\">\n            <img src=\"imgs/HImages/hotel2.jpg\" class=\"img-responsive\">\n        </div>\n\t    <div class=\"col-md-5\">\n            <p class=\"room-name\">\n                Nice Es Prangue\n            </p>\n            <p>\n               Your need, our Care\n            </p>\n            <p class=\"room-price\">\n                $400.00\n            </p>\n\n            <p>\n                <button type=\"submit\" class=\"btn btn-danger\">BOOK HOTEL</button>\n            </p>\n        </div>\n    </div>\n    ",
            directives: [app_carouselcomponent_1.CarouselComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5ob21lY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFDeEIsQ0FBQyxDQURzQztBQUN2QyxzQ0FBZ0MseUJBRWhDLENBQUMsQ0FGd0Q7QUFrRHpEO0lBQUE7SUFHQSxDQUFDO0lBbkREO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxjQUFjO1lBQ3ZCLFFBQVEsRUFDUixndENBeUNDO1lBQ0QsVUFBVSxFQUFDLENBQUMseUNBQWlCLENBQUM7U0FDakMsQ0FBQzs7cUJBQUE7SUFLRixvQkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFkscUJBQWEsZ0JBR3pCLENBQUEiLCJmaWxlIjoiYXBwLmhvbWVjb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtDYXJvdXNlbENvbXBvbmVudH0gZnJvbSAnLi9hcHAuY2Fyb3VzZWxjb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidob21lVGVtcGxhdGUnLFxyXG4gICAgdGVtcGxhdGU6XHJcbiAgICBgXHJcbiAgICAgICAgPGNhcm91c2VsSW1hZ2U+PC9jYXJvdXNlbEltYWdlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgd2VsbCB0ZXh0LWNlbnRlclwiPlxyXG5cdCAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWdzL0hJbWFnZXMvaG90ZWwxLmpwZ1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICA8L2Rpdj5cclxuXHQgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgIDxwICBjbGFzcz1cInJvb20tbmFtZVwiPlxyXG4gICAgICAgICAgICBFdG9pbGUgZGUgU2FoaWxlXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBWZXJ5IE5pY2UgaG90ZWwgdG8gYmVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInJvb20tcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICQ1MDAuMDBcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIj5CT09LIEhPVEVMPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgIDxkaXYgY2xhc3M9XCJyb3cgd2VsbCAgdGV4dC1jZW50ZXJcIj5cclxuXHQgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1ncy9ISW1hZ2VzL2hvdGVsMi5qcGdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblx0ICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInJvb20tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgTmljZSBFcyBQcmFuZ3VlXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgIFlvdXIgbmVlZCwgb3VyIENhcmVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInJvb20tcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICQ0MDAuMDBcclxuICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+Qk9PSyBIT1RFTDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltDYXJvdXNlbENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50XHJcbntcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
