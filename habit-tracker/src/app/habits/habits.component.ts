import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HabitsService } from '../habits.service'; 
import { UserService } from '../users.service';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {
  habits: any[] = [];
  profile: any = null;
  id:any = null;
  userName:string = "";
  constructor(
    private habitsService: HabitsService, 
    private router: Router,
    private usersService: UserService
  ) { }

  ngOnInit() {
    this.id = localStorage.getItem("userID");
    this.usersService.getUserByID(this.id).subscribe({
      next: (response:any) => {
        this.userName = response.name;
      },
      error: (err:any) => {
        console.log(err);
      }
    });

    this.loadHabits();
  }

  loadHabits() {
    this.habitsService.getHabitsByUser(this.id).subscribe({
      next: (data:any) => {
        this.habits = data;
        console.log(this.habits);
      },
      error: (error:any) => {
        console.error('Error fetching habits:', error);
      }
    });
  }

  goToCreateHabit(){
    this.router.navigate(['habits-create']);
  }

  goToProfile() {
    this.router.navigate(['/user-profile']);
  }
}