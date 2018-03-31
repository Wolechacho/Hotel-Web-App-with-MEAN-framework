import {Injectable} from '@angular/core'
import {Http,Response,Headers} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

import {Room} from './room.model'

@Injectable()
export class RoomService
{
    private header : Headers;
    constructor(private http:Http)
    {
    }

    public getRooms():Observable<Array<Room>>{
       return this.http.get("http://localhost:3000/room/list")
       .map((response:Response,index:number) => {
           let jsonResponse = response.json();
           let room :Room;
           let roomArray : Array<Room> = [];
           for(let jroom of jsonResponse.rooms)
           {
               room = new Room();
               room.id = jroom._id;
               room.name = jroom.name;
               room.description = jroom.description;
               room.imageUrl = jroom.imageUrl;
               room.price = jroom.price;

               
               roomArray.push(room)
           }
           return roomArray;
       });
    }

    public createRoom(room:any):Observable<Response>
    {
        let url = "http://localhost:3000/room/save";
        let body = JSON.stringify(room);
        let headers = new Headers({'Content-Type':'application/json'});
       return this.http.post(url,body,{headers:headers});
    }

     public editRoom(room:any):Observable<Response>
    {
        let url = "http://localhost:3000/room/update";
        let body = JSON.stringify(room);
        let headers = new Headers({'Content-Type':'application/json'});
       return this.http.put(url,body,{headers:headers});
    }

    public getRoom(roomId:string):Observable<Room>
    {
        let editRoom : Room = new Room();
        let url = "http://localhost:3000/room/edit/"+roomId;
        
        return this.http.get(url).map((response) => {
            let jsonResponse = response.json();
            let room = jsonResponse.room;
           
            editRoom.id = room._id;
            editRoom.name = room.name;
            editRoom.description= room.description;
            editRoom.price = room.price;
            editRoom.imageUrl = room.imageUrl;      
            return editRoom;    
        })
         
    }

    public delete(id:string)
    {
        let url = "http://localhost:3000/room/delete/"+id;
        return this.http.delete(url);
    }
}