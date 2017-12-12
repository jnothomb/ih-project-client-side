import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  // JQuery Code for Menu Toggle
  constructor() {
    $(document).ready(function () {
      $('.toggle-nav').click(function (e) {
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');

        e.preventDefault();
      });
    });
  }

  ngOnInit() {
  }

}
