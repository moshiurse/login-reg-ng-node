import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  existUserList: any;

  constructor(public loginService: LoginServiceService) { }
  @Output() changeLoginValueEvent = new EventEmitter<any>();
  ngOnInit(): void {

    localStorage.setItem('userList',JSON.stringify(this.userList));
  }

  public registrationForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassWord: new FormControl('',Validators.required)
  })
  newLoginValue: any
  isPassWordMatched = true;
  isNameValid:any
  registeredUserList: any
  userList = this.loginService.userList


  changeLoginFormValue() {

    this.newLoginValue = true;
    this.changeLoginValueEvent.emit(this.newLoginValue);
  }
  nameCheck(inputUserName: any) {

     this.existUserList = localStorage.getItem('userList')
     this.existUserList = JSON.parse(this.existUserList);
     if( this.existUserList.length !== 0){
     
      
         let user = this.existUserList.find( (user:any) =>(user.userName === inputUserName))
        
         if(user){
           console.log(user);
           this.isNameValid = false;
           
         }
         else{
          this.isNameValid = false;
         }
     }
     else{
      console.log("hello");
      
      
      console.log(this.existUserList);
     }
    //  this.existUserList.find( existu => (existu.userName == inputUserName));
     
  }
  emailCheck() {

  }
  passwardMatching(confirmPassWordValue: any) {

    if (confirmPassWordValue === this.registrationForm.value.password) {
      this.isPassWordMatched = true;
    }
    else {
      this.isPassWordMatched = false;
    }

  }

  registrationUserDtaCollect() {
    

   this.userList.push({userName: this.registrationForm.value.userName, email: this.registrationForm.value.email, password: this.registrationForm.value.password})
   localStorage.setItem('userList',JSON.stringify(this.userList) )
  
   this.registrationForm.reset();

  }
}
