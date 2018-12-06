
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { Users } from './../models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent implements OnInit {

  UserName = sessionStorage.getItem('username');
  today: number = Date.now();

  constructor(private authService: AuthService, private router: Router) {
  }

  logout() {
    if(confirm("Are you sure you wanna leave??"))
    sessionStorage.removeItem('username');
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    const username = sessionStorage.getItem('username');
    this.authService.getUser(username)
      .subscribe((res: Users) => {
        this.authService.selectedUsers = res;
      });
  }
  addUser(form: NgForm) {
    event.preventDefault();
    const user = Object.assign({}, form.value, { _id: sessionStorage.getItem('username') });
   
    this.authService.putUser(user)
      .subscribe(res => {
        console.log(res);
       
        this.router.navigate(['Resume']);
      });
  }
  getUser() {
    this.authService.getUsers()
      .subscribe(res => {
        this.authService.users = res as Users[];
        console.log(res);
      })
  }
  resetForm(form: NgForm) {
    if (form) {
      if(confirm("Are you sure to delete this resume??"))
      form.reset();
      
      this.authService.selectedUsers = new Users();
    }
  }
  addResume(form: NgForm) {
    event.preventDefault();
    this.authService.postUser(form.value)
      .subscribe(res => {
        this.router.navigate(['Resume'])
        this.resetForm(form);
      })
  }

  

};
