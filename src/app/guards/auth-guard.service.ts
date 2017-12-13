import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate()
    : Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.me().then((user) => {
      if (!user) {
        this.router.navigate(['/auth']);
      } else {
        return true;
      }
    });
  }
}

