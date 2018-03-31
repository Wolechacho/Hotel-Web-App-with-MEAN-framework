import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {Http,Headers} from '@angular/http'
import {FormValidator} from './form.validator'
import {FormBuilder,Validators,FormGroup,FormControl,FormControlName} from '@angular/forms'

import {CustomerService} from './customer.service'
import {RoomDetailService} from './roomservicedetails'

import {Utility} from './IdExport'
import 'rxjs/Rx'

@Component({
    moduleId: module.id,
    selector:'book-form',
    templateUrl:'app.book-form.template.html',
    styles: [`
                .error
                {
                    color:red;
                    font-weight:bold;
                }`
            ],
    providers: [CustomerService,RoomDetailService]
})

export class BookFormComponent
{
    private bookForm : FormGroup
    constructor(formBuilder:FormBuilder,
    private customerService:CustomerService,
    private http:Http,private roomdetailService:RoomDetailService
    ,private router :Router)
    { 
       this.bookForm = formBuilder.group({
            firstName:['',Validators.compose([
                Validators.required,
                Validators.minLength(3)])],

            lastName:['',Validators.compose([
                Validators.required,
                Validators.minLength(3)])],

            age:['',Validators.compose([
                Validators.required,
                FormValidator.mustbeAboveEighteen])],

            address:['',Validators.compose([
                Validators.required,
                Validators.minLength(3)])],

           gender:['',
           Validators.compose([
               Validators.required,FormValidator.chooseGender])]
        })
    }
    public save():void
    {
        let transformedData = {};
        let data = this.bookForm.value;
        data["id"] = Utility.id;

        this.customerService
        .saveData(data)
        .subscribe((newResult) =>
        {
            let jsonResponse = newResult.json();
            var newdata = jsonResponse.result;
            var date = new Date();
            transformedData = {customer_id:newdata._id,date :date,room_id : Utility.id};   
            this.roomdetailService.saveRoomServiceDetails(transformedData)
             .subscribe((d)=>
             {
                console.log(d);
                this.router.navigate(['thankyou']);
            });
                
        });

       
    }

}

