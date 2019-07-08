import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActivity } from './activity.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ActivityService {
  constructor(protected http: HttpClient) { }

  getActivitiesByDestinationId(destinationId: string): Observable<IActivity[]> {
		const params = {} as any;
		params['destinationId'] = destinationId;
		return this.http.get<IActivity[]>(`/api/activities`, { params: params });
  }
}
