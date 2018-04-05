import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  visibleMenu = true;

  constructor(
    private router: Router
  ) { }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }
  canActivate(route ?: ActivatedRouteSnapshot, state ?: RouterStateSnapshot): boolean {
    if (localStorage.getItem('database')) {
      // logged in so return true
      return true;
    }else{
      // not logged in so redirect to login page with the return url
      // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }

  loggin(data, delay){
    return new Promise(resolve => {
      if(data.username == "test" && data.password == "test"){
        // setTimeout(function() {
        let dataJson = {
        nome: 'Pedro Hymino',
        email: 'pedro@gmail.com'
        };
        localStorage.setItem("database", JSON.stringify(dataJson));
        setTimeout(function() {
          resolve(true);
        }, delay);
      }else{
        setTimeout(function() {
          resolve(false);
        }, delay);
      }
    });
  }

  logoff(){
    if (confirm("Deseja sair ?")) {
      localStorage.removeItem("database");
      this.router.navigateByUrl("login");
    }
  }


  toggleMenu(condition){
    this.visibleMenu = condition;
  }
}
