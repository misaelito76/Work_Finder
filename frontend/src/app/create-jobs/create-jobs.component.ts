import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { NgForm } from '@angular/forms';
import { Jobs } from '../models/jobs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.css'],
  providers: [JobsService]
})
export class CreateJobsComponent implements OnInit {

  constructor(private jobsService: JobsService, private router: Router) { }

  logout() {
    if(confirm("Are you sure you wanna leave??"))
    localStorage.removeItem('username');
    this.router.navigate(['/'])
  }

  ngOnInit() {
    this.getJobs();
  }
  addJob(form: NgForm) {
    event.preventDefault()
    this.jobsService.postJob(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        this.router.navigate(['JobsList'])
      });

  }
  getJobs() {
    this.jobsService.getJobs()
      .subscribe(res => {
        this.jobsService.jobs = res as Jobs[];
        console.log(res);
      })
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.jobsService.selectedJobs = new Jobs();
    }
  }

}
