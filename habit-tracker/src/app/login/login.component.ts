import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  invalidLogin: boolean = false; 

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.validateUser( 
        this.loginForm.value.email, 
      ).subscribe({
        next: (response) => {
          if (response.password == this.loginForm.value.password) { 
            localStorage.setItem("userID", response.user_id);
            this.router.navigate(['/habits']); 
          } else {
            this.invalidLogin = true; 
          }
        },
        error: (err) => {
          console.error(err);
          this.invalidLogin = true;
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']); 
  }
  goToHabits() {
    this.router.navigate(['/habits']);
  }
}
