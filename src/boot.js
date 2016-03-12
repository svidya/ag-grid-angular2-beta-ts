///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', './SampleAppComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, SampleAppComponent_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (SampleAppComponent_1_1) {
                SampleAppComponent_1 = SampleAppComponent_1_1;
            }],
        execute: function() {
            //import * as core from 'angular2/core';
            //declare var ag: any;
            //ag.grid.initialiseAgGridWithAngular2({ core: core });
            browser_1.bootstrap(SampleAppComponent_1.SampleAppComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map