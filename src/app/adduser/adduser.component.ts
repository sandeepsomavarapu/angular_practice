import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adduser',
  imports: [FormsModule, CommonModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  constructor(private myservice: UserService, private router: Router) { }//dependency injection



  onSubmit(addUser: User): void { // Changed return type to void
    console.log(addUser);
    this.myservice.addUser(addUser).subscribe(
      data => {
        alert(data); // Assuming the response contains a message property
        this.router.navigate(['/users']);
      },
      error => {
        console.error("Error adding user:", error);
        alert("Failed to add user. Please try again.");
      }
    );
  }
}

