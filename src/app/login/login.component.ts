import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { loginForm = {
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
