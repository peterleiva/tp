(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('foundation', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.foundation = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var FoundationService = /** @class */ (function () {
        function FoundationService() {
        }
        FoundationService.prototype.hello = function () {
            alert('Hello from subpackage');
        };
        FoundationService.ɵfac = function FoundationService_Factory(t) { return new (t || FoundationService)(); };
        FoundationService.ɵprov = core.ɵɵdefineInjectable({ token: FoundationService, factory: FoundationService.ɵfac, providedIn: 'root' });
        return FoundationService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FoundationService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], function () { return []; }, null); })();

    var FoundationComponent = /** @class */ (function () {
        function FoundationComponent() {
        }
        FoundationComponent.prototype.ngOnInit = function () { };
        FoundationComponent.ɵfac = function FoundationComponent_Factory(t) { return new (t || FoundationComponent)(); };
        FoundationComponent.ɵcmp = core.ɵɵdefineComponent({ type: FoundationComponent, selectors: [["lib-foundation"]], decls: 2, vars: 0, template: function FoundationComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, "foundation works!");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return FoundationComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FoundationComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-foundation',
                    template: " <p>foundation works!</p> ",
                    styles: [],
                }]
        }], function () { return []; }, null); })();

    var FoundationModule = /** @class */ (function () {
        function FoundationModule() {
        }
        FoundationModule.ɵmod = core.ɵɵdefineNgModule({ type: FoundationModule });
        FoundationModule.ɵinj = core.ɵɵdefineInjector({ factory: function FoundationModule_Factory(t) { return new (t || FoundationModule)(); }, imports: [[]] });
        return FoundationModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(FoundationModule, { declarations: [FoundationComponent], exports: [FoundationComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FoundationModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [FoundationComponent],
                    imports: [],
                    exports: [FoundationComponent]
                }]
        }], null, null); })();

    exports.FoundationComponent = FoundationComponent;
    exports.FoundationModule = FoundationModule;
    exports.FoundationService = FoundationService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=foundation.umd.js.map
