import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://txtex89254.execute-api.us-east-1.amazonaws.com/users/auth';

  constructor(private http: HttpClient) { }

  validateUser(email: string): Observable<any> {
    return this.http.get(this.apiUrl+"/"+email);
  }
}
