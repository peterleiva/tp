import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoundationService {
  constructor() {}

  hello() {
    alert('Hello from subpackage');
  }
}
