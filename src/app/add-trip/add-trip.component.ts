import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss'],
})
export class AddTripComponent {
  trip = {
    title: '',
    description: '',
    date: '',
    location: { lat: 0, lng: 0 },
    photos: [] as string[],
  };

  showMap = false;

  constructor(private cameraService: CameraService, private tripService: TripService) {}

  async addPhotoFromGallery() {
    try {
      const imageData = await this.cameraService.selectPicture();
      this.trip.photos.push(imageData);
    } catch (error) {
      console.error('Error selecting picture:', error);
    }
  }

  async addPhotoFromCamera() {
    try {
      const imageData = await this.cameraService.takePicture();
      this.trip.photos.push(imageData);
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }

  saveTrip() {
    this.tripService.addTrip(this.trip);
    // Optionally reset the form or navigate away
  }

  toggleMap() {
    this.showMap = !this.showMap;
  }

  onLocationSelected(location: { lat: number; lng: number }) {
    this.trip.location = location;
  }
}
