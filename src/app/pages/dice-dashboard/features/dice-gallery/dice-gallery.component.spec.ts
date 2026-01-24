import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceGalleryComponent } from './dice-gallery.component';

describe('DiceGalleryComponent', () => {
  let component: DiceGalleryComponent;
  let fixture: ComponentFixture<DiceGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceGalleryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
