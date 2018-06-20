import { Component } from '@angular/core';
import { CARS } from './modules/ngEasyDatatable/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG Simple Datatable';
  cars = CARS;
}