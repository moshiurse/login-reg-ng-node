import { Injectable } from '@angular/core';
interface User{
  userName: any,
  email:any,
  password: any
}
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() {}

authenticuser:any;
loginValue:any
userList:User[]=[];
}
