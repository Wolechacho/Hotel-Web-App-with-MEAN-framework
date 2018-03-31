import {Injectable} from '@angular/core'
import {Http,Headers,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class CustomerService
{
    constructor(private http:Http)
    {

    }
    public saveData(data):Observable<Response>
    {
        let url = "http://localhost:3000/customer/save";
        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type':'application/json'});
        return this.http.post(url,body,{headers:headers});
    }
}