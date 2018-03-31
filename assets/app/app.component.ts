import { Component } from '@angular/core';
import {NavBarComponent} from './app.navbarcomponent'

import {RouterOutlet} from '@angular/router'


@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <navComponent></navComponent>
    <div class="main-container">
        <router-outlet></router-outlet>      
    </div>
    `,
    directives:[NavBarComponent,RouterOutlet]
})
export class AppComponent {
    
}