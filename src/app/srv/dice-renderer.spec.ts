import { TestBed } from '@angular/core/testing';

import { DiceRendererService } from './dice-renderer.service';

describe('DiceRendererService', () => {
  let service: DiceRendererService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceRendererService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
