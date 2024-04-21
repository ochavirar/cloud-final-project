import { Component, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabitsService } from '../habits.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habit-creation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './habit-creation.component.html',
  styleUrl: './habit-creation.component.css'
})
export class HabitCreationComponent implements OnInit{
  habitForm!:FormGroup;
  invalidHabit: boolean = true;
  id:any = null;

  constructor(
    private formBuilder: FormBuilder,
    private habitsService: HabitsService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.habitForm = this.formBuilder.group({
      habitName: ['', Validators.required],
      habitDescription: ['', [Validators.required]],
      frequency: ['', [Validators.required]]
    });
  }

  onHabitCreation(){
    this.id = localStorage.getItem("userID");
    this.habitsService.createHabit(
      this.id,
      this.habitForm.value.habitName,
      this.habitForm.value.habitDescription,
      parseInt(this.habitForm.value.frequency)
    ).subscribe({
      next: (response:any) => {
        this.router.navigate(['habits']);
        console.log(response);
      },
      error: (err:any) => {
        console.error(err);
        this.invalidHabit = true;
        this.router.navigate(['habits']);
      }
    });
  }

  goBack(){
    this.router.navigate(['habits']);
  }

}
