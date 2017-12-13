import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



import { User } from '../../models/user';
import { Reservation } from '../../models/reservation';


@Component({
  selector: 'app-page-reservations',
  templateUrl: './page-reservations.component.html',
  styleUrls: ['./page-reservations.component.css']
})
export class PageReservationsComponent implements OnInit {
  reservations = [];
  totalCosts;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getReservations()
      .subscribe((reservations) => {
        this.reservations = reservations;
      });
  }

}
