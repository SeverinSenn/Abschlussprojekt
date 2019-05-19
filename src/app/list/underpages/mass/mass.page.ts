import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.page.html',
  styleUrls: ['./mass.page.scss'],
})
export class MassPage implements OnInit {

  Tonne:String = "" ;
  Kilogramm:string = "" ;
  Gramm:string = "";
  Mikrokilogramm:string = "";


   TonneInput(NewValue){
    var tonne = parseFloat(NewValue.detail.value)
    if (this.Tonne === ""){
      this.Kilogramm = ""+(tonne * 1000);
      this.Gramm = ""+(tonne * 1000000);
      this.Mikrokilogramm = ""+(tonne * 1000000000);
    }
   }
   KilogrammInput(NewValue){
    var kg = parseFloat(NewValue.detail.value)
    if (this.Tonne === ""){
      this.Tonne = ""+(kg / 1000);
      this.Gramm = ""+(kg * 1000);
      this.Mikrokilogramm = ""+(kg * 100000);
    }
   }
   GrammInput(NewValue){
    var gramm = parseFloat(NewValue.detail.value)
    if (this.Tonne === ""){
      this.Tonne = ""+(gramm / 1000000);
      this.Kilogramm = ""+(gramm / 1000);
      this.Mikrokilogramm = ""+(gramm * 1000);
    }
   }
   MikrokilogrammInput(NewValue){
    var mkg = parseFloat(NewValue.detail.value)
    if (this.Tonne === ""){
      this.Tonne = ""+(mkg / 1000000000000);
      this.Kilogramm = ""+(mkg /1000000000);
      this.Gramm = ""+(mkg / 1000000);
    }
   }
  constructor() { }

  ngOnInit() {
  }

}
