import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { WelcomeService } from '../welcome/services/welcome.service';

@Injectable({
  providedIn: 'root'
})
export class WelcomeGuard implements CanActivate {
  
  constructor(
    private router: Router, 
    private welcomeService: WelcomeService, ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.welcomeService.username$.pipe(
        map ((user: any)=> {
          if(user){
            return true;
          } else {
            return this.router.createUrlTree(['',])
          }
        })
      );
    return true;
  }
  
}
