import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddempComponent } from './employees/addemp/addemp.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegistrationComponent },
    { path: "employees", component: EmployeesComponent },
    { path: "employees/addemp", component: AddempComponent },
    { path: "users", component: ListusersComponent },
    { path: "updateUser", component: UpdateuserComponent },
    { path: "users/addUser", component: AdduserComponent },
    { path: "parent", component: ParentComponent },
    { path: "child", component: ChildComponent },

];
