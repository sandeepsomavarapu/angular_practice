import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  updateUser: User;
  path = "http://localhost:3000/users"
  constructor(private client: HttpClient) {

  }
  public getAllUsers() {
    console.log("ins service get Users");//headers
    return this.client.get<User>(this.path);
  }
  public addUser(addUser: User) {
    console.log("ins service add");
    console.log(addUser);
    return this.client.post(this.path, addUser);
  }
  public update(updateUser: User) {
    this.updateUser = updateUser;
  }
  public updateMethod() {
    return this.updateUser;
  }
  public onUpdate(updatedUser: User) {
    console.log("ins service update");

    return this.client.put("http://localhost:3000/users/" + updatedUser.id, updatedUser);
  }
  deleteUser(id: number) {
    console.log("ins service delete");
    return this.client.delete("http://localhost:3000/users/" + id);
  }


}

export class User {
  id: number;
  name: string;
  email: string;
}
