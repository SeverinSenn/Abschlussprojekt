import { DreieckPage } from './../../../formelhandbuch/underpages/dreieck/dreieck.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage implements OnInit {
  Stunde:string = "";
  Minute:string = "";
  Sekunde:string = "";

 

  StundeInput(NewValue){
    var Stunde = parseFloat(NewValue.detail.value)
    if (this.Stunde === ""){
      this.Minute = ""+(Stunde * 60);
      this.Sekunde = ""+(Stunde * 3600);
    } 
  }
  MinuteInput(NewValue){
    var Minute = parseFloat(NewValue.detail.value)
    if (this.Stunde === ""){
      this.Stunde = ""+(Minute / 60);
      this.Sekunde = ""+(Minute * 60);
    }
    

  }
  SekundeInput(NewValue){
  var Sekunde = parseFloat(NewValue.detail.value)
  if (this.Stunde === ""){
    this.Stunde = ""+(Sekunde / 36000);
    this.Minute = ""+(Sekunde / 60);
  }
  }

  constructor() { }

  ngOnInit() {
  }

}
