import { Component, OnInit, Input } from '@angular/core';
import { Synth } from './Synth';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})

export class AudioComponent implements OnInit {
  synth: Synth;
  @Input() song: Array<string>;
  oscillator: string;

  constructor() {

  }

  ngOnInit() {
    this.synth = new Synth();
    this.song = ['G3', 'A#3/Bb3', 'D#4/Eb4', 'G3', 'A#3/Bb3', 'G#3/Ab3', 'G3'];
    this.oscillator = 'sine';
  }

  play() {
    this.synth.playSong(this.song, this.oscillator);
  }

  add(note) {
    console.log(`note ${note}`);
    this.song.push(note);
  }

  getSong() {
    console.log("getting song: " + this.song);
    return this.song;
  }

  clear() {
    this.song = [];
  }

  changeOscillator(osc) {
    this.oscillator = osc;
  }
}
