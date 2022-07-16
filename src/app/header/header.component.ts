import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WelcomeService } from '../welcome/services/welcome.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username$: Observable<string> = this.welcomeService.username$;

  constructor(private welcomeService: WelcomeService, ) { }

  ngOnInit(): void {
  }

}
