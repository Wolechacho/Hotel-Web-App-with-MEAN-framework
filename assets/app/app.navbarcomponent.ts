import {Component} from '@angular/core'
import {RouterLink,RouterLinkActive} from '@angular/router'
// import {Http,Response} from '@angular/http'
// import 'rxjs/Rx'


@Component({
    moduleId: module.id,
    selector:'navComponent',
    templateUrl:'app.navbartemplate.html' ,
    directives: [RouterLink,RouterLinkActive]    
})

export class NavBarComponent
{
    // public save()
    // {
    //    this.http.post('http://localhost:3000/saveAdmin',{})
    //    .subscribe(response => console.log(response));
    // }   
}