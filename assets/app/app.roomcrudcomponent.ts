import {Component,OnInit} from '@angular/core'
import {Router,RouterLink} from '@angular/router'
import {RoomService} from './room.service'
import {Room}from '../app/room.model'

@Component({
    moduleId : module.id,
    selector : 'room-details',
    templateUrl: 'app.roomcrudtemplate.html',
    styles : [`
                tr td{
                    font-weight : bolder;
                }

                td button{
                    height : 35px;
                }
    `],
    providers : [RoomService]
})

export class RoomCrudComponent implements OnInit
{
    private roomList : Array<Room> = [];
    constructor(private roomservice :RoomService,private router:Router)
    {
        
    }
     ngOnInit()
     {
         this.roomservice.getRooms()
         .subscribe((rooms) => {
             this.roomList = rooms;
         })
     }

     public delete(roomId:string):void
     {
         this.roomservice.delete(roomId).subscribe(() => {
             this.router.navigate(['roomDetails']);
         })
     }

    
}