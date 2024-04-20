import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfileComponent } from './user-profile/user-profile.component'; // Define un modelo de datos si necesario

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://txtex89254.execute-api.us-east-1.amazonaws.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserProfileComponent[]> {
    return this.http.get<UserProfileComponent[]>(this.apiUrl);
  }
}
