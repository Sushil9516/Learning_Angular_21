import { Component, effect } from '@angular/core';
import { signal } from '@angular/core';
import { runEffect } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  count = signal(0);
  data = 0;
  Increment() {
    this.count.set(this.count() + 1);
    this.data++;
  }
  constructor() {
    effect(() => {
      console.log(this.data);
      // console.log(this.count());
    });
  }

  // items = ['Phone', 'Laptop', 'tablet'];
  // users = [
  //   { id: 1, name: 'Sushil' },
  //   { id: 2, name: 'Aman' },
  // ];
}
