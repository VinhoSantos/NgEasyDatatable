import * as momentJs from 'moment';
import { Component, forwardRef, Input } from '@angular/core';
import { NgDatatableColumnComponent } from './ngdatatable.component.column';

const moment = momentJs;

@Component({
    selector: 'ng-date-column',
    template: '',
    providers: [{ provide: NgDatatableColumnComponent, useExisting: forwardRef(() => NgDatatableDateColumnComponent) }]
})
export class NgDatatableDateColumnComponent extends NgDatatableColumnComponent {
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
