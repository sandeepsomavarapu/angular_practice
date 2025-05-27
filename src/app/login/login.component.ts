import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  validate(form:NgForm){
    console.log("logged in....with mail id",form.value.loginEmail)
    console.log("logged in....with password",form.value.loginPassword)
  }
}
