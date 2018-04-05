import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../_guard/auth-guard';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '../dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: '../user', title: 'Usuários',  icon:'ti-user', class: '' },
    { path: '../table', title: 'Table List',  icon:'ti-view-list-alt', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(
        private _auth: AuthGuard
    ){}

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
