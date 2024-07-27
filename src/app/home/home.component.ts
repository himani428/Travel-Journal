import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TripService, Trip } from '../services/trip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  trips: Trip[] = [];

  constructor(private navCtrl: NavController, private tripService: TripService, private router: Router) {
    this.trips = this.tripService.getTrips();
  }

  addTrip() {
    this.router.navigate(['/add-trip']);
  }

  openTripDetail(trip: any) {
    this.router.navigate([`/trip-detail/${trip.id}`]);
  }
}
