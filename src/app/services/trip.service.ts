import { Injectable } from '@angular/core';

export interface Trip {
  id?: number;
  title: string;
  description: string;
  date: string;
  location: { lat: number; lng: number };
  photos: string[];
}

@Injectable({
  providedIn: 'root',
})
export class TripService {
  private trips: Trip[] = []; // Ensure there's only one declaration

  getTrips(): Trip[] {
    return this.trips;
  }

  getTrip(id: number): Trip | undefined {
    return this.trips.find((trip) => trip.id === id);
  }

  addTrip(trip: Trip): void {
    trip.id = this.trips.length ? Math.max(...this.trips.map(t => t.id || 0)) + 1 : 1;
    this.trips.push(trip);
  }
}
