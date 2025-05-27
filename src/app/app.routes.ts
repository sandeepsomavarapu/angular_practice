import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddempComponent } from './employees/addemp/addemp.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegistrationComponent },
    { path: "employees", component: EmployeesComponent },
    { path: "employees/addemp", component: AddempComponent }
];
