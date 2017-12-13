import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {
  @Input() reservations;

  constructor() { }

  ngOnInit() {
  }

}
