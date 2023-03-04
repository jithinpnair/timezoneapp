import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule}  from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientService } from './services/httpclientservice/http-client.service';
import { TimezoneService } from './services/timezoneservice/timezone.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientService, TimezoneService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
