import {Component} from '@angular/core'
import {Router} from '@angular/router'
@Component({
    selector : 'adminModule',
    template:
    `
        <div class="alert alert-info" id="message-container">
            <p id="admin-message" class="text-center">
                CHOOSE THE MODULE TO OPERATE ON
            </p>
            <p class="text-center">
                <button class="btn btn-success" (click)="gotoRoomDetails()">ROOM MODULE</button>
                <button class="btn btn-success" (click)="gotoRoomServiceDetails()">ROOM SERVICE MODULE</button>
            </p>
        </div>
    `,
    styles:[`
            #admin-message{
                font-size:25px;
                padding:25px;
            }
            #message-container{
                margin-top : 70px;
            }
    `]
})

export class AdminModuleComponent
{
    constructor(private router:Router)
    {

    }

    public gotoRoomDetails():void
    {
        this.router.navigate(["roomDetails"]);
    }

    gotoRoomServiceDetails():void
    {
         this.router.navigate(["roomServiceDetails"]);
    }
}