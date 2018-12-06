import { Users } from './../../models/users';

import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';
import { NgForm,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[AuthService]

})
export class SignUpComponent implements OnInit {

  form = new FormGroup({

    UserName: new FormControl('',Validators.required),
  
    Password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)]),
   

      FullName: new FormControl('',Validators.required),
    
      Email: new FormControl('',Validators.email)
      });

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  
  }
  addUser(form:NgForm){
    event.preventDefault()
    this.authService.postUser(form.value)
    .subscribe(res=>{
      console.log(res);
      this.router.navigate(['/login']);
     this.resetForm(form);

    });
 
  }
  getUsers(){
    this.authService.getUsers()
    .subscribe(res=>{
this.authService.users=res as Users[];
console.log(res);
    })
  }
  resetForm(form?:NgForm){
    if(form)  {
      form.reset();
      this.authService.selectedUsers=new Users();
    }
  }
 
}