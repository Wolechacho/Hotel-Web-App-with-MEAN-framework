import {Component} from '@angular/core'
import {Http,Headers} from '@angular/http'
import {Router} from '@angular/router'
import {FormBuilder,FormControl,FormControlName,FormGroup,Validators} from '@angular/forms'

@Component({
    moduleId : module.id,
    selector : 'login',
    templateUrl : 'app.logintemplate.html',
    styles:[`
        .error
        {
            color : red;
            font-weight : bold;
            font-size : 20px;
        }
    `]
})

export class LoginComponent
{
    private loginFormGroup : FormGroup
    private errorMessage : string = "";
    constructor(formbuilder:FormBuilder,private http:Http,private router :Router)
    {
        this.loginFormGroup = formbuilder.group({
            username : ['',Validators.required],
            password : ['',Validators.required]
        })
    }

    public login():void
    {
        console.log(this.loginFormGroup);
        console.log(this.loginFormGroup.value);
        let body = this.loginFormGroup.value;
        let jsonBody = JSON.stringify(body);
        let headers = new Headers({'Content-Type':'application/json'});
        this.http.post("http://localhost:3000/login",jsonBody,{headers:headers})
        .subscribe((response) => {
            console.log(response);
            let jsonResponse = response.json();
            let statusMessage = jsonResponse.status;
            if(statusMessage === "success")
            {
                 this.router.navigate(['admin-module']);
            }
           
            else
            {
                this.errorMessage = "Username or password Invalid";
                console.log(this.errorMessage);           
            }
            
        });
    }
}