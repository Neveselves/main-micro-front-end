import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mf1',
  templateUrl: './mf1.component.html',
  styleUrls: ['./mf1.component.scss']
})
export class Mf1Component implements OnInit {
  urlMicro = `http://localhost:4200/main.js?${new Date().getTime()}`;
  constructor() { }

  ngOnInit(): void {
  }

}
