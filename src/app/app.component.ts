import { Component, OnInit } from '@angular/core';
import { TimezoneService } from './services/timezoneservice/timezone.service';
import { MessageConstants } from './constants/staticmessage.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title: any;
  selectZone: any;
  selectZoneError: any;
  zones: any;
  timezones: any;
  zoneval: any;
  abbreviation: any;
  dateTime: any;

  constructor(private timezoneserv: TimezoneService) { }

  ngOnInit() {
    this.getZone();
    this.title = MessageConstants['main-title.label'];
    this.selectZone = MessageConstants['timezone-placeholder.label'];
    this.selectZoneError = MessageConstants['timezone-error.label'];
    this.dateTime = MessageConstants['date-time.label'];
  }

  //Function to call api for TIMEZONE dropdown//
  getZone(): any {
    this.timezoneserv.getZones().subscribe(res => {
      this.zones = res;
    },
      err => {
       console.log(err);
      });

  }

  //Function to call api for fetching datetime//
  getTimeZoneLocation(event: any) {
    this.timezones = [];
    if (event) {
      this.zoneval = event.value;
    }
    this.timezoneserv.getTimeZones(this.zoneval).subscribe(res => {
      this.timezones = res.datetime;
      this.abbreviation = res.abbreviation;
    },
      err => {
       console.log(err);
      });
  }
}
