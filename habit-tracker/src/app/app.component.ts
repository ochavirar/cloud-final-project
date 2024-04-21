import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { BrowserModule } from '@angular/platform-browser';
import { HabitsService } from './habits.service';
import { AuthService } from './auth.service';
import { UserService } from './users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [HabitsService,AuthService,UserService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'habit-tracker';
}
