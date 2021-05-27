import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {

  }

  getUser():Observable<User[]> {
   return this.httpClient.get<User[]>(this.url)
  }
}
