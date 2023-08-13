import { Component } from '@angular/core';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  calendarHeader = CalendarHeaderComponent;
}
