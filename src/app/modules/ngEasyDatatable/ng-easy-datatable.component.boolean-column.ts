import { Component, Input, forwardRef } from '@angular/core';
import { NgEasyDatatableColumnComponent } from './ng-easy-datatable.component.column';

@Component({
    selector: 'ng-boolean-column',
    template: '',
    providers: [{ provide: NgEasyDatatableColumnComponent, useExisting: forwardRef(() => NgEasyDatatableBooleanColumnComponent) }]
})
export class NgEasyDatatableBooleanColumnComponent extends NgEasyDatatableColumnComponent {

    @Input() trueString = 'Ja';
    @Input() falseString = 'Nee';
    @Input() emptyString = '';
    @Input() emptyIsFalse = true;
    @Input() type = 'bool';

    updateContent = (row: any): string => {
        if (!this.emptyIsFalse && row[this.field] === undefined) {
            return this.emptyString;
        } else {
            return row[this.field] ? this.trueString : this.falseString;
        }        
    }

    compare = (a: any, b: any, isAscending: boolean): number => {
        if (a < b) {
            return isAscending ? -1 : 1;
        }
        if (a > b) {
            return isAscending ? 1 : -1;
        }
            
        return 0;
    }
}