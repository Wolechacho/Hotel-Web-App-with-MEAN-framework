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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var LoginComponent = (function () {
    function LoginComponent(formbuilder, http, router) {
        this.http = http;
        this.router = router;
        this.errorMessage = "";
        this.loginFormGroup = formbuilder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.loginFormGroup);
        console.log(this.loginFormGroup.value);
        var body = this.loginFormGroup.value;
        var jsonBody = JSON.stringify(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.http.post("http://localhost:3000/login", jsonBody, { headers: headers })
            .subscribe(function (response) {
            console.log(response);
            var jsonResponse = response.json();
            var statusMessage = jsonResponse.status;
            if (statusMessage === "success") {
                _this.router.navigate(['admin-module']);
            }
            else {
                _this.errorMessage = "Username or password Invalid";
                console.log(_this.errorMessage);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'app.logintemplate.html',
            styles: ["\n        .error\n        {\n            color : red;\n            font-weight : bold;\n            font-size : 20px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, http_1.Http, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5sb2dpbmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQ3hCLENBQUMsQ0FEc0M7QUFDdkMscUJBQTJCLGVBQzNCLENBQUMsQ0FEeUM7QUFDMUMsdUJBQXFCLGlCQUNyQixDQUFDLENBRHFDO0FBQ3RDLHNCQUEyRSxnQkFFM0UsQ0FBQyxDQUYwRjtBQWdCM0Y7SUFJSSx3QkFBWSxXQUF1QixFQUFTLElBQVMsRUFBUyxNQUFjO1FBQWhDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRHBFLGlCQUFZLEdBQVksRUFBRSxDQUFDO1FBRy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwQyxRQUFRLEVBQUcsQ0FBQyxFQUFFLEVBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsUUFBUSxFQUFHLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQUEsaUJBd0JDO1FBdEJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBQyxRQUFRLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUM7YUFDdkUsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxJQUFJLGFBQWEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEVBQUUsQ0FBQSxDQUFDLGFBQWEsS0FBSyxTQUFTLENBQUMsQ0FDL0IsQ0FBQztnQkFDSSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUVELElBQUksQ0FDSixDQUFDO2dCQUNHLEtBQUksQ0FBQyxZQUFZLEdBQUcsOEJBQThCLENBQUM7Z0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25DLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFsREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLFFBQVEsRUFBRyxPQUFPO1lBQ2xCLFdBQVcsRUFBRyx3QkFBd0I7WUFDdEMsTUFBTSxFQUFDLENBQUMsd0lBT1AsQ0FBQztTQUNMLENBQUM7O3NCQUFBO0lBdUNGLHFCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtBQXJDWSxzQkFBYyxpQkFxQzFCLENBQUEiLCJmaWxlIjoiYXBwLmxvZ2luY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7SHR0cCxIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJ1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLEZvcm1Db250cm9sLEZvcm1Db250cm9sTmFtZSxGb3JtR3JvdXAsVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkIDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3IgOiAnbG9naW4nLFxyXG4gICAgdGVtcGxhdGVVcmwgOiAnYXBwLmxvZ2ludGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZXM6W2BcclxuICAgICAgICAuZXJyb3JcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yIDogcmVkO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodCA6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudFxyXG57XHJcbiAgICBwcml2YXRlIGxvZ2luRm9ybUdyb3VwIDogRm9ybUdyb3VwXHJcbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZSA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtYnVpbGRlcjpGb3JtQnVpbGRlcixwcml2YXRlIGh0dHA6SHR0cCxwcml2YXRlIHJvdXRlciA6Um91dGVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubG9naW5Gb3JtR3JvdXAgPSBmb3JtYnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lIDogWycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwYXNzd29yZCA6IFsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubG9naW5Gb3JtR3JvdXApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubG9naW5Gb3JtR3JvdXAudmFsdWUpO1xyXG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5sb2dpbkZvcm1Hcm91cC52YWx1ZTtcclxuICAgICAgICBsZXQganNvbkJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpblwiLGpzb25Cb2R5LHtoZWFkZXJzOmhlYWRlcnN9KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbGV0IGpzb25SZXNwb25zZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgbGV0IHN0YXR1c01lc3NhZ2UgPSBqc29uUmVzcG9uc2Uuc3RhdHVzO1xyXG4gICAgICAgICAgICBpZihzdGF0dXNNZXNzYWdlID09PSBcInN1Y2Nlc3NcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYWRtaW4tbW9kdWxlJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlVzZXJuYW1lIG9yIHBhc3N3b3JkIEludmFsaWRcIjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZXJyb3JNZXNzYWdlKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
