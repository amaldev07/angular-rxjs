import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-switchmap',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-switchmap.html',
  styleUrl: './rxjs-switchmap.scss',
})
export class RxjsSwitchmap implements OnInit {
  ngOnInit(): void {
    of(1, 2)
      .pipe(debounceTime(1000), switchMap((x) => of(x, x * 2, x * 3)))
      .subscribe((x) => alert(x));
  }
}
