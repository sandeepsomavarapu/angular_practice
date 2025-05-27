import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService, Employee } from '../../common.service';
@Component({
  selector: 'app-addemp',
  imports: [FormsModule],
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {

employee:Employee

constructor(private emp:CommonService,private roouter:Router ){}
 
addEmployee(emp:NgForm){
    console.log(emp.value)
    this.employee=emp.value
    this.emp.employees.push(this.employee)
    this.roouter.navigate(["/employees"]);
    console.log(this.employee)
  }

}
