import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }

  items = ["Phone", "Laptop", "tablet"]
  users = [
    { id: 1, name: 'Sushil' },
    { id: 2, name: 'Aman' }
  ];

}
