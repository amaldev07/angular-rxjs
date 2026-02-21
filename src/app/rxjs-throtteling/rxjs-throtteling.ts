import { Component, signal } from '@angular/core';
import { fromEvent, throttleTime, map, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs-throtteling',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-throtteling.html',
  styleUrl: './rxjs-throtteling.scss',
})
export class RxjsThrotteling {
  protected readonly title = signal('angular-rxjs');
  loading = false;

  ngOnInit() {
    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(200),
        map(() => window.innerHeight + window.scrollY),
        map((pos) => pos >= document.documentElement.scrollHeight - 200), // 200px before bottom
        filter((isNearBottom) => isNearBottom),
        filter(() => !this.loading)
      )
      .subscribe(() => {
        this.loading = true;
        console.log('Load next page');

        // simulate API
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  }
}
