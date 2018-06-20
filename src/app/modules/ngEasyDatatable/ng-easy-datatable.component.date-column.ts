import * as momentJs from 'moment';
import { Component, forwardRef, Input } from '@angular/core';
import { NgEasyDatatableColumnComponent } from './ng-easy-datatable.component.column';

const moment = momentJs;

@Component({
    selector: 'ng-date-column',
    template: '',
    providers: [{ provide: NgEasyDatatableColumnComponent, useExisting: forwardRef(() => NgEasyDatatableDateColumnComponent) }]
})
export class NgEasyDatatableDateColumnComponent extends NgEasyDatatableColumnComponent {
    @Input() format = 'DD/MM/YYYY';

    updateContent = (row: any) => {
        return moment(new Date(row[this.field])).format(this.format);
    }

    compare = (a: any, b: any, isAscending: boolean): number => {
        const x = a ? moment(a).format('YYYY/MM/DD') : '';
        const y = b ? moment(b).format('YYYY/MM/DD') : '';

        if (x < y) {
            return isAscending ? -1 : 1;
        }
        if (x > y) {
            return isAscending ? 1 : -1;
        }
        return 0;
    }
}
