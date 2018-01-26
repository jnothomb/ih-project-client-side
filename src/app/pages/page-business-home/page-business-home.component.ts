import { Component, OnInit } from '@angular/core';
import { BusinessAppService } from '../../services/business.service';
import { Router } from '@angular/router';



import { Meal } from '../../models/meal';
import { Reservation } from '../../models/reservation';
import { User } from '../../models/user';


@Component({
  selector: 'app-page-business-home',
  templateUrl: './page-business-home.component.html',
  styleUrls: ['./page-business-home.component.css']
})


export class PageBusinessHomeComponent implements OnInit {

  user;


  constructor(private businessService: BusinessAppService) { }

  ngOnInit() {
    this.businessService.getUserProfile().subscribe((user) => {
      this.user = user;
    });
  }

}
