import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  reservations = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getReservations()
      .subscribe((reservations) => {
        this.reservations = reservations;
      });
  }

}
