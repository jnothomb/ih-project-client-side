import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';

import { PageAuthIndividualComponent } from './pages/page-auth-individual/page-auth-individual.component';
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

// DEFINITION OF ROUTES

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: PageAuthIndividualComponent },
  { path: 'restaurants', component: PageRestaurantListComponent },

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
    ReservationsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
