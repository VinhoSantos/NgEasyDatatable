import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgDatatableModule } from './modules/ngDatatable/ngdatatable.module';

import { AppComponent } from './app.component';

// import { NgDatatableComponent } from './modules/ngDatatable/ngdatatable.component.ng2-datatable';
// import { 
//     NgDatatableColumnComponent, 
//     NgDatatableColumnBodyTemplateLoader, 
//     NgDatatableColumnHeaderTemplateLoader, 
//     NgDatatableColumnExpandableBodyTemplateLoader, 
//     NgDatatableColumnExpandableHeaderTemplateLoader } from './modules/ngDatatable/ngdatatable.component.column';
// import { NgDatatableNumberColumnComponent } from './modules/ngDatatable/ngdatatable.component.number-column';
// import { NgDatatableBooleanColumnComponent } from './modules/ngDatatable/ngdatatable.component.boolean-column';
// import { NgDatatableDateColumnComponent } from './modules/ngDatatable/ngdatatable.component.date-column';
// import { NgDatatableExpandableRowComponent } from './modules/ngDatatable/ngdatatable.component.expandable-row';
// import { NgDatatablePaginationComponent } from './modules/ngDatatable/ngdatatable.component.pagination';
// import { NgDatatableActionOnTableComponent } from './modules/ngDatatable/ngdatatable.component.action-on-table';

@NgModule({
  declarations: [
    AppComponent
    // NgDatatableComponent,
    // NgDatatableColumnComponent,
    // NgDatatableColumnBodyTemplateLoader,
    // NgDatatableColumnHeaderTemplateLoader, 
    // NgDatatableColumnExpandableBodyTemplateLoader, 
    // NgDatatableColumnExpandableHeaderTemplateLoader,
    // NgDatatableNumberColumnComponent,
    // NgDatatableBooleanColumnComponent,
    // NgDatatableDateColumnComponent,
    // NgDatatableExpandableRowComponent,
    // NgDatatablePaginationComponent,
    // NgDatatableActionOnTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
