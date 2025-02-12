import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class FoundationService {
    constructor() { }
    hello() {
        alert('Hello from subpackage');
    }
}
FoundationService.ɵfac = function FoundationService_Factory(t) { return new (t || FoundationService)(); };
FoundationService.ɵprov = ɵɵdefineInjectable({ token: FoundationService, factory: FoundationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FoundationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

class FoundationComponent {
    constructor() { }
    ngOnInit() { }
}
FoundationComponent.ɵfac = function FoundationComponent_Factory(t) { return new (t || FoundationComponent)(); };
FoundationComponent.ɵcmp = ɵɵdefineComponent({ type: FoundationComponent, selectors: [["lib-foundation"]], decls: 2, vars: 0, template: function FoundationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "foundation works!");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FoundationComponent, [{
        type: Component,
        args: [{
                selector: 'lib-foundation',
                template: ` <p>foundation works!</p> `,
                styles: [],
            }]
    }], function () { return []; }, null); })();

class FoundationModule {
}
FoundationModule.ɵmod = ɵɵdefineNgModule({ type: FoundationModule });
FoundationModule.ɵinj = ɵɵdefineInjector({ factory: function FoundationModule_Factory(t) { return new (t || FoundationModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FoundationModule, { declarations: [FoundationComponent], exports: [FoundationComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FoundationModule, [{
        type: NgModule,
        args: [{
                declarations: [FoundationComponent],
                imports: [],
                exports: [FoundationComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of foundation
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FoundationComponent, FoundationModule, FoundationService };
//# sourceMappingURL=foundation.js.map
