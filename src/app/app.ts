import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsThrotteling } from "./rxjs-throtteling/rxjs-throtteling";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RxjsThrotteling],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
