import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-input-data',
  imports: [],
  templateUrl: './input-data.html',
  styleUrl: './input-data.css',
})
export class InputData {
  data = signal("Sushil");

  getValue(val: string) {
    this.data.set(val)
  }

  resetValue() {
    this.data.set("")
  }

}
