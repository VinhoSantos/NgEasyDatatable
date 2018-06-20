import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng-action-on-table',
    template: ''
})
export class NgEasyDatatableActionOnTableComponent {

    @Input() title: string;
    @Input() class: string;
    @Output() action = new EventEmitter();

    execute = () => {
        this.action.emit();
    }
}