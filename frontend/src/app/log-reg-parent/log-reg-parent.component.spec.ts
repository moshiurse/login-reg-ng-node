import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRegParentComponent } from './log-reg-parent.component';

describe('LogRegParentComponent', () => {
  let component: LogRegParentComponent;
  let fixture: ComponentFixture<LogRegParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogRegParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRegParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
