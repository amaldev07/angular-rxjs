import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map, filter, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-google-search-debouncing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './google-search-debouncing.html',
  styleUrl: './google-search-debouncing.scss',
})
export class GoogleSearchDebouncing {
  searchControl = new FormControl('');
  results: any[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {
    this.searchControl.valueChanges.pipe(
      map(v => (v ?? '').toString().trim()),
      filter(v => v.length > 2),
      debounceTime(300),
      distinctUntilChanged(),
      tap((v) => {
        this.loading = true;
      }),
      switchMap((v) => this.http.get(`https://api.datamuse.com/sug?s=${v}`))
    ).subscribe((data: any) => {
      this.loading = false;
      this.results = data;
    });
  }
}
// 