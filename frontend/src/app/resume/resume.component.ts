
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],

})
export class ResumeComponent implements OnInit {

  UserName = sessionStorage.getItem('username');

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getResume();
  }
  logout() {
    if(confirm("Are you sure you wanna leave??"))
    sessionStorage.removeItem('username');
    this.router.navigate(['/']);
  };
  getResume() {
    const username = sessionStorage.getItem('username');
    this.authService.getUser(username)
      .subscribe((res: Users) => {
        this.authService.selectedUsers = res;
      });
  }
  getResumes() {
    this.authService.getUsers()
      .subscribe(res => {
        this.authService.users = res as Users[];
        console.log(res);
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.authService.selectedUsers = new Users();
    }
  }
  addResume(form: NgForm) {
    this.authService.putUser(form.value)
      .subscribe(res => {
        this.router.navigate(['Profile'])
        this.resetForm(form);
      });
  }
}

