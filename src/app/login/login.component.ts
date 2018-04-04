import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AuthGuard } from '../_guards/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title,
        private _authGuard: AuthGuard
      ) {
        this.model.username = "test";
        this.model.password = "test";
      }

    ngOnInit() {
      if(this._authGuard.canActivate()){
        this.router.navigateByUrl("");
      }
      this._authGuard.toggleMenu(false);
      this.titleService.setTitle("Login - Senior X");
    }

    login(dados) {
      this.loading = true;
      this._authGuard.loggin(dados, 1000).then((res) => {
        this.loading = false;
        if(res){
          this.router.navigateByUrl("");
        }else{
          alert("Senha ou usuario invalido");
        }
      });
    }
}