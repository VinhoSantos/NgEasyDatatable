import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { NgDatatableColumnComponent } from './ngdatatable.component.column';

@Component({
    selector: 'ng-expandable-row',
    template: ''
})

export class NgDatatableExpandableRowComponent implements AfterContentInit {

    @Input() field: string;
    @Input() selectionMode = 'multiple';

    @ContentChildren(NgDatatableColumnComponent) ngDatatableColumns: QueryList<NgDatatableColumnComponent>;
    columns: NgDatatableColumnComponent[] = [];

    ngAfterContentInit() {
        this.columns = this.ngDatatableColumns.toArray();
    }
}