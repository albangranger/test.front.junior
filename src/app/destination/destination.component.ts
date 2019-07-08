import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDestination } from './destination.model';
import { IActivity, ActivityService } from '../activity';

@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  destination: IDestination;
  activities: IActivity[];
	get bgImg() { return `url('${this.destination.bg}')`; }
	constructor(
	  protected route: ActivatedRoute,
		protected activityService: ActivityService,
	) {}
	ngOnInit() {
		this.route.data
		.subscribe((data: { destination: IDestination }) => {
		  this.destination = data.destination;
		  this.activityService.getActivitiesByDestinationId(data.destination.id)
			.subscribe(acts => this.activities = acts);
		});
	}
}
