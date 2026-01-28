import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceViewerComponent } from './dice-viewer.component';

describe('DiceViewerComponent', () => {
  let component: DiceViewerComponent;
  let fixture: ComponentFixture<DiceViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceViewerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
