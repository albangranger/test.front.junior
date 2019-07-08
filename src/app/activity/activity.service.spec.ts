import { TestBed, inject } from '@angular/core/testing';

import { louvres, eiffel, terrasse, quais } from './activity.mock.spec';
import { ActivityService } from './activity.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ActivityService', () => {
  let service: ActivityService;
  let httpCtrl: HttpTestingController;
  beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				ActivityService,
			]
		});
		httpCtrl = TestBed.get(HttpTestingController);
  });
  beforeEach(inject([ActivityService], (_service: ActivityService) => {
		service = _service;
  }));
  it('should be created', () => {
		expect(service).toBeTruthy();
  });

  describe('getActivitiesByDestinationId', () => {
		it('should call http.get', () => {
			const destinationId = '2';

			service.getActivitiesByDestinationId(destinationId).subscribe(d => d);

		  const req = httpCtrl.expectOne(`/api/activities?destinationId=${destinationId}`);
		  expect(req.request.method).toEqual('GET');
		  const results = [louvres, eiffel, terrasse, quais];
			req.flush(results);
		});
		it('should return the result unscathed', () => {
			const destinationId = '2';

		  const results = [louvres, eiffel, terrasse, quais];
			service.getActivitiesByDestinationId(destinationId).subscribe(d => {
			  expect(d).toBe(results);
			});

		  const req = httpCtrl.expectOne(`/api/activities?destinationId=${destinationId}`);
		  req.flush(results);
		});
  });
});

