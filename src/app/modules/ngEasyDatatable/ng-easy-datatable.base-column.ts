export abstract class NgEasyDatatableBaseColumn {

    isSortedAsc = false;
    isSortedDesc = false;
    isExpanded: boolean;

    compare = (a: any, b: any, isAscending: boolean): number => {
        const x = a ? a.toString().toLowerCase() : '';
        const y = b ? b.toString().toLowerCase() : '';

        if (x < y) {
            return isAscending ? -1 : 1;
        }
        if (x > y) {
            return isAscending ? 1 : -1;
        }
        return 0;
    }
}
