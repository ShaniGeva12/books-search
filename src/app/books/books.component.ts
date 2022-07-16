import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  searchForm!: FormGroup;

  subs: SubSink = new SubSink();

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    this.searchForm = this.fb.group({
      booksSearch: [ null,
        Validators.required
      ],
    });
  }
  onSubmit(){
  }

  navigateToBooksSearch(){
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
