
import { Component, OnInit } from '@angular/core';
import{JobsService} from '../services/jobs.service';
import { Jobs } from '../models/jobs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  providers:[JobsService]
})
export class JobListComponent implements OnInit {

  constructor( private jobsService: JobsService) { }

  ngOnInit() {
    this.getJobs();
  }
  
  isAuthenticated(): boolean {
    debugger;
    if (sessionStorage.getItem('username') !== null && sessionStorage.getItem('username') !== undefined) {
      return true;
    }    
    return false;
  }
  getJobs(){
    this.jobsService.getJobs()
    .subscribe(res=>{
this.jobsService.jobs=res as Jobs[];
console.log(res);
    });
}
resetForm(form?:NgForm){
  if(form)  {
    form.reset();
    this.jobsService.selectedJobs=new Jobs();
  }
}
addJob(form:NgForm){
  this.jobsService.postJob(form.value)
  .subscribe(res=>{
    
   this.resetForm(form);

  })}};
