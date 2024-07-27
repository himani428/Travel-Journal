import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss'],
})
export class TripDetailComponent implements OnInit {
  trip: any;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService
  ) {}

  ngOnInit() {
    // Retrieve the tripId from route parameters
    const tripIdParam = this.route.snapshot.paramMap.get('id');

    if (tripIdParam) {
      // Convert tripId to a number
      const tripId = Number(tripIdParam);

      // Fetch the trip details
      this.trip = this.tripService.getTrip(tripId);
    } else {
      // Handle the case where tripIdParam is null
      console.error('No trip ID provided.');
    }
  }
}
