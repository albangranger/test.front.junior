import { NgModule } from '@angular/core';
import { ActivityService } from './activity.service';
import { ActivityComponent } from './activity.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api';

@NgModule({
  imports: [
		CommonModule,
		HttpClientModule,
		ApiModule,
  ],
  providers: [
		ActivityService,
  ],
  declarations: [
		ActivityComponent,
  ],
  exports: [
		ActivityComponent,
  ]
})
export class ActivityModule { }
