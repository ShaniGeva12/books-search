import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  
  welcomeForm!: FormGroup;

  subs: SubSink = new SubSink();

  constructor(private router: Router, private fb: FormBuilder) { }

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
    this.navigateToBooks();
  }

  navigateToBooks(){
    // this.router.navigate(['/show-bands']);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
