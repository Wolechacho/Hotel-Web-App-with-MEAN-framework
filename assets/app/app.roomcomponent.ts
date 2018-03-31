import {Component,OnInit} from '@angular/core'
import {PaginationComponent} from './app.paginationcomponent'
import {Router} from '@angular/router'

import 'rxjs/Rx'

import {RoomService} from '../app/room.service'
import {Utility} from './IdExport'
import {Room}from '../app/room.model'

@Component({
    selector:'room-component',
    template:
     `
      <div class="row well text-center" *ngFor="let room of PagedRoomArray">
	    <div class="col-md-8">
            <img [src]="room.imageUrl" class="img-responsive">
        </div>
	    <div class="col-md-4">
            <p class="room-name">{{room.name | uppercase}}</p>
            <p>{{room.description}}</p>
            <p class="room-price">{{room.price | currency:'USD':true}}</p>
            <p>
                <button type="submit" class="btn btn-danger" (click)="bookRoom(room.id)">BOOK ROOM</button>
            </p>
        </div>
    </div>
    <pagination [items]="RoomArray" [pageSize]="newPageSize" (pageChanged)="OnPageChanged($event)"></pagination>
    `,
    providers : [RoomService],
    directives : [PaginationComponent]
})

export class RoomComponent implements OnInit
{
    newPageSize = 4;
    public PagedRoomArray:Array<Room> = [];
    public RoomArray : Array<Room> = [];
    constructor(private roomService : RoomService,private router : Router)
    {
        
    }
    ngOnInit()
    {
        this.roomService.getRooms()
        .subscribe(rooms => 
        {
            this.RoomArray = rooms
            this.PagedRoomArray = _.take(_.rest(this.RoomArray,0),this.newPageSize);
            console.log(this.RoomArray);
            console.log(this.PagedRoomArray);
        });
    }

    public OnPageChanged(page:number)
    {
        let startIndex = (page - 1) * this.newPageSize;       
        this.PagedRoomArray = _.take(_.rest(this.RoomArray,startIndex),this.newPageSize)
        console.log(this.RoomArray);
        console.log(this.PagedRoomArray);
    }

    public bookRoom(roomId:number):void
    {
        Utility.id = roomId;
        console.log(Utility.id);
        let command = ["book"];
        this.router.navigate(command);
        
    }
}