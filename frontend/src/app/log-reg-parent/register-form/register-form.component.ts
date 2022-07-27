import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }
  @Output() changeLoginValueEvent = new EventEmitter<any>(); 
  ngOnInit(): void {
  }


  changeLoginFormValue(){
       let newLoginValue = true;
      
       this.changeLoginValueEvent.emit(newLoginValue);
  }
}
