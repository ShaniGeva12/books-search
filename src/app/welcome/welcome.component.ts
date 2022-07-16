import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { WelcomeService } from './services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  
  welcomeForm!: FormGroup;

  subs: SubSink = new SubSink();

  constructor(
    private welcomeService: WelcomeService, 
    private router: Router, 
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    this.welcomeForm = this.fb.group({
      name: [ null,
        Validators.required
      ],
    });
  }

  onSubmit(){
    // this.booksService.addBook(<AddBookRequest>this.bookForm.value);
    this.welcomeService.setUsername(this.welcomeForm.controls.name.value);
    this.navigateToBooksSearch();
  }

  navigateToBooksSearch(){
    this.router.navigate(['/books']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
