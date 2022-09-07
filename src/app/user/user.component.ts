import { FetchUserService } from './../fetch-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  constructor(private fetchUser:FetchUserService){}
  UserList:any=[];
 
  displayedColumnsnames:string[]=['id','Name','Password','MotherName','phone','Address'];

  ngOnInit(): void {
    this.UserList=this.fetchUser.userList();
  }

}
