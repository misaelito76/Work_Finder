import { Jobs } from './../models/jobs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class JobsService {
selectedJobs:Jobs;
jobs:Jobs[];

readonly URL_API='http://localhost:3000/api/jobs';
  constructor(private http:HttpClient) { 
    this.selectedJobs = new Jobs();

  }




getJobs(){
  return this.http.get(this.URL_API)
}

postJob(job:Jobs){
  return this.http.post (this.URL_API,job)
}
putJobs(job:Jobs){
  return this.http.put (this.URL_API+`/${job._id}`, job)
}
deleteJob(_id:string){
  return this.http.delete (this.URL_API+`/${_id}`);
}
}
