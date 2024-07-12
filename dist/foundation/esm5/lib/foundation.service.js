import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var FoundationService = /** @class */ (function () {
    function FoundationService() {
    }
    FoundationService.prototype.hello = function () {
        alert('Hello from subpackage');
    };
    FoundationService.ɵfac = function FoundationService_Factory(t) { return new (t || FoundationService)(); };
    FoundationService.ɵprov = i0.ɵɵdefineInjectable({ token: FoundationService, factory: FoundationService.ɵfac, providedIn: 'root' });
    return FoundationService;
}());
export { FoundationService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FoundationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9mb3VuZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFJRTtJQUFlLENBQUM7SUFFaEIsaUNBQUssR0FBTDtRQUNFLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7c0ZBTFUsaUJBQWlCOzZEQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZoQixNQUFNOzRCQUhwQjtDQVdDLEFBVEQsSUFTQztTQU5ZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZvdW5kYXRpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGhlbGxvKCkge1xuICAgIGFsZXJ0KCdIZWxsbyBmcm9tIHN1YnBhY2thZ2UnKTtcbiAgfVxufVxuIl19