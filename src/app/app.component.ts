import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { loginForm = {
  username: '',
  password: '',
 };
 constructor(private authService:AuthService,private router:Router){}
 ngOnInit(): void {}

 userLogin() {
  this.authService.userLogin(this.loginForm)
  .subscribe(
  (value) => {
   if(value){
    this.router.navigate(['dashboard']);
   }else{
    alert('failed');
   }
   },
  (error)=>{
  alert('failed error');
   }
  );
 }
}
