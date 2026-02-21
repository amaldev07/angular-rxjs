import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSearchDebouncing } from './google-search-debouncing';

describe('GoogleSearchDebouncing', () => {
  let component: GoogleSearchDebouncing;
  let fixture: ComponentFixture<GoogleSearchDebouncing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleSearchDebouncing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleSearchDebouncing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
