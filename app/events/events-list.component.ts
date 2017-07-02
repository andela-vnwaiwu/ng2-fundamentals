import {Component,  OnInit} from '@angular/core';
import { EventService } from './shared/event.sevice';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
  template: `
    <div>
      <h3>Angular 2 upcoming events</h3>
      <hr/>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events" >
          <event-thumbnail #thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Foo</button>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events:IEvent[];
  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
    
  }

  ngOnInit() {
     this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(name) {
    this.toastr.success(name);
  }
}