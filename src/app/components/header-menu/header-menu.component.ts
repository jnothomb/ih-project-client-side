import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private authService: AuthService) {
    // JQuery Code for Menu Toggle
    $(document).ready(function () {
      $('.toggle-nav').click(function (e) {
        $(this).toggleClass('active');
        $('.universal-header-menu ul').toggleClass('active');

        e.preventDefault();
      });
    });
  }

  ngOnInit() {
  }

}
