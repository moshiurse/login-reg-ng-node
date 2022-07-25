import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginFormOpen = false;
  registerFormOpen= true;

  changeLoginValue(data:any){
    this.loginFormOpen = data;
    this.registerFormOpen = false;
  }
  changeRegisterFormValue(data:any){
  this.registerFormOpen = data;
   this.loginFormOpen = false;
   
  }

}

