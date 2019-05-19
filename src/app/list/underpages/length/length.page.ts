import { Component, OnInit, Input } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';
import { COMMENT_MARKER } from '@angular/core/src/render3/interfaces/i18n';
import { NumberSymbol } from '@angular/common';
import { asTextData } from '@angular/core/src/view';
import { ENOENT } from 'constants';
import {Decimal} from 'decimal.js';

@Component({
  selector: 'app-length',
  templateUrl: './length.page.html',
  styleUrls: ['./length.page.scss'],
})
export class LengthPage implements OnInit {


  millimeterValue:String = "" ;
  cmValue:String ="" ;
  meterValue:String = "";
  KmValue:String = "";

  millimeterValuePlaceholder:String = "" ;
  cmValuePlaceholder:String ="" ;
  meterValuePlaceholder:String = "";
  KmValuePlaceholder:String = "";

  buttonWasclick:boolean = false;
  Reset(){
    this.millimeterValue = "";
    this.cmValue = "";
    this.meterValue = "";
    this.KmValue = "";
  }
   /* 
    function Umrechnen(){
      this.KmValue = ""+(this.millimeterValue * 1000);
      this.meterValue = ""+(this.KmValue / 100);
      this.cmValue = ""+(this.meterValue / 100);
      this.millimeterValue =  ""+(this.cmValue / 10 );
    }
/*
  }/*
  Umrechnen(){ 
      function kmInput(NewValue){
        var km = parseFloat(NewValue.detail.value)   
      this.meterValue = ""+(km * 1000 );
      this.cmValue = ""+(km * 100000);
      this.millimeterValue = ""+(km * 1000000);
      
    }
     function meterInput(newValue){ 
        var meter = parseFloat(newValue.detail.value)
      this.KmValue = ""+(meter / 1000);
      this.cmValue = ""+(meter * 100);
      this.millimeterValue = ""+(meter * 10000);
      }       
      function cmInput(newValue){
        var cm = parseFloat(newValue.detail.value)
        this.KmValue = ""+(cm / 100000);
        this.meterValue = ""+(cm / 100);
        this.millimeterValue = ""+(cm * 10);
      }
      
     function mmInput(newValue){
        var mm = parseFloat(newValue.detail.value)
      this.KmValue = ""+(mm / 1000000);
      this.meterValue = ""+(mm / 1000);
      this.cmValue = ""+(mm / 10);
      }
    
    }*/
  
  
    kmInput(NewValue){
      if(NewValue.detail.value===""){
        return;
      }
    var km = new Decimal(NewValue.detail.value)
    if(km.isNaN()){
      return;
    }
    this.meterValuePlaceholder = ""+(km.mul(1000) );
    this.cmValuePlaceholder = ""+(km.mul(100000) );
    this.millimeterValuePlaceholder = ""+(km.mul(1000000) );
    
    this.meterValue = "";
    this.cmValue = "";
    this.millimeterValue = "";
      
    }
    meterInput(newValue){ 
      if(newValue.detail.value===""){
        return;
      }
    var meter = new Decimal(newValue.detail.value)
    if(meter.isNaN()){
      return;
    }
    this.KmValuePlaceholder = ""+(meter.dividedBy(1000));
    this.cmValuePlaceholder = ""+(meter.dividedBy(100));
    this.millimeterValuePlaceholder = ""+(meter.dividedBy(10000));
    
    this.KmValue = "";
    this.cmValue = "";
    this.millimeterValue = "";
    

    }
    cmInput(newValue){ 
      if(newValue.detail.value===""){
        return;
      }
    var cm = new Decimal(newValue.detail.value)
    if(cm.isNaN()){
      return;
    }
    this.KmValuePlaceholder = ""+(cm.dividedBy(100000) );
    this.meterValuePlaceholder = ""+(cm.dividedBy(100) );
    this.millimeterValuePlaceholder = ""+(cm.mul(10) );
    
    this.KmValue = "";
    this.meterValue = "";
    this.millimeterValue = "";
  }

  mmInput(newValue){ 
    if(newValue.detail.value===""){
      return;
    }
  var mm = new Decimal(newValue.detail.value)
  if(mm.isNaN()){
    return;
  }
     this.KmValuePlaceholder = ""+(mm.dividedBy(1000000) );
     this.meterValuePlaceholder = ""+(mm.dividedBy(1000) );
     this.cmValuePlaceholder = ""+(mm.dividedBy(10));
  
  this.KmValue = "";
  this.meterValue = "";
  this.cmValue = "";
}
/*
   mmInput(newValue){
    var mm = parseFloat(newValue.detail.value)
    
    this.KmValue = ""+(mm / 1000000);
     this.meterValue = ""+(mm / 1000);
     this.cmValue = ""+(mm / 10);
    

    }  
  */

  constructor() { }

  ngOnInit() {

  }

}


