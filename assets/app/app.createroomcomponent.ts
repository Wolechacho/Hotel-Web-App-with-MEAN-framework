import {Component} from '@angular/core'
import {FormBuilder,FormControlName,FormGroup,Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {FormValidator} from './form.validator'

import {Room} from './room.model'
import {RoomService} from './room.service'



@Component({
    moduleId : module.id,
    selector : 'create-room',
    templateUrl: 'app.createroomtemplate.html',
    providers : [RoomService]
})

export class CreateRoomComponent
{
    private newRoomForm : FormGroup;
    constructor(formBuilder:FormBuilder,
    private roomService:RoomService,
    private router:Router)
    {
        this.newRoomForm = formBuilder.group({
            name : ["",Validators.compose([Validators.required,Validators.minLength(5)])],
            description : ["",Validators.compose([Validators.required,Validators.minLength(10)])],
            price : ["",Validators.compose([Validators.required,FormValidator.priceRange])],
            imageUrl :["Chacho.png",Validators.compose([Validators.required])],
        })
    }

    public create()
    {    
        var elementValue = document.getElementById("upload").value;
        var replaced = "imgs/HImages/"+ elementValue.substr(12);

        console.log(replaced);
         console.log(this.newRoomForm);

        console.log(this.newRoomForm.value);
        

        this.newRoomForm.value["imageUrl"] = replaced;
        console.log(this.newRoomForm.value);
        console.log(this.newRoomForm);



        this.roomService.createRoom(this.newRoomForm.value)
        .subscribe((response) => {
        console.log(response);
         this.router.navigate(['roomDetails']);
        }) 
    }
}