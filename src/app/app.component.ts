import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuard } from './_guard/auth-guard';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  constructor(
    private _router: Router,
    private _auth: AuthGuard
  ){
    // verify has session
    if(!this._auth.canActivate()){
      this._router.navigate(['login']);
    }
  }

}
