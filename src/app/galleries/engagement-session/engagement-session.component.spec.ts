import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementSessionComponent } from './engagement-session.component';

describe('EngagementSessionComponent', () => {
  let component: EngagementSessionComponent;
  let fixture: ComponentFixture<EngagementSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
