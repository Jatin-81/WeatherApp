import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from "@angular/forms";
import { GetDataService } from './get-data.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
