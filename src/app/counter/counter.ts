import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  n = 0;
  // decrement() {
  //   this.n = this.n - 1;
  // }
  // increment() {
  //   this.n = this.n + 1;
  // }
  // reset() {
  //   this.n = 0;
  // }
  
  handleCounter(val: string) {
    if (val == "minus") {
      if (this.n > 0) this.n = this.n - 1;
    }
    else if (val == "plus") this.n = this.n + 1;
    else this.n = 0;

  }
}
