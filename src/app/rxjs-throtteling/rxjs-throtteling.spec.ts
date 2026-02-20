import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsThrotteling } from './rxjs-throtteling';

describe('RxjsThrotteling', () => {
  let component: RxjsThrotteling;
  let fixture: ComponentFixture<RxjsThrotteling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsThrotteling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsThrotteling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
