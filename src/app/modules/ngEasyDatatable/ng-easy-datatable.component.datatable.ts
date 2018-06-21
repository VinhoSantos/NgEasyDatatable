import * as underscore from 'underscore';
import { Component, Input, QueryList, ContentChildren, ContentChild, EventEmitter, Output, SimpleChanges, ChangeDetectorRef, AfterViewInit, OnChanges } from '@angular/core';
import 'core-js/es6/array';

import { NgEasyDatatableColumnComponent } from './ng-easy-datatable.component.column';
import { NgEasyDatatableBooleanColumnComponent } from './ng-easy-datatable.component.boolean-column';
import { NgEasyDatatableExpandableRowComponent } from './ng-easy-datatable.component.expandable-row';
import { NgEasyDatatableActionOnTableComponent } from './ng-easy-datatable.component.action-on-table';

const _ = underscore;

export class RowDto {
    isExpanded: boolean;
    isExpandable: boolean;
}

export class FilterItem {
    text: string;
    selected: boolean;
    value: any;

    constructor(text: string, selected: boolean, value: any) {
        this.text = text;
        this.selected = selected;
        this.value = value;
    }
}

export class Filter {
    filter: string;
    field: string;
    items: FilterItem[] = [];
}

export class SubHeader {
    text: string;
    columns: number;

    constructor(text: string, columns: number) {
        this.text = text;
        this.columns = columns;
    }
}

@Component({
    selector: 'ng-easy-datatable',
    templateUrl: './ng-easy-datatable.component.datatable.html'
})

export class NgEasyDatatableComponent implements AfterViewInit, OnChanges {

    @ContentChildren(NgEasyDatatableColumnComponent) ngDatatableColumns: QueryList<NgEasyDatatableColumnComponent>;
    @ContentChild(NgEasyDatatableExpandableRowComponent) expandableRow: NgEasyDatatableExpandableRowComponent;
    @ContentChildren(NgEasyDatatableActionOnTableComponent) actionsOnTable: QueryList<NgEasyDatatableActionOnTableComponent>;

    nonFilteredData: RowDto[];
    @Input() data: RowDto[];
    @Input() sortOn: number;
    @Input() pagination = true;
    @Input() rowsPerPage = 10;
    @Input() loadingText = 'Loading data...';
    @Input() emptyDataText = 'No data available';
    @Input() selectText: string;
    @Input() deselectText: string;
    @Input() toggleText: string;
    @Input() quickSelect = false;
    @Input() selectorPropertyName = 'isSelected';
    @Input() selectionMode = 'multiple';
    @Input() showActions: boolean;
    @Input() titleForActions: string;
    @Input() lengthChange = false;
    @Input() showSubHeaders = false;
    @Output() selectionUpdated = new EventEmitter();
    @Output() filterUpdated = new EventEmitter<FilterItem[]>();

    pageData: RowDto[];
    columns: NgEasyDatatableColumnComponent[] = [];
    expandableColumns: NgEasyDatatableColumnComponent[] = [];
    actions: NgEasyDatatableActionOnTableComponent[] = [];
    expandableRowHasColumnHeaders = false;
    selectedRows: number[] = [];
    selectedIds: string[] = [];
    sortOrder: number;
    initialSort = true;
    showPagination = false;
    nestedListPropertyName: string;
    currentPage = 1;
    totalPages: number;
    filters: Filter[] = [];
    subHeaders: SubHeader[] = [];

    constructor(
        private readonly cdr: ChangeDetectorRef
    ) { }

    ngAfterViewInit() {
        this.initDatatable();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.filters = [];
            this.nonFilteredData = this.data;
            this.resetSortOrder();
            this.sortAndShowData();
            this.setFilters();
        }
    }

    handleNewPageSelected = (page: number) => {
        this.currentPage = page;
        this.showCurrentPageData();
    }

    private initDatatable = () => {
        this.initColumns();
        this.initSubHeaders();
        this.initExpandableRows();

        this.sortAndShowData();
        this.setFilters();
    }

    private sortAndShowData = () => {
        if (this.data && this.columns.length > 0) {
            this.sortData();
            this.showData();
        }
    }

    private resetSortOrder = () => {
        this.columns.forEach(c => {
            c.isSortedAsc = false;
            c.isSortedDesc = false;
        });
    }

    private setFilters = () => {
        this.cdr.detectChanges();
        this.columns.forEach(c => {
            if (!!c.filter) {
                if (c.type === 'bool') {
                    this.createBoolFilter(c as NgEasyDatatableBooleanColumnComponent);
                }
            }
        });
    }

    private createBoolFilter = (c: NgEasyDatatableBooleanColumnComponent) => {
        const filter = new Filter();
        filter.filter = c.filter;
        filter.field = c.field;
        
        if (!!c.filterDefault) {
            const filterDefault = c.filterDefault as boolean[];
            filter.items.push(new FilterItem(c.trueString, filterDefault.indexOf(true) > -1, true));
            filter.items.push(new FilterItem(c.falseString, filterDefault.indexOf(false) > -1, false));
        } else {
            filter.items.push(new FilterItem(c.trueString, true, true));
            filter.items.push(new FilterItem(c.falseString, true, false));
        }
        this.filters.push(filter);
    }
    
    public filterOnItem = (filter: Filter, item: FilterItem) => {
        item.selected = !item.selected;
        this.filterUpdated.emit(filter.items);
        this.executeAllFilters();
    }
    
    private executeAllFilters = () => {
        let temp = this.nonFilteredData;
        this.filters.forEach(c => {
            c.items.forEach(i => {
                if (!i.selected) {
                    temp = _.reject(temp, x => x[c.field] === i.value);
                }
            });
        });
        this.data = temp;
        this.sortAndShowData();
    }

    private initColumns = () => {
        if (this.ngDatatableColumns) {
            this.columns = this.ngDatatableColumns.toArray();
        }
    }

    private initSubHeaders = () => {
        this.subHeaders = [];
        if (!this.showSubHeaders) {
            return;
        }

        this.ngDatatableColumns.forEach((column) => {
            if (this.subHeaders.length === 0) {
                this.subHeaders.push(new SubHeader(column.subHeader, 1));
            } else if (this.subHeaders[this.subHeaders.length - 1].text === column.subHeader) {
                this.subHeaders[this.subHeaders.length - 1].columns += 1;
            } else {
                this.subHeaders.push(new SubHeader(column.subHeader, 1));
            }
        });
    }

    private initExpandableRows = () => {
        if (this.expandableRow) {
            this.nestedListPropertyName = this.expandableRow.field;
            this.expandableColumns = this.expandableRow.columns;
            this.expandableRowHasColumnHeaders = this.expandableColumns && this.expandableColumns.some(c => !!c.header || !!c.expandableHeaderTemplate);
        }
    }

    private showData = () => {
        this.initPagination();
        this.showCurrentPageData();
    }

    private showCurrentPageData = () => {        
        this.cdr.detectChanges();
        
        this.pageData = (this.data || []).slice((this.currentPage - 1) * this.rowsPerPage, this.currentPage * this.rowsPerPage);
        if (this.pageData.length > 0) {
            this.loadDataInColumns();
        }
    }

    private loadDataInColumns = () => {
        this.columns.forEach(c => {
            c.content = [];
        });

        this.pageData.forEach((x, i) => {
            this.columns.forEach(c => {
                c.setValue(x, i);
            });
            if (!this.expandableRow) {
                x.isExpandable = false;
            } else {
                if (x[this.expandableRow.field]) {
                    x[this.expandableRow.field].forEach((exp, j) => {
                        this.expandableColumns.forEach(c => {
                            c.setValue(exp, i, j);
                        });
                    });
                    setTimeout(() => x.isExpandable = x[this.expandableRow.field] && x[this.expandableRow.field].length > 0);
                }
            } 
        });
    }

    private initPagination = () => {
        if (this.pagination && this.data) {
            if ((this.data || []).length === 0) {
                this.showPagination = false;
                return;
            }

            this.totalPages = Math.ceil((this.data || []).length / this.rowsPerPage);
            this.showPagination = true;
        } else {
            this.showPagination = false;
        }
    }

    private sortData = () => {
        if (this.sortOn && this.columns.length > 0 && this.columns[Math.abs(this.sortOn) - 1].sortable) {
            this.sortOrder = this.sortOn * -1;
            this.sort(Math.abs(this.sortOrder));
        }
    }

    sort = (columnIndex: number) => {
        const column = this.columns[columnIndex - 1];

        if (column.sortable) {
            this.clearSorting();
            this.setColumnOrder(columnIndex);
            (this.data || []).sort((a, b) => this.compare(column, column.getValueSort(a), column.getValueSort(b)));
            this.showCurrentPageData();
        }
    }

    private clearSorting = () => {
        this.columns.forEach(c => {
            c.isSortedAsc = false;
            c.isSortedDesc = false;
        });
    }

    private setColumnOrder = (columnIndex: number) => {
        if (this.sortOrder && this.sortOrder === columnIndex) {
            this.columns[columnIndex - 1].isSortedDesc = true;
            this.columns[columnIndex - 1].isSortedAsc = false;
            this.sortOrder = columnIndex * -1;
        } else {
            this.columns[columnIndex - 1].isSortedAsc = true;
            this.columns[columnIndex - 1].isSortedDesc = false;
            this.sortOrder = columnIndex;
        }
    }

    private compare = (column: NgEasyDatatableColumnComponent, a: any, b: any): number => {
        return column.compare(a, b, this.isAscending());
    }

    private isAscending = () => this.sortOrder > 0;

    toggleExpandableRow = (row: RowDto) => {
        row.isExpanded = !row.isExpanded;
    }

    isSelected = (row: any) => {
        return row && row[this.selectorPropertyName];
    }

    setIsSelected = (row: any, isSelected: boolean) => {
        return row && (row[this.selectorPropertyName] = isSelected);
    }

    isRowSelected = (row: RowDto): boolean => {
        return !!this.isSelected(row);
    }

    onSelectedChange = (selectedRow: RowDto) => {
        if (this.selectionMode === 'single') {
            for (const row of this.data) {
                this.setIsSelected(row, row === selectedRow && !this.isSelected(row));
            }
        } else {
            this.setIsSelected(selectedRow, !this.isSelected(selectedRow));
        }

        this.selectionUpdated.emit(selectedRow);
    }

    onSelectedChildChange = (selectedChildRrow: any, parentRow: RowDto) => {
        if (this.expandableRow.selectionMode === 'single') {
            for (const row of parentRow[this.expandableRow.field]) {
                this.setIsSelected(row, row === selectedChildRrow && !row.isSelected);
            }
        } else {
            this.setIsSelected(selectedChildRrow, !selectedChildRrow.isSelected);
        }

        this.selectionUpdated.emit(parentRow);
    }

    calculateRowIndex = (index: number): number => {
        return (this.currentPage - 1) * this.rowsPerPage + index;
    }
}
