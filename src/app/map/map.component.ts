import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 39.9612;
  lng: number = -82.9988;

  constructor() { }

  ngOnInit() {
  }

}
