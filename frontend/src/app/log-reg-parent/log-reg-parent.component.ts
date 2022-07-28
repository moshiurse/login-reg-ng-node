import { Component, OnInit, Output } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-log-reg-parent',
  templateUrl: './log-reg-parent.component.html',
  styleUrls: ['./log-reg-parent.component.scss']
})
export class LogRegParentComponent implements OnInit {

  constructor(public loginService: LoginServiceService) { }
  
  ngOnInit(): void {
  
  if(this.loginService.loginValue !== ''){
      this.loginFormOpen = this.loginService.loginValue
  }
    
  }
  
  loginFormOpen = false;
  registerFormOpen= true;
  authenticUser: any;
  
  changeLoginValue(data1:any){
    
    this.loginFormOpen = data1;
   
    this.registerFormOpen = false;
  }
  changeRegisterFormValue(data:any){
    
  this.registerFormOpen = data;
   this.loginFormOpen = false;
   
  }


}
