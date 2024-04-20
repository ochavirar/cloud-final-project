import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HabitsService } from '../habits.service'; 

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [CommonModule],  // Only import CommonModule here
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {
  habits: any[] = [];

  constructor(private habitsService: HabitsService, private router: Router) { }

  ngOnInit() {
    this.loadHabits();
  }

  loadHabits() {
    this.habitsService.getHabits().subscribe({
      next: (data) => {
        this.habits = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching habits:', error);
      }
    });
  }

  goToProfile() {
    this.router.navigate(['/user-profile']);
  }
}