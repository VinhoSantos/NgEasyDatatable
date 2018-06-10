import { Component, forwardRef, Input } from '@angular/core';
import { NgDatatableColumnComponent } from './ngdatatable.component.column';

@Component({
    selector: 'ng-number-column',
    template: '',
    providers: [{ provide: NgDatatableColumnComponent, useExisting: forwardRef(() => NgDatatableNumberColumnComponent) }]
})
export class NgDatatableNumberColumnComponent extends NgDatatableColumnComponent {
    
    @Input() type = 'number';

    updateContent = (row: any) => {
        return row[this.field];
    }

    compare = (a: any, b: any, isAscending: boolean): number => {
        const x = a ? a : Number.NEGATIVE_INFINITY;
        const y = b ? b : Number.NEGATIVE_INFINITY;

        if (x < y) return isAscending ? -1 : 1;
        if (x > y) return isAscending ? 1 : -1;
        return 0;
    }
}