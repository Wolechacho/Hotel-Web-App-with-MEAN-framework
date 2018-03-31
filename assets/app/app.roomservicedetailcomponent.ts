import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoomDetailService} from './roomservicedetails';
import {RoomServiceSummary} from './roomservicedetail.model'

import 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'roomServiceDetails',
    templateUrl: 'app.roomdetailstemplate.html',
    providers : [RoomDetailService]
})
export class RoomServiceDetail implements OnInit 
{
    private list : Array<RoomServiceSummary> = [];
    constructor(private roomDetailService:RoomDetailService) 
    { 

    }

    ngOnInit()
     {
         this.roomDetailService.getRoomServiceDetails()
         .subscribe(details => this.list = details);
     }
}