import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updateuser',
  imports: [FormsModule, CommonModule],
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent  {
  obj1: any;
  users: User[];
  message: string;
  constructor(private myservice: UserService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(updatedUser: User): any {
    return this.myservice.onUpdate(updatedUser).subscribe(data => {
      alert(data)
      this.router.navigate(['/users'])
    });
  }


}


