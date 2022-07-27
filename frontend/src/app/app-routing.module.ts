import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogRegParentComponent } from './log-reg-parent/log-reg-parent.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component'


const routes: Routes = [
  {
    path:'', component: LogRegParentComponent
  },
  {
    path: 'welcome', component: WelcomePageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
