import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routing,appRoutingProviders} from './app.routing';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './app.homecomponent';
import { RoomComponent }  from './app.roomcomponent';
import {BookFormComponent} from './app.book-form.component'
import {ThankYouComponent} from './app.thankyoucomponent'
import {LoginComponent} from './app.logincomponent'
import {AdminModuleComponent} from './app.adminmodule'
import {RoomCrudComponent} from './app.roomcrudcomponent'
import {CreateRoomComponent} from './app.createroomcomponent'
import {EditRoomComponent} from './app.editroomcomponent'
import {RoomServiceDetail} from './app.roomservicedetailcomponent'


@NgModule({
  imports:      [BrowserModule,HttpModule,ReactiveFormsModule,routing],
  declarations:     [AppComponent,
                    HomeComponent,
                    RoomComponent,
                    BookFormComponent,
                    ThankYouComponent,
                    LoginComponent,
                    AdminModuleComponent,
                    RoomCrudComponent,
                    CreateRoomComponent,
                    EditRoomComponent,
                    RoomServiceDetail],
  providers :   [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule
{ 
}
