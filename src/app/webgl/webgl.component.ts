import { Component, OnInit } from '@angular/core';
import { Scene } from './Scene.js';

@Component({
  selector: 'app-webgl',
  templateUrl: './webgl.component.html',
  styleUrls: ['./webgl.component.css']
})
export class WebglComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    var scene = new Scene('scene', 800, 600)
    scene.tick();
  }
}
