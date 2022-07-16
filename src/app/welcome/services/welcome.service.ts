import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  private _username$: BehaviorSubject<string> = new BehaviorSubject('');
  public username$: Observable<string> = this._username$.asObservable();

  constructor() {
    if (localStorage.length > 0) {
      this.readFromLocalStorage();
    } 
  }

  setUsername(name: string): void {
    this._username$.next(name);
    this.saveToLocalStorage(name);
  }

  readFromLocalStorage(){
    let user = localStorage.getItem('books-search-username');
    if(user){
      this._username$.next(user);
    }
  }

  saveToLocalStorage(name: string){
    localStorage.clear();
    localStorage.setItem('books-search-username' , name);
  }

}
