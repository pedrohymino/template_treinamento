import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule, NavigationEnd } from '@angular/router';

import { AuthGuard } from './_guards/index';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ReportComponent } from './report/report.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, 
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard] 
    },
    {
        path: 'list',
        component: ListComponent,
        canActivate: [AuthGuard] 
    },
    {
        path: 'report',
        component: ReportComponent,
        canActivate: [AuthGuard] 
    },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];
// export const routing = RouterModule.forRoot(appRoutes);
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule {     
    constructor(
        private router: Router,
        public _authGuard: AuthGuard
    ){
        // router.events.subscribe((val) => {
        //     if(val instanceof NavigationEnd){
        //         if(val.url == '/login'){
        //             this._authGuard.toggleMenu(true);
        //         }
        //     }
        // });
    }
}