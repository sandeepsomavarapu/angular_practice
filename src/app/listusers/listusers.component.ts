import { Component } from '@angular/core';
import { User, UserService } from '../user.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listusers',
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './listusers.component.html',
  styleUrl: './listusers.component.css'
})
export class ListusersComponent {
  message: string;
  users: User[];
  filteredUser: User[] = [];
  searchText = "";
  error = null;
  constructor(private myservice: UserService, private router: Router) {
    this.myservice.getAllUsers().subscribe(
      response => this.handleSuccessfulResponse(response)
      ,
      error => { this.error = error.message }
    );
  }
  handleSuccessfulResponse(response) {
    console.log(response)
    this.users = response;
    //  this.filteredEmployees=this.employees;
  }
  update(updateUser: User) {
    this.myservice.update(updateUser);
    this.router.navigate(['/updateUser']); //updating the employee
  }
  delete(deleteUser: User): any {
    var selction = confirm("Are you sure !!")
    if (selction == true) {
      this.users.splice(this.users.indexOf(deleteUser), 1);
      this.myservice.deleteUser(deleteUser.id).subscribe(data => {
        alert(data);
      });
    }
    this.router.navigate(['/users']);
  }

}
