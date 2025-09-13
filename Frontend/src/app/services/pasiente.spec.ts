import { TestBed } from '@angular/core/testing';

import { Pasiente } from './pasiente';

describe('Pasiente', () => {
  let service: Pasiente;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pasiente);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
