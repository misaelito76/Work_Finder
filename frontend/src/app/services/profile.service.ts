import { SignUpComponent } from './../user/sign-up/sign-up.component';
import { Users } from './../models/users';

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
selectedProfile:Users;
profile:Users[];

readonly URL_API='http://localhost:3000/register/resume';
  constructor(private http:HttpClient) { 
    this.selectedProfile = new Users();

  }




getProfile(){
  return this.http.get(this.URL_API)
}

postProfile(profile:Users){
  return this.http.post (this.URL_API,profile)
}
putProfile(profile:Users){
  return this.http.put (this.URL_API+`/${profile._id}`, profile)
}
deleteProfile(_id:string){
  return this.http.delete (this.URL_API+`/${_id}`);
}
}
