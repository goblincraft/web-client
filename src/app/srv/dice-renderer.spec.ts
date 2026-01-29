import { TestBed } from '@angular/core/testing';

import { DiceRenderer } from './dice-renderer';

describe('DiceRenderer', () => {
  let service: DiceRenderer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceRenderer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
