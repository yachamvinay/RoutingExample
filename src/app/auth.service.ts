import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  private  isLoggin=false;
  constructor(){}


  userLogin(login:any):Observable<boolean>{
    if(login &&
    login.username &&
    login.password){
     const sampleJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
   
     return of(sampleJWT).pipe(
     map((token: string | undefined) => {
    if(!token){
      this.isLoggin=false;
      return false;
    }
    localStorage.setItem("access_token", token);
    const decodedUser = this.jwtHelper.decodeToken(token);
 
    this.userInfo.next(decodedUser);
    console.log(this.userInfo)
    this.isLoggin=true;
    return true;
     }));
    }
    return of(false);
  }

  public isUserLoggedIn()
  {
    return this.isLoggin;
  }
}
