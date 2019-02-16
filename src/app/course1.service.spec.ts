import { TestBed } from '@angular/core/testing';

import { Course1Service } from './course1.service';

describe('Course1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Course1Service = TestBed.get(Course1Service);
    expect(service).toBeTruthy();
  });
});
