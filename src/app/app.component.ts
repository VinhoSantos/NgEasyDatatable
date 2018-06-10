import { Component } from '@angular/core';
import { Car, CARS } from './modules/ngDatatable/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG Datatable';
  cars = CARS;
}