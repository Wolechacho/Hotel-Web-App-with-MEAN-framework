import {FormControl} from '@angular/forms'

export class FormValidator
{
    public static mustbeAboveEighteen(formControl:FormControl):any
    {
        if(formControl.value < 18)
        return {mustbeAboveEighteen:true};
        return null;
    }

    public static chooseGender(formControl:FormControl):any
    {
        if(formControl.value == "Choose")
        return {chooseGender:true};
        return null;
    }

    public static priceRange(formControl:FormControl):any
    {
        if(formControl.value < 100)
        return {priceRange:true};
        return null;
    }

    
}