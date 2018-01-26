import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bus-profile',
  templateUrl: './bus-profile.component.html',
  styleUrls: ['./bus-profile.component.css']
})
export class BusProfileComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
