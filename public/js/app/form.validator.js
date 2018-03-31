"use strict";
var FormValidator = (function () {
    function FormValidator() {
    }
    FormValidator.mustbeAboveEighteen = function (formControl) {
        if (formControl.value < 18)
            return { mustbeAboveEighteen: true };
        return null;
    };
    FormValidator.chooseGender = function (formControl) {
        if (formControl.value == "Choose")
            return { chooseGender: true };
        return null;
    };
    FormValidator.priceRange = function (formControl) {
        if (formControl.value < 100)
            return { priceRange: true };
        return null;
    };
    return FormValidator;
}());
exports.FormValidator = FormValidator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0udmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUFBO0lBd0JBLENBQUM7SUF0QmlCLGlDQUFtQixHQUFqQyxVQUFrQyxXQUF1QjtRQUVyRCxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxJQUFJLEVBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFYSwwQkFBWSxHQUExQixVQUEyQixXQUF1QjtRQUU5QyxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQztZQUNqQyxNQUFNLENBQUMsRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRWEsd0JBQVUsR0FBeEIsVUFBeUIsV0FBdUI7UUFFNUMsRUFBRSxDQUFBLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDM0IsTUFBTSxDQUFDLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdMLG9CQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSxxQkFBYSxnQkF3QnpCLENBQUEiLCJmaWxlIjoiZm9ybS52YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgbXVzdGJlQWJvdmVFaWdodGVlbihmb3JtQ29udHJvbDpGb3JtQ29udHJvbCk6YW55XHJcbiAgICB7XHJcbiAgICAgICAgaWYoZm9ybUNvbnRyb2wudmFsdWUgPCAxOClcclxuICAgICAgICByZXR1cm4ge211c3RiZUFib3ZlRWlnaHRlZW46dHJ1ZX07XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjaG9vc2VHZW5kZXIoZm9ybUNvbnRyb2w6Rm9ybUNvbnRyb2wpOmFueVxyXG4gICAge1xyXG4gICAgICAgIGlmKGZvcm1Db250cm9sLnZhbHVlID09IFwiQ2hvb3NlXCIpXHJcbiAgICAgICAgcmV0dXJuIHtjaG9vc2VHZW5kZXI6dHJ1ZX07XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcmljZVJhbmdlKGZvcm1Db250cm9sOkZvcm1Db250cm9sKTphbnlcclxuICAgIHtcclxuICAgICAgICBpZihmb3JtQ29udHJvbC52YWx1ZSA8IDEwMClcclxuICAgICAgICByZXR1cm4ge3ByaWNlUmFuZ2U6dHJ1ZX07XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
