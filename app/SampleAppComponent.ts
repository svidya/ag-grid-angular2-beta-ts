import {Component} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    selector: 'app',
    template: '<h1>Grid Test</h1><ag-grid-ng2 class="ag-fresh" style="height: 300px; width: 800px;" [columnDefs]="columnDefs"  [rowData] = "rowData"></ag-grid-ng2>'
})
export class SampleAppComponent {

    columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {
            headerName: "Price",
            field: "price",
            cellClass: 'rightJustify',
            cellRenderer: function (params: any) {
                return '$' + params.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //thanks http://stackoverflow.com/users/28324/elias-zamaria
            }
        }
    ];
    // put data directly onto the controller
    rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];
    // gridOptions: GridOptions = {
    //     columnDefs: this.columnDefs,
    //     rowData: this.rowData
    // }
}
