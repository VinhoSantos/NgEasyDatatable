import { Component, Input, TemplateRef, ContentChild, OnInit, OnDestroy, EmbeddedViewRef, ViewContainerRef } from '@angular/core';
import { NgDatatableBaseColumn } from './base-column';

@Component({
    selector: 'ng-column',
    template: ''
})
export class NgDatatableColumnComponent extends NgDatatableBaseColumn implements OnInit {

    @Input() field: string;
    @Input() header: string;
    @Input() type = 'text';
    @Input() sortable = false;
    @Input() sortOnField: string;
    @Input() showToggler = false;
    @Input() showSelector = false;
    @Input() showRadio = false;
    @Input() isDisabled = false;
    @Input('small') isSmallColumn = false;
    @Input() filter: string;
    @Input() filterField: string;
    @Input() filterDefault: number[] | boolean[] ; // the filter which is selected by default (other filters will not be selected by default): [enum or bool type]
    @Input() filterOnEmpty: string;
    @Input() subHeader = '';
    content: Array<any | string[]> = [];

    @ContentChild('body') bodyTemplate: TemplateRef<any>;
    @ContentChild('header') headerTemplate: TemplateRef<any>;
    @ContentChild('expBody') expandableBodyTemplate: TemplateRef<any>;
    @ContentChild('expHeader') expandableHeaderTemplate: TemplateRef<any>;

    isSortedAsc = false;
    isSortedDesc = false;
    isExpanded: boolean;

    ngOnInit() {
        if (this.sortable && this.sortOnField === undefined) {
            this.sortOnField = this.field;
        }
        if (this.showToggler || this.showSelector || this.showRadio) {
            this.isSmallColumn = true;
        }
    }

    compare = (a: any, b: any, isAscending: boolean): number => {
        const x = a ? a.toString().toLowerCase() : '';
        const y = b ? b.toString().toLowerCase() : '';

        if (x < y) { return isAscending ? -1 : 1; }
        if (x > y) { return isAscending ? 1 : -1; }
        return 0;
    }

    setValue = (row: any, rowId: number, expRowId: number = undefined) => {
        if (expRowId !== undefined) {
            if (!this.content[rowId]) {
                this.content[rowId] = [];
            }
            this.content[rowId][expRowId] = this.updateContent(row);
        } else {
            this.content[rowId] = this.updateContent(row);
        }
    }
    
    updateContent = (row: any): string => {
        return this.getValue(row);
    }

    getValueField = (row: any, field: string): any => {
        if (!field) {
            return undefined;
        }
        const multiField = field.split('.');
        let value = row;
        multiField.forEach(x => {
            if (value === undefined) {
                return;
            }
            value = value[x];
        });

        return value;
    }

    getValue = (row: any): any => {
        return this.getValueField(row, this.field);
    }

    getValueSort = (row: any): any => {
        return this.getValueField(row, this.sortOnField);
    }
}

@Component({
    selector: 'ng-body-template',
    template: ''
})
export class NgDatatableColumnBodyTemplateLoader implements OnInit, OnDestroy {

    @Input() column: NgDatatableColumnComponent;
    @Input() rowData: any;
    @Input() rowIndex: number;
    view: EmbeddedViewRef<any>;

    constructor(public viewContainer: ViewContainerRef) { }

    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.bodyTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    }

    ngOnDestroy() {
        this.view.destroy();
    }
}

@Component({
    selector: 'ng-header-template',
    template: ''
})
export class NgDatatableColumnHeaderTemplateLoader implements OnInit, OnDestroy {

    @Input() column: NgDatatableColumnComponent;
    view: EmbeddedViewRef<any>;

    constructor(public viewContainer: ViewContainerRef) { }

    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.headerTemplate, {
            '\$implicit': this.column
        });
    }

    ngOnDestroy() {
        this.view.destroy();
    }
}

@Component({
    selector: 'ng-expandable-body-template',
    template: ''
})
export class NgDatatableColumnExpandableBodyTemplateLoader implements OnInit, OnDestroy {

    @Input() column: NgDatatableColumnComponent;
    @Input() rowData: any;
    @Input() rowIndex: number;
    view: EmbeddedViewRef<any>;

    constructor(public viewContainer: ViewContainerRef) { }

    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.expandableBodyTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    }

    ngOnDestroy() {
        this.view.destroy();
    }
}

@Component({
    selector: 'ng-expandable-header-template',
    template: ''
})
export class NgDatatableColumnExpandableHeaderTemplateLoader implements OnInit, OnDestroy {

    @Input() column: NgDatatableColumnComponent;
    view: EmbeddedViewRef<any>;

    constructor(public viewContainer: ViewContainerRef) { }

    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.column.expandableHeaderTemplate, {
            '\$implicit': this.column
        });
    }

    ngOnDestroy() {
        this.view.destroy();
    }
}
