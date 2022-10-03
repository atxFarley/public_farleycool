import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { isAbstractType } from 'graphql';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return Auth.currentAuthenticatedUser({
       bypassCache: false
      }).then((cognitoUser: any) => {
       console.log("cognito user: " + cognitoUser);
       console.log("cognitoUser.username: " + cognitoUser.username);
       return true;
     }).catch(function(error)
     {
      return false;
     }
     );
  

  }


}
