import { Component, forwardRef, Input } from '@angular/core';
import { NgEasyDatatableColumnComponent } from './ng-easy-datatable.component.column';

@Component({
    selector: 'ng-number-column',
    template: '',
    providers: [{ provide: NgEasyDatatableColumnComponent, useExisting: forwardRef(() => NgEasyDatatableNumberColumnComponent) }]
})
export class NgEasyDatatableNumberColumnComponent extends NgEasyDatatableColumnComponent {
    
    @Input() type = 'number';

    updateContent = (row: any) => {
        return row[this.field];
    }

    compare = (a: any, b: any, isAscending: boolean): number => {
        const x = a ? a : Number.NEGATIVE_INFINITY;
        const y = b ? b : Number.NEGATIVE_INFINITY;

        if (x < y) {
            return isAscending ? -1 : 1;
        }
        if (x > y) {return isAscending ? 1 : -1;
        }
        
        return 0;
    }
}