import { Users } from './../../models/users';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  form = new FormGroup({

    username: new FormControl('', Validators.required),

    password: new FormControl('', Validators.required)
  });


  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit() {
  }





  LoginUser(form: NgForm) {
    this.loading = true;
    this.authservice.getUsers().subscribe((users: Users[]) => {

      const user = users.find(item => item.UserName === form.value.username && item.Password === form.value.password);
      if (user != null) {
        sessionStorage.setItem('username', user._id.toString());
        this.router.navigate(['/Profile']);
      } else {
        alert('Authentication failed try again');
        console.log('Authentication failed');
      }

    });

  }
}

