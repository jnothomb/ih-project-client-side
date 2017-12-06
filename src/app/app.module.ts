import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageAuthIndividualComponent } from './pages/page-auth-individual/page-auth-individual.component';
import { PageAuthRestaurantComponent } from './pages/page-auth-restaurant/page-auth-restaurant.component';
import { PageRestaurantListComponent } from './pages/page-restaurant-list/page-restaurant-list.component';
import { PageRestaurantPageComponent } from './pages/page-restaurant-page/page-restaurant-page.component';
import { PageConfirmMealsComponent } from './pages/page-confirm-meals/page-confirm-meals.component';
import { PageProfileIndividualComponent } from './pages/page-profile-individual/page-profile-individual.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantMealsListComponent } from './components/restaurant-meals-list/restaurant-meals-list.component';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PageAuthIndividualComponent,
    PageAuthRestaurantComponent,
    PageRestaurantListComponent,
    PageRestaurantPageComponent,
    PageConfirmMealsComponent,
    PageProfileIndividualComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    RestaurantMealsListComponent,
    ReservationsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
