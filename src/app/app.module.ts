import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CropperImageComponent } from './cropper-image/cropper-image.component';
import {ImageCropperModule} from "ngx-image-cropper";

@NgModule({
  declarations: [
    AppComponent,
    CropperImageComponent
  ],
  imports: [
    BrowserModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
