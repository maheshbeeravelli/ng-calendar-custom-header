import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
} from '@angular/material/core';
import { MatCalendar, MatCalendarView } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
})
export class CalendarHeaderComponent<D> implements OnInit {
  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    console.log(this._dateAdapter);
  }
  get monthYearLabel() {
    console.log(this._dateFormats);
    return this._dateAdapter
      .format(this._calendar.activeDate, { year: 'numeric', month: 'short' })
      .toLocaleUpperCase();
  }
  get yearLabel() {
    console.log(this._dateFormats);
    return this._dateAdapter
      .format(this._calendar.activeDate, { year: 'numeric' })
      .toLocaleUpperCase();
  }
  changeView(view: MatCalendarView) {
    this._calendar.currentView = view;
  }
}
