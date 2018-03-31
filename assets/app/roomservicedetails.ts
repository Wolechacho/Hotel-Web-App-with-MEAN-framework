import {Injectable} from '@angular/core'
import {Http,Headers,Response} from '@angular/http'

import {Observable} from 'Rxjs/Observable'
import 'rxjs/Rx';

import {RoomServiceSummary} from './roomservicedetail.model'

@Injectable()
export class RoomDetailService
{
    
    constructor(private http:Http)
    {

    }

    public saveRoomServiceDetails(data):Observable<Response>
    {    
           let body = JSON.stringify(data);
           console.log(body);
           var headers = new Headers({'Content-Type':'application/json'})
          return this.http.post("http://localhost:3000/roomServiceDetails/save",
           body,{headers:headers});
    }

    public getRoomServiceDetails():Observable<Array<RoomServiceSummary>>
    {
        let url = "http://localhost:3000/roomServiceDetails/getDetails"
        return this.http.get(url)
        .map((response)=>{
            let data = response.json();
            let roomServiceSummary :RoomServiceSummary
            let list : Array<RoomServiceSummary> = [];
            console.log(data.result);
             for(let r of data.result)
             {
                roomServiceSummary = new RoomServiceSummary()
                roomServiceSummary.id = r._id;
                roomServiceSummary.description = r.room.description;
                roomServiceSummary.firstName = r.customer.firstName;
                roomServiceSummary.lastName = r.customer.lastName;
                roomServiceSummary.roomName = r.room.name;

                list.push(roomServiceSummary);
             }

             console.log(list);
             return list;
        })
    }
}