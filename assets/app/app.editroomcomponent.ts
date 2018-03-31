import {Component,OnInit} from '@angular/core'
import {FormBuilder,FormControlName,FormGroup,Validators,FormControl} from '@angular/forms'
import {Router,ActivatedRoute} from '@angular/router'
import {FormValidator} from './form.validator'

import {Room} from './room.model'
import {RoomService} from './room.service'
import {Observable} from 'rxjs/Observable'



@Component({
    moduleId : module.id,
    selector : 'edit-room',
    templateUrl: 'app.editroomtemplate.html',
    providers : [RoomService]

})

export class EditRoomComponent implements OnInit
{
    private editRoomForm : FormGroup;
    private room = {name:'',description:'',price:0,imageUrl:''};
    ngOnInit()
    {
         this.editRoomForm = this.formBuilder.group({
            name : ['',Validators.compose([Validators.required,Validators.minLength(5)])],
            description : ['',Validators.compose([Validators.required,Validators.minLength(10)])],
            price : ['',Validators.compose([Validators.required,FormValidator.priceRange])],
            imageUrl :['',Validators.compose([Validators.required])]
            })

        console.log(this.editRoomForm);
        this.activatedRoute.params
        .map(p => p['id'])
        .switchMap(roomId =>
            this.roomService.getRoom(roomId))
        .subscribe((data) => {

        console.log(data);
        this.room['name'] = data['name'];
        this.room['description'] = data['description'];
        this.room['price'] = data['price'];
        this.room["imageUrl"] = data['imageUrl'];


        this.editRoomForm.setValue(this.room);
        this.room['id'] = data['id'];         
        });
    }

    constructor(private formBuilder:FormBuilder,
    private roomService:RoomService,
    private router:Router,
    private activatedRoute:ActivatedRoute)
    {
    }

    public edit()
    {    


        this.room['name'] = this.editRoomForm.value['name'];
        this.room['description'] = this.editRoomForm.value['description'];
        this.room['price'] = this.editRoomForm.value['price'];

        console.log(this.room);
       
        this.roomService.editRoom(this.room)
        .subscribe((response) => {
        console.log(response);
         this.router.navigate(['roomDetails']);
        }) 
    }
}