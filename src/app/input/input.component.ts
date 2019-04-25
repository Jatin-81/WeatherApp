import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  city: string
constructor(private ws:GetDataService) { }

ngOnInit() {
}
Forecast(){
this.ws.inputClickedEvent.emit({data:this.city});
} 

}
