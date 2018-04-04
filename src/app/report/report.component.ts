import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  model: any = {};
  loading = false;
  
  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle("Report Bug");
    this.inputDate();
  }

  send(dados) {
    alert("enviado com sucesso!");
    this.model.tipo = "";
    this.model.desc = "";
    this.inputDate();
    // this.loading = false;

  }

  inputDate(){
    let d = new Date();
    this.model.data = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
  }

}
