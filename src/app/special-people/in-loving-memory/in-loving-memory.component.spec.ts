import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InLovingMemoryComponent } from './in-loving-memory.component';

describe('InLovingMemoryComponent', () => {
  let component: InLovingMemoryComponent;
  let fixture: ComponentFixture<InLovingMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InLovingMemoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InLovingMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
