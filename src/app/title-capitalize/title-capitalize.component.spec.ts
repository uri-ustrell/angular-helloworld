import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCapitalizeComponent } from './title-capitalize.component';

describe('TitleCapitalizeComponent', () => {
  let component: TitleCapitalizeComponent;
  let fixture: ComponentFixture<TitleCapitalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleCapitalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCapitalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
