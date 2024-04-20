import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitsService {
  private apiUrl = 'https://txtex89254.execute-api.us-east-1.amazonaws.com/habits'; 

  constructor(private http: HttpClient) { 

  }

  getHabits(): Observable<any> { 
    return this.http.get<any>(this.apiUrl);
  }
}
