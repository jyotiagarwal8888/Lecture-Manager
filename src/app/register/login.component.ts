import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
})


export class loginComponent implements OnInit{
    login_form: FormGroup;
    constructor(){}

    ngOnInit(){
        
        this.login_form = new FormGroup({
            'email' : new FormControl(null, [Validators.required, Validators.email]),
            'password' : new FormControl(null, Validators.required)
        });
    }

    onLogin(){

    }

}