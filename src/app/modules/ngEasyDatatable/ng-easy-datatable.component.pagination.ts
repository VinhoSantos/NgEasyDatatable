import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'ng-pagination',
    templateUrl: './ng-easy-datatable.component.pagination.html'
})

export class NgEasyDatatablePaginationComponent implements OnInit {

    @Input()
    set totalPages(totalPages: number) {
        if (this._totalPages !== totalPages) {
            this._totalPages = totalPages;
            this.currentPage = 1;
            this.showPages();
            this.updatePageData();
        }
    }
    get totalPages(): number {
        return this._totalPages;
    }
    @Output() selectedPage = new EventEmitter();
    private _totalPages: number;
    currentPage = 1;
    pages: number[];

    ngOnInit() {
        if (this.totalPages !== undefined && this.totalPages > 0) {
            this.showPages();
        }
    }

    private updatePageData = () => {
        this.selectedPage.emit(this.currentPage);
    }

    goToPage = (page: number) => {
        this.currentPage = page;
        this.showPages();
        this.updatePageData();
    }

    goToFirstPage = () => {
        if (!this.isFirstPage()) {
            this.currentPage = 1;
            this.showPages();
            this.updatePageData();
        }
    }

    goToLastPage = () => {
        if (!this.isLastPage()) {
            this.currentPage = this.totalPages;
            this.showPages();
            this.updatePageData();
        }
    }

    goToPreviousPage = () => {
        if (!this.isFirstPage()) {
            this.currentPage = this.currentPage - 1;
            this.showPages();
            this.updatePageData();
        }
    }

    goToNextPage = () => {
        if (!this.isLastPage()) {
            this.currentPage = this.currentPage + 1;
            this.showPages();
            this.updatePageData();
        }
    }

    private showPages = () => {
        let minPage = 1;
        let maxPage = this.totalPages;
        if (this.totalPages > 5) {
            minPage = this.currentPage - 2;
            if (minPage <= 0) {
                minPage = 1;
            }
            maxPage = minPage + 4;
            if (maxPage > this.totalPages) {
                maxPage = this.totalPages;
                minPage = maxPage - 4;
            }
        }
        this.pages = [];
        for (let i = minPage; i <= maxPage; i++) {
            this.pages.push(i);
        }
    }

    isFirstPage = (): boolean => {
        return this.currentPage === 1;
    }

    isLastPage = (): boolean => {
        return this.currentPage === this.totalPages;
    }

    isCurrentPage = (page: number) => {
        return this.currentPage === page;
    }

    hasMorePreviousPages = () => {
        return this.currentPage > 3 && this.totalPages > 5;
    }

    hasMoreNextPages = () => {
        return this.currentPage < (this.totalPages - 2) && this.totalPages > 5;
    }
}