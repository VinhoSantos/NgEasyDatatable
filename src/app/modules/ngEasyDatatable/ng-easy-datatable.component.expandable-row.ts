import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { NgEasyDatatableColumnComponent } from './ng-easy-datatable.component.column';

@Component({
    selector: 'ng-expandable-row',
    template: ''
})

export class NgEasyDatatableExpandableRowComponent implements AfterContentInit {

    @Input() field: string;
    @Input() selectionMode = 'multiple';

    @ContentChildren(NgEasyDatatableColumnComponent) ngDatatableColumns: QueryList<NgEasyDatatableColumnComponent>;
    columns: NgEasyDatatableColumnComponent[] = [];

    ngAfterContentInit() {
        this.columns = this.ngDatatableColumns.toArray();
    }
}