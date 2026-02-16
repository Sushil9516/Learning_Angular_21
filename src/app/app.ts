import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from "./signup/signup";
import { Counter } from './counter/counter';
import { Toggle } from './toggle/toggle';
import { Test } from './test/test';
import { InputData } from './input-data/input-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputData],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_21');
  name = "Sushil Kumar"
}
