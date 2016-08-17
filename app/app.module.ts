import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import
{ SampleAppComponent }  from './SampleAppComponent';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ SampleAppComponent ],
    bootstrap:    [ SampleAppComponent ]
})
export class AppModule { }