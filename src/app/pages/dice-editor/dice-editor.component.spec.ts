import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceEditorComponent } from './dice-editor.component';

describe('DiceEditorComponent', () => {
  let component: DiceEditorComponent;
  let fixture: ComponentFixture<DiceEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiceEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceEditorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
