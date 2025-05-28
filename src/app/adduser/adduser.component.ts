import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adduser',
  imports: [FormsModule,CommonModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  constructor(private myservice: UserService, private router: Router) { }//dependency injection


  onSubmit(addUser: User): any {
    console.log(addUser);
    this.myservice.addUser(addUser).subscribe(data => {
      alert("employee added successfully" + data);
      this.router.navigate(['/users']);
    });
  }
}
