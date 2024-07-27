import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  async selectPicture(): Promise<string> {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl,
    });
    return image.dataUrl as string;
  }

  async takePicture(): Promise<string> {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      resultType: CameraResultType.DataUrl,
    });
    return image.dataUrl as string;
  }
}
