import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgEasyDatatableComponent } from './ng-easy-datatable.component.datatable';
import {
    NgEasyDatatableColumnComponent,
    NgEasyDatatableColumnBodyTemplateLoader,
    NgEasyDatatableColumnHeaderTemplateLoader,
    NgEasyDatatableColumnExpandableBodyTemplateLoader,
    NgEasyDatatableColumnExpandableHeaderTemplateLoader } from './ng-easy-datatable.component.column';
import { NgEasyDatatableNumberColumnComponent } from './ng-easy-datatable.component.number-column';
import { NgEasyDatatableBooleanColumnComponent } from './ng-easy-datatable.component.boolean-column';
import { NgEasyDatatableDateColumnComponent } from './ng-easy-datatable.component.date-column';
import { NgEasyDatatableExpandableRowComponent } from './ng-easy-datatable.component.expandable-row';
import { NgEasyDatatablePaginationComponent } from './ng-easy-datatable.component.pagination';
import { NgEasyDatatableActionOnTableComponent } from './ng-easy-datatable.component.action-on-table';

const COMPONENTS = [
    NgEasyDatatableComponent,
    NgEasyDatatableColumnComponent,
    NgEasyDatatableColumnBodyTemplateLoader,
    NgEasyDatatableColumnHeaderTemplateLoader,
    NgEasyDatatableColumnExpandableBodyTemplateLoader,
    NgEasyDatatableColumnExpandableHeaderTemplateLoader,
    NgEasyDatatableNumberColumnComponent,
    NgEasyDatatableBooleanColumnComponent,
    NgEasyDatatableDateColumnComponent,
    NgEasyDatatableExpandableRowComponent,
    NgEasyDatatablePaginationComponent,
    NgEasyDatatableActionOnTableComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
  })
  export class NgEasyDatatableModule { }
