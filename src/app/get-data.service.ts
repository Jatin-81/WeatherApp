import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {
  inputClickedEvent = new EventEmitter<{data:string}>()
  constructor(private http : HttpClient) { }

  localWeather(city:string){
    console.log("inside api");

    return this.http.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=1205ddab61fb27539c3e720b5a2d4c27")
  }
}
