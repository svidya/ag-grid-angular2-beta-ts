import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: '<ag-grid-ng2 class="ag-fresh" style="height: 300px"  [columnDefs]="columnDefs"   [rowData] = "rowData"></ag-grid-ng2>',
    directives: [(<any>window).ag.grid.AgGridNg2]
})
export class SampleAppComponent {

    columnDefs = [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
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
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ];}
