import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css'
})
export class HabitsComponent {
  constructor(private router: Router) { }

  goToProfile() {
    this.router.navigate(['/user-profile']);
  }
}
