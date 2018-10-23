import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrazyDiretivesComponent } from './crazy-diretives.component';

describe('CrazyDiretivesComponent', () => {
  let component: CrazyDiretivesComponent;
  let fixture: ComponentFixture<CrazyDiretivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrazyDiretivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrazyDiretivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
