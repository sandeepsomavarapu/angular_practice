import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,LoginComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 orgname:string="Cognizant"
 countryName:string="India"
 isLoggedIn=false

 constructor(private router:Router,private commonService:CommonService)
 {
  
 }
 logout()
 {
  this.isLoggedIn=true
  alert("logged out successfully")
  this.commonService.sayHello()
  this.router.navigate(["/login"])
 }
}
