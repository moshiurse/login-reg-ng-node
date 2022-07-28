import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  public authenticUser: any;

  constructor(public loginService: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['']);
      this.loginService.loginValue = true;

    }
    else {



      this.authenticUser = localStorage.getItem('user')
      this.authenticUser = JSON.parse(this.authenticUser);
    }





  }


  logOut() {

    localStorage.removeItem('user');
    this.router.navigate(['']);
    this.loginService.loginValue = true;
  }

}
