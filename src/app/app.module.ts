import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx/index';
import { AppRoutingModule } from './app-routing.module';
import { AddTripComponent } from './add-trip/add-trip.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';

@NgModule({
  declarations: [AppComponent, AddTripComponent, HomeComponent, MapComponent, TripDetailComponent],
  imports: [BrowserModule, RouterModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Camera],
  bootstrap: [AppComponent],
})
export class AppModule {}
