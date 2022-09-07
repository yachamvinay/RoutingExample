import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchUserService {
  apiUrl:string="http://localhost:3000/Users";

  constructor(private http:HttpClient) { }
  userList() {
    return this.http.get(this.apiUrl);
  }
}
