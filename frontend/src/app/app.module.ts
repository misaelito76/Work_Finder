import { LoginGuard } from './user/login.guard';
import { NoLoginGuard } from './user/no-login.guard';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { RouterModule,Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule }from '@angular/forms'
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import{JobsService} from './services/jobs.service';
import{AuthService} from './services/auth.service';
import { JobListComponent } from './job-list/job-list.component';
import {SignUpComponent} from './user/sign-up/sign-up.component'
import {LoginComponent} from './user/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { ResumeComponent } from './resume/resume.component';
import { CommonModule } from '@angular/common';


const routes:Routes=[
  {
    path: 'Home',
    component: HomeComponent
    },
    
    {
      path: '',
      component: HomeComponent
      },
      {
        path: 'SignUp',
        component: SignUpComponent
    
      },


  {
    path: 'login',
    component: LoginComponent,canActivate:[NoLoginGuard]
    
  },
 

{
    path: 'JobsList',
    component: JobListComponent
  },
  {
    path: 'CreateJobs/:UserName',
    component: CreateJobsComponent, canActivate:[LoginGuard]
  },
  {
    path: 'CreateJobs',
    component: CreateJobsComponent, canActivate:[LoginGuard]
  },
  {
    path: 'Profile',
    component: ProfileComponent, canActivate:[LoginGuard]
  },
  {
    path: 'Resume',
    component:ResumeComponent, canActivate:[LoginGuard]
  },

  {
    path: '**',
    component: NotFoundComponent
  },





];







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   CreateJobsComponent,
   
    JobListComponent,
    LoginComponent,
    SignUpComponent,
    NotFoundComponent,
    ProfileComponent,
    ResumeComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule , BrowserAnimationsModule,CommonModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [JobsService,AuthService, LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
