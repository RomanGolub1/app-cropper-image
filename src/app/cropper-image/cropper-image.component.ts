import { Component, OnInit } from '@angular/core';
import {ImageCroppedEvent, LoadedImage} from "ngx-image-cropper";

@Component({
  selector: 'app-cropper-image',
  templateUrl: './cropper-image.component.html',
  styleUrls: ['./cropper-image.component.css']
})
export class CropperImageComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  LoadedImage: any = 'assets/lake.jpg';


  constructor() { }

  ngOnInit(): void {
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;

  }

  imageLoaded(): void {

  }

  cropperReady() {

  }

  loadImageFailed() {

  }

}
