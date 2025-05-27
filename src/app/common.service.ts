import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  employees: Employee[];
  constructor() {
    this.employees = [
      new Employee(1, "suresh", 9000, "Developer", new Date("2025/05/22")),
      new Employee(2, "naresh", 14000, "Hr", new Date("2025/05/22")),
      new Employee(3, "ramesh", 21000, "Admin", new Date("2025/05/22")),
      new Employee(4, "rajesh", 26500, "TL", new Date("2025/05/22"))
    ];
  }

  getAllEmployees(): Employee[] {

    return this.employees;
  }

  sayHello() {
    console.log("from commonservice class method")
  }
}
export class Employee {
  eid: number;
  ename: string;
  esal: number;
  edesg: string;
  edoj: Date;
  constructor(eid: number, ename: string, esal: number, edesg: string, edoj: Date) {
    this.eid = eid;
    this.ename = ename;
    this.esal = esal;
    this.edesg = edesg;
    this.edoj = edoj;
  }
}
