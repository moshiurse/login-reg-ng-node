import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  
  constructor(public loginService: LoginServiceService) { }

  ngOnInit(): void {
  }
  authenticUser = this.loginService.authenticuser;


}
