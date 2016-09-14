"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var refData_1 = require('./refData');
var SampleAppComponent = (function () {
    function SampleAppComponent() {
        this.gridOptions = {};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
    }
    SampleAppComponent.prototype.createRowData = function () {
        var rowData = [];
        for (var i = 0; i < 10000; i++) {
            var countryData = refData_1.RefData.countries[i % refData_1.RefData.countries.length];
            rowData.push({
                name: refData_1.RefData.firstNames[i % refData_1.RefData.firstNames.length] + ' ' + refData_1.RefData.lastNames[i % refData_1.RefData.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                address: refData_1.RefData.addresses[i % refData_1.RefData.addresses.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: createRandomPhoneNumber(),
                landline: createRandomPhoneNumber(),
            });
        }
        this.rowData = rowData;
    };
    SampleAppComponent.prototype.createColumnDefs = function () {
        this.columnDefs = [
            { headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true },
            {
                headerName: 'Employee',
                children: [
                    { headerName: "Name", field: "name",
                        width: 150, pinned: true },
                    { headerName: "Country", field: "country", width: 150,
                        cellRenderer: countryCellRenderer, pinned: true,
                        filterParams: { cellRenderer: countryCellRenderer, cellHeight: 20 } },
                ]
            },
            /*{
                headerName: 'IT Skills',
                children: [
                    {headerName: "Skills", width: 125, suppressSorting: true, cellRenderer: skillsCellRenderer, filter: SkillFilter},
                    {headerName: "Proficiency", field: "proficiency", width: 120, cellRenderer: percentCellRenderer, filter: ProficiencyFilter},
                ]
            },*/
            {
                headerName: 'Contact',
                children: [
                    { headerName: "Mobile", field: "mobile", width: 150, filter: 'text' },
                    { headerName: "Land-line", field: "landline", width: 150, filter: 'text' },
                    { headerName: "Address", field: "address", width: 500, filter: 'text' }
                ]
            }
        ];
    };
    /*
    
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
        ]; */
    // put data directly onto the controller
    //rowData = [
    //  {make: "Toyota", model: "Celica", price: 35000},
    //{make: "Ford", model: "Mondeo", price: 32000},
    //{make: "Porsche", model: "Boxter", price: 72000}
    //];
    // gridOptions: GridOptions = {
    //     columnDefs: this.columnDefs,
    //     rowData: this.rowData
    // }
    SampleAppComponent.prototype.calculateRowCount = function () {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    };
    SampleAppComponent.prototype.onModelUpdated = function () {
        console.log('onModelUpdated');
        this.calculateRowCount();
    };
    SampleAppComponent.prototype.onReady = function () {
        console.log('onReady');
        this.calculateRowCount();
    };
    SampleAppComponent.prototype.onCellClicked = function ($event) {
        console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    };
    SampleAppComponent.prototype.onCellValueChanged = function ($event) {
        console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
    };
    SampleAppComponent.prototype.onCellDoubleClicked = function ($event) {
        console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    };
    SampleAppComponent.prototype.onCellContextMenu = function ($event) {
        console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
    };
    SampleAppComponent.prototype.onCellFocused = function ($event) {
        console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
    };
    SampleAppComponent.prototype.onRowSelected = function ($event) {
        // taking out, as when we 'select all', it prints to much to the console!!
        // console.log('onRowSelected: ' + $event.node.data.name);
    };
    SampleAppComponent.prototype.onSelectionChanged = function () {
        console.log('selectionChanged');
    };
    SampleAppComponent.prototype.onBeforeFilterChanged = function () {
        console.log('beforeFilterChanged');
    };
    SampleAppComponent.prototype.onAfterFilterChanged = function () {
        console.log('afterFilterChanged');
    };
    SampleAppComponent.prototype.onFilterModified = function () {
        console.log('onFilterModified');
    };
    SampleAppComponent.prototype.onBeforeSortChanged = function () {
        console.log('onBeforeSortChanged');
    };
    SampleAppComponent.prototype.onAfterSortChanged = function () {
        console.log('onAfterSortChanged');
    };
    SampleAppComponent.prototype.onVirtualRowRemoved = function ($event) {
        // because this event gets fired LOTS of times, we don't print it to the
        // console. if you want to see it, just uncomment out this line
        // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
    };
    SampleAppComponent.prototype.onRowClicked = function ($event) {
        console.log('onRowClicked: ' + $event.node.data.name);
    };
    SampleAppComponent.prototype.onQuickFilterChanged = function ($event) {
        this.gridOptions.api.setQuickFilter($event.target.value);
    };
    // here we use one generic event to handle all the column type events.
    // the method just prints the event name
    SampleAppComponent.prototype.onColumnEvent = function ($event) {
        console.log('onColumnEvent: ' + $event);
    };
    SampleAppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            //template: '<h1>Grid Test</h1><ag-grid-ng2 class="ag-fresh" style="height: 300px; width: 800px;" [columnDefs]="columnDefs"  [rowData] = "rowData"></ag-grid-ng2>'
            templateUrl: 'app/sampleAppComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SampleAppComponent);
    return SampleAppComponent;
}());
exports.SampleAppComponent = SampleAppComponent;
function countryCellRenderer(params) {
    var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='../images/flags/" + refData_1.RefData.COUNTRY_CODES[params.value] + ".png'>";
    return flag + " " + params.value;
}
function createRandomPhoneNumber() {
    var result = '+';
    for (var i = 0; i < 12; i++) {
        result += Math.round(Math.random() * 10);
        if (i === 2 || i === 5 || i === 8) {
            result += ' ';
        }
    }
    return result;
}
function percentCellRenderer(params) {
    var value = params.value;
    var eDivPercentBar = document.createElement('div');
    eDivPercentBar.className = 'div-percent-bar';
    eDivPercentBar.style.width = value + '%';
    if (value < 20) {
        eDivPercentBar.style.backgroundColor = 'red';
    }
    else if (value < 60) {
        eDivPercentBar.style.backgroundColor = '#ff9900';
    }
    else {
        eDivPercentBar.style.backgroundColor = '#00A000';
    }
    var eValue = document.createElement('div');
    eValue.className = 'div-percent-value';
    eValue.innerHTML = value + '%';
    var eOuterDiv = document.createElement('div');
    eOuterDiv.className = 'div-outer-div';
    eOuterDiv.appendChild(eValue);
    eOuterDiv.appendChild(eDivPercentBar);
    return eOuterDiv;
}
//# sourceMappingURL=SampleAppComponent.js.map