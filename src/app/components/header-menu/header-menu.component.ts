import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
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

  logout() {
    this.authService.logout().subscribe(
      () => this.router.navigate(['/auth']));
  }
}
