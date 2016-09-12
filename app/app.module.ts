import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-ng2/main';

import
{ SampleAppComponent }  from './SampleAppComponent';

@NgModule({
    imports: [ BrowserModule, AgGridModule ],
    declarations: [ SampleAppComponent ],
    bootstrap:    [ SampleAppComponent ]
})
export class AppModule { }