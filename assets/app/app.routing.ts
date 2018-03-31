import {Routes,RouterModule,Route} from '@angular/router'
import {HomeComponent} from './app.homecomponent'
import {RoomComponent} from './app.roomcomponent'
import {BookFormComponent} from './app.book-form.component'
import {ThankYouComponent} from './app.thankyoucomponent'
import {LoginComponent} from './app.logincomponent'
import {AdminModuleComponent} from './app.adminmodule'
import {RoomCrudComponent} from './app.roomcrudcomponent'
import {CreateRoomComponent} from './app.createroomcomponent'
import {EditRoomComponent} from './app.editroomcomponent'
import {RoomServiceDetail} from './app.roomservicedetailcomponent'


const applicationRoutes :Routes = 
[
    {path:'',component:HomeComponent},
    {path:'rooms',component:RoomComponent},
    {path:'book',component:BookFormComponent} ,
    {path:'thankyou',component:ThankYouComponent},
    {path:'login',component:LoginComponent},
    {path:'admin-module',component:AdminModuleComponent},
    {path:'roomDetails',component:RoomCrudComponent},
    {path:'create',component:CreateRoomComponent},
    {path:'edit/:id',component:EditRoomComponent},
    {path:'roomServiceDetails',component:RoomServiceDetail}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(applicationRoutes);