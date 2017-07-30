import { Component, OnInit } from '@angular/core';
import { EventNotification } from './EventNotification'


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  notify(name:string) {
    let eventNotification = new EventNotification();
    eventNotification.meow(name);
  }
}
