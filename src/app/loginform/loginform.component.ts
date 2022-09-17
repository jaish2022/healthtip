import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { WEBSITE_NAME } from '../utils/contants';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
// export class LoginformComponent   implements OnInit  {
export class LoginformComponent {
  websitename = WEBSITE_NAME;
  showLoginForm:boolean = false;
  isFormSubmitted:boolean = false;

 login = new FormGroup({
  email: new FormControl("",
  [
    Validators.required,
    Validators.pattern('/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i')
  ]
  //  Validators.pattern()
   ),
  password: new FormControl("",
  [Validators.required,
  Validators.minLength(4)]),



 })
 get email(){
   return this.login.get('email');
 }
 get password(){
   return this.login.get('password')
 }
    
 showHideForm(){
   this.showLoginForm = !this.showLoginForm;
 }
  
 onsubmit(){
    if(!this.login.valid){
      this.isFormSubmitted = true;
      // alert('Error in form');
      console.log(this.login);
      return false;
    }
    return null;
  
  }
}