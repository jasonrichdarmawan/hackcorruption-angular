import { TestBed } from '@angular/core/testing';

import { GetCasesFirestoreDataSourceService } from './get-cases-firestore-data-source.service';

describe('GetCasesFirestoreDataSourceService', () => {
  let service: GetCasesFirestoreDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCasesFirestoreDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
