import { TestBed } from '@angular/core/testing';

import { Srt } from './srt';

describe('Srt', () => {
  let service: Srt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Srt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
