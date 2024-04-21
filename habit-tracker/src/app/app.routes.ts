import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HabitsComponent } from './habits/habits.component';
import { HabitCreationComponent } from './habit-creation/habit-creation.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'habits', component: HabitsComponent },
  { path: 'habits-create', component: HabitCreationComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Redirige a login si ninguna ruta coincide
];
