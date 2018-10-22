import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveItComponent } from './love-it.component';

describe('LoveItComponent', () => {
  let component: LoveItComponent;
  let fixture: ComponentFixture<LoveItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
