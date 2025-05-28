import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonService, Employee } from '../common.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employees',
  imports: [RouterOutlet,UpperCasePipe, CurrencyPipe, DatePipe,FormsModule,CommonModule,RouterLink],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  orgName = "cognizant";
  employees: Employee[];

  selectedEmployee: Employee | null = null;

  constructor(service:CommonService,userService:UserService) {
    this.employees=service.getAllEmployees();
    userService.getAllUsers().subscribe(response=>console.log(response))
  }

  delete(emp: Employee) {
    console.log("Employee Info", emp.eid);
    let confirmation = confirm("Are You Sure ? You Want To Delete a Row");
    if (confirmation) {
      let index = this.employees.indexOf(emp);
      console.log("Index :", index);
      this.employees.splice(index, 1);
      alert("Deleted Successfully!!!");
    }
  }

  edit(emp: Employee) {
    this.selectedEmployee = { ...emp };
  }

  updateEmployee() {
    if (this.selectedEmployee) {
      let index = this.employees.findIndex(e => e.eid === this.selectedEmployee.eid);
      if (index !== -1) {
        this.employees[index] = this.selectedEmployee;
        alert("Updated Successfully!!!");
        this.selectedEmployee = null;
      }
    }
  }

}

