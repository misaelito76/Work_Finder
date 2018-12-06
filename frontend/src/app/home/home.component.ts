import { Component, OnInit } from '@angular/core';

import { Router,Event,NavigationStart,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showSpinner=true;
  constructor(private router:Router){
    this.router.events.subscribe((routerEvent:Event)=>
    
    {if( routerEvent instanceof NavigationStart){
      this.showSpinner=true;
    }
    {if(  routerEvent instanceof NavigationEnd){
      this.showSpinner=false;
    }

    
  }
    }
    )}

  isAuthenticated(): boolean {
    debugger;
    if (sessionStorage.getItem('username') !== null && sessionStorage.getItem('username') !== undefined) {
      return true;
    }    
    return false;
  }

 
  logout(){
    if(confirm("Are you sure you wanna leave??"))
    sessionStorage.removeItem('username');
    this.router.navigate([''])
  }

  ngOnInit() {
  }

}
