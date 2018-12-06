
import { Users } from './../models/users';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loading: boolean;
  data: [];
selectedUsers: Users;
users: Users[];

readonly URL_API = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {
    this.selectedUsers = new Users;

  }




getUsers() {
  return this.http.get(('http://localhost:3000/users'))
}

postUser(users: Users) {
  return this.http.post (this.URL_API, users);

}

putUser(data: Users) {
  return this.http.put (this.URL_API + `/${data._id}`, data);
}
deleteUser(_id: string) {
  return this.http.delete (this.URL_API + `/${_id}`);
}
getUser(_id: string) {
  this.loading = true;
  return this.http.get(('http://localhost:3000/users') + `/${_id}`);
}
getUsersDetails(username, password) {

return this.http.post('/register',{
username,
password
}).subscribe(data => {
  console.log(data, 'we  got it from server');
});
}
}
