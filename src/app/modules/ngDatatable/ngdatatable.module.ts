import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgDatatableComponent } from './ngdatatable.component.ng2-datatable';
import { 
    NgDatatableColumnComponent, 
    NgDatatableColumnBodyTemplateLoader, 
    NgDatatableColumnHeaderTemplateLoader, 
    NgDatatableColumnExpandableBodyTemplateLoader, 
    NgDatatableColumnExpandableHeaderTemplateLoader } from './ngdatatable.component.column';
import { NgDatatableNumberColumnComponent } from './ngdatatable.component.number-column';
import { NgDatatableBooleanColumnComponent } from './ngdatatable.component.boolean-column';
import { NgDatatableDateColumnComponent } from './ngdatatable.component.date-column';
import { NgDatatableExpandableRowComponent } from './ngdatatable.component.expandable-row';
import { NgDatatablePaginationComponent } from './ngdatatable.component.pagination';
import { NgDatatableActionOnTableComponent } from './ngdatatable.component.action-on-table';

const COMPONENTS = [
    NgDatatableComponent,
    NgDatatableColumnComponent,
    NgDatatableColumnBodyTemplateLoader,
    NgDatatableColumnHeaderTemplateLoader, 
    NgDatatableColumnExpandableBodyTemplateLoader, 
    NgDatatableColumnExpandableHeaderTemplateLoader,
    NgDatatableNumberColumnComponent,
    NgDatatableBooleanColumnComponent,
    NgDatatableDateColumnComponent,
    NgDatatableExpandableRowComponent,
    NgDatatablePaginationComponent,
    NgDatatableActionOnTableComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
  })
  export class NgDatatableModule { }