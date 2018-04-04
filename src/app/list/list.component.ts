import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
list = [];
  constructor(private titleService: Title,) { }

  ngOnInit() {
    this.titleService.setTitle("List Users");
    this.list=[
      {nome: "Pedro", email: "pedro@gmail.com", active: true},
      {nome: "André", email: "andre@gmail.com", active: true},
      {nome: "Lucas", email: "lucas@gmail.com", active: true},
      {nome: "thymoteo", email: "thymoteo@gmail.com", active: true},
      {nome: "Arthur", email: "arthur@gmail.com", active: true},
      {nome: "Wagner", email: "wagner@gmail.com", active: false},
      {nome: "Alex", email: "alex@gmail.com", active: true},
      {nome: "Gabriel", email: "gabriel@gmail.com", active: true},
      {nome: "Kassio", email: "kassio@gmail.com", active: false},
      {nome: "Pablo", email: "pablo@gmail.com", active: false},
      {nome: "Poliana", email: "poliana@gmail.com", active: true}
    ];
  }

}
