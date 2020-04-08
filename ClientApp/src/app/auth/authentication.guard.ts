import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivateChild {
  constructor(private router: Router,
              private authService: AuthenticationService){}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if(this.authService.authenticated){
        return true;
      }else{
        this.authService.callbackUrl = route.url.toString();
        this.router.navigateByUrl("/admin/login");
        return false;
      }
  }
  
}
