import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder,FormGroup, Validators,FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  

constructor(private router: Router, public loginService: LoginServiceService) { }
@Output() changeRegistrationValueEvent =  new EventEmitter<boolean>(); 

  ngOnInit(): void {
  
  }

  userData = [
    {
    userName: 'Moshiur',
    passward: '1234'
    },
    {
    userName: 'Rakib',
    passward: '4321'
    }
];

  goToRegisterComponent(){
    console.log("hello");
    let newRegiterFormValue = true;
    this.changeRegistrationValueEvent.emit(newRegiterFormValue);
  }

  public loginForm = new FormGroup({
    userName          : new FormControl('', Validators.required),
    passward         : new FormControl('', Validators.required),
   
  })
  
  
  dataMatching(){

    let username = this.loginForm.value.userName;
    let passward = this.loginForm.value.passward;

    let user = this.userData.find(user => (user.userName == username && user.passward == passward));
    if(!user){
    alert("User Not found");
    }else{
     
      this.loginService.authenticuser = user;
      this.router.navigate(['welcome'])
      
    }
   
   }

   
   

  //  this.router.navigate(['welcome'])

 
}
