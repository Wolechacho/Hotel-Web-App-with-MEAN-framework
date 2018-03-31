import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    selector: 'thankYou',
    template : `
    <div class="alert alert-success thanks-info">
            <p>
                Thank you for staying with us 
                we hope to make your stay awesome and full of wonders
                Contact our administrator for more pleasurable experience
            </p>
            <p class="text-center">
                <button class="btn btn-addcolor" (click)="gotoHomePage()">HOME PAGE</button>
            </p>
    </div>
    `,
     styles:
            [`
                .thanks-info
                {
                    font-size : 25px;
                    padding:25px;
                    margin-top : 50px;

                }

                .btn-addcolor
                {
                    color:#18bc9c;
                    background-color:white;
                    width : 200px;
                }
            `]
    
       
})


export class ThankYouComponent
{
    constructor(private router:Router)
    {

    }

    public gotoHomePage():void
    {
        let command = [""]
        this.router.navigate(command);
    }
}