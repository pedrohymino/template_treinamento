import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthGuard } from '../_guards/auth.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private titleService: Title,
    private _authGuard : AuthGuard
  ) {
  }

  ngOnInit() {
    // this._authGuard.toggleMenu(true);
    this._authGuard.visibleMenu = true;
    this.titleService.setTitle("Dashboard");
  }

}
