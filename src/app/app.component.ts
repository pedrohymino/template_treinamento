import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from './_guards/index';
import { AppRoutingModule } from './app.routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _authGuard: AuthGuard,
    public _appRouter : AppRoutingModule
  ){
    // verify has session
    if(!this._authGuard.canActivate()){
      this.router.navigate(['login']);
    }
  }
  
} 