import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  updateUser: User;
  path = "http://localhost:8080/users"
  constructor(private client: HttpClient) {

  }
  public getAllUsers() {
    console.log("ins service get Users");//headers
    return this.client.get<User>(this.path);
  }
 
    public addUser(addUser: User): Observable<string> {
        console.log("Inside service add");
        console.log(addUser);
        return this.client.post(this.path, addUser, { responseType: 'text' });
      }
    

  public update(updateUser: User) {
    this.updateUser = updateUser;
  }
  public updateMethod() {
    return this.updateUser;
  }
  public onUpdate(updatedUser: User) {
    console.log("ins service update");
    return this.client.put("http://localhost:8080/users", updatedUser);
  }
  deleteUser(id: number) {
    console.log("ins service delete");
    return this.client.delete("http://localhost:8080/users/" + id,{ responseType: 'text' });
  }


}

export class User {
  id: number;
  name: string;
  email: string;
}
