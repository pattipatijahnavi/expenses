import { TestBed } from '@angular/core/testing';

import { ExpensesDataService } from './expenses-data.service';

describe('ExpensesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensesDataService = TestBed.get(ExpensesDataService);
    expect(service).toBeTruthy();
  });
});
