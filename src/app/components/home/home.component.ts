import { Component, OnInit } from '@angular/core';
import { Conversor } from '../../class/conversor';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  conversor: Conversor;
  constructor() {
    this.conversor = new Conversor();
   }

  ngOnInit() {
  }

}
