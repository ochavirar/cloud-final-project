import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { UserService } from '../users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  signUpForm!: FormGroup;
  invalidLogin: boolean = false; 

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }
  onSignUp(){
    console.log("Post new user start");
    if (this.signUpForm.valid){
      this.userService.postNewUser(
        this.signUpForm.value.email,
        this.signUpForm.value.password,
        this.signUpForm.value.name,
        "", "", ""
      ).subscribe({
        next: (response:any) => {
          console.log(response);
          this.router.navigate(['/login']);
        },
        error: (err:any) => {
          console.log(err);
        }
      });
    } else {
      console.log("Not a valid input");
    }
    
  }

}
