import { TestBed } from '@angular/core/testing';

import { todoService } from './todo.service';

describe('todoService', () => {
  let service: todoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(todoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
