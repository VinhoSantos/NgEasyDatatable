import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/http';
import { NgEasyDatatableModule } from './modules/ngEasyDatatable/ng-easy-datatable.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgEasyDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
