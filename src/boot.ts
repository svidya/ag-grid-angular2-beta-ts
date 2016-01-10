import {bootstrap} from 'angular2/platform/browser';
import {SampleAppComponent} from './SampleAppComponent';
import * as core from 'angular2/core';

declare var ag: any;
ag.grid.initialiseAgGridWithAngular2({ core: core });

bootstrap(SampleAppComponent);


