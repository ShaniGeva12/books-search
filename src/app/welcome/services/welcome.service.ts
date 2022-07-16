import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  private _username$: BehaviorSubject<string> = new BehaviorSubject('');
  public username$: Observable<string> = this._username$.asObservable();

  constructor() { }

  setUsername(name: string): void {
    this._username$.next(name);
  }
}
