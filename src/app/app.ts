import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsThrotteling } from './rxjs-throtteling/rxjs-throtteling';
import { RxjsSwitchmap } from './rxjs-switchmap/rxjs-switchmap';
import { GoogleSearchDebouncing } from './google-search-debouncing/google-search-debouncing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RxjsThrotteling, RxjsSwitchmap, GoogleSearchDebouncing],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
