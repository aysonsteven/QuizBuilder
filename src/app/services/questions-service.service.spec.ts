/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionsServiceService } from './questions-service.service';

describe('QuestionsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsServiceService]
    });
  });

  it('should ...', inject([QuestionsServiceService], (service: QuestionsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
