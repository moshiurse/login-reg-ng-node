import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-log-reg-parent',
  templateUrl: './log-reg-parent.component.html',
  styleUrls: ['./log-reg-parent.component.scss']
})
export class LogRegParentComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  loginFormOpen = true;
  registerFormOpen= false;
  authenticUser: any;

  changeLoginValue(data:any){
    
    this.loginFormOpen = data;
    this.registerFormOpen = false;
  }
  changeRegisterFormValue(data:any){
    
  this.registerFormOpen = data;
   this.loginFormOpen = false;
   
  }


}
