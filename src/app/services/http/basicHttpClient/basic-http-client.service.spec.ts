import { TestBed } from '@angular/core/testing';

import { BasicHttpClientService } from './basic-http-client.service';

describe('BasicHttpClientService', () => {
  let service: BasicHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
