import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { EmailService } from './email.service'; // Import the email service

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule
    BrowserAnimationsModule,
    CardDisplayComponent,
    ControlPanelComponent
  ],
  providers: [EmailService], // Add the email service
  bootstrap: [AppComponent]
})
export class AppModule { }
