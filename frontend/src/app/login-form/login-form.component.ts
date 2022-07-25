import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }
@Output() changeRegistrationValueEvent =  new EventEmitter<boolean>();  
  ngOnInit(): void {
  
  }

  goToRegisterComponent(){
    console.log("hello");
    let newRegiterFormValue = true;
    this.changeRegistrationValueEvent.emit(newRegiterFormValue);
  }


 
}
