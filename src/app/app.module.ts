// All imports organised into categories

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { BusinessService } from './services/bus.service';



import { AppComponent } from './app.component';

import { PageAuthIndividualComponent } from './pages/page-auth-individual/page-auth-individual.component';
import { PageRestaurantListComponent } from './pages/page-restaurant-list/page-restaurant-list.component';
import { PageRestaurantPageComponent } from './pages/page-restaurant-page/page-restaurant-page.component';
import { PageConfirmMealsComponent } from './pages/page-confirm-meals/page-confirm-meals.component';
import { PageProfileIndividualComponent } from './pages/page-profile-individual/page-profile-individual.component';
import { PageReservationsComponent } from './pages/page-reservations/page-reservations.component';
import { PageAuthBusinessComponent } from './pages/page-auth-business/page-auth-business.component';

import { PageBusinessHomeComponent } from './pages/page-business-home/page-business-home.component';

import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantMealsListComponent } from './components/restaurant-meals-list/restaurant-meals-list.component';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';


import { BusAuthLoginComponent } from './components/bus-auth-login/bus-auth-login.component';
import { BusAuthSignupComponent } from './components/bus-auth-signup/bus-auth-signup.component';
import { BusinessAppService } from './services/business.service';
import { RestaurantProfileComponent } from './components/restaurant-profile/restaurant-profile.component';
import { RestaurantMealsFormComponent } from './components/restaurant-meals-form/restaurant-meals-form.component';
import { BusProfileComponent } from './components/bus-profile/bus-profile.component';




// DEFINITION OF ROUTES

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: PageAuthIndividualComponent },
  { path: 'restaurants', canActivate: [AuthGuardService], component: PageRestaurantListComponent },
  { path: 'restaurants/:id', canActivate: [AuthGuardService], component: PageRestaurantPageComponent },
  { path: 'restaurants/:id/meals', canActivate: [AuthGuardService], component: PageRestaurantPageComponent },
  { path: 'meal/:id/confirm', canActivate: [AuthGuardService], component: PageConfirmMealsComponent },
  { path: 'edit-profile', canActivate: [AuthGuardService], component: PageProfileIndividualComponent },
  { path: 'reservations', canActivate: [AuthGuardService], component: PageReservationsComponent },
  { path: 'business/auth', component: PageAuthBusinessComponent },
  { path: 'business', canActivate: [AuthGuardService], component: PageBusinessHomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PageAuthIndividualComponent,
    PageRestaurantListComponent,
    PageRestaurantPageComponent,
    PageConfirmMealsComponent,
    PageProfileIndividualComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    RestaurantMealsListComponent,
    ReservationsListComponent,
    HeaderMenuComponent,
    PageReservationsComponent,
    PageAuthBusinessComponent,
    BusAuthLoginComponent,
    BusAuthSignupComponent,
    PageBusinessHomeComponent,
    RestaurantProfileComponent,
    RestaurantMealsFormComponent,
    BusProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AuthService, UserService, AuthGuardService, BusinessService, BusinessAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
