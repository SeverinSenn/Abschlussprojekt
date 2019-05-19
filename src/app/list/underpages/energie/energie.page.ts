import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energie',
  templateUrl: './energie.page.html',
  styleUrls: ['./energie.page.scss'],
})
export class EnergiePage implements OnInit {
  millimeterValue:String = "" ;
  cmValue:String ="" ;
  meterValue:String = "";
  KmValue:String = "";
  buttonWasclick:boolean = false;

  Umrechnen(buttonWasclick){
    
   buttonWasclick = true;

  }
  kmInput(NewValue){
    var km = parseFloat(NewValue.detail.value)
    //if(){
    this.meterValue = ""+(km * 1000 );
    this.cmValue = ""+(km * 100000);
    this.millimeterValue = ""+(km * 1000000);

    //}
  }
  meterInput(NewValue){
    var meter = parseFloat(NewValue.detail.value)
    if (this.meterValue === "" ){
    this.KmValue = ""+(meter / 1000);
    this.cmValue = ""+(meter * 100);
    this.millimeterValue = ""+(meter * 10000);
  }
}
  cmInput(NewValue){
    var cm = parseFloat(NewValue.detail.value)
    if ( this.meterValue === ""){
      this.KmValue = ""+(cm / 100000);
    this.meterValue = ""+(cm / 100);
    this.millimeterValue = ""+(cm * 10);
    }
    }
  
  mmInput(NewValue){
    var mm = parseFloat(NewValue.detail.value)
    if (this.meterValue === ""){
      this.KmValue = ""+(mm / 1000000);
     this.meterValue = ""+(mm / 1000);
     this.cmValue = ""+(mm / 10);
  }
}
  constructor() { }

  ngOnInit() {
  }

}
