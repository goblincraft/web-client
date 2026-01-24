import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceDashboardComponent } from './dice-dashboard.component';

describe('DiceDashboardComponent', () => {
  let component: DiceDashboardComponent;
  let fixture: ComponentFixture<DiceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceDashboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
