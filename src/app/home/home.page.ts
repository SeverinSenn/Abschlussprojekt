import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { get } from 'https';
import { getCheckNoChangesMode } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  JavaUrl: ['rechner.page.js'],
})
export class HomePage {
  displayNumber:string = "0";
  backingNumber:string = "";
  operator:string = "";

  operatorPlusColor:string = "dark";
  operatorMinusColor:string = "dark";
  operatorMultiplicationColor:string = "dark";
  operatorDivisionColor:string = "dark";

  


  numberPress(number:string){
    if (this.operator !== "" && this.backingNumber === ""){
      this.backingNumber = this.displayNumber;
      this.displayNumber = "0";
    }                                                    
      
      
    
    //Verhindert mehr als einen Punkt
    if(number === "." &&  this.displayNumber.indexOf(".") >= 0){
      return;
    }

    if(this.displayNumber === "0")
    {
      this.displayNumber = "";
    }
    this.displayNumber = this.displayNumber.concat(number);

    if (this.displayNumber === "."){
      this.displayNumber = "0.";
    }
  }

  delPress(){
    var length = this.displayNumber.length;
    this.displayNumber = this.displayNumber.substring(0,length-1);
    if(this.displayNumber.length == 0){
      this.displayNumber = "0";
    }
  }
  
 
   operatorPress(operator:string){
    if(this.operator !== ""){
      this.equalPress();
    }


    this.operator = operator;
  }



  equalPress(){
    if(this.backingNumber === "" || this.operator === "" ){
      return;
    }
    var firstNumber = parseFloat(this.displayNumber);
    var secondNumber = parseFloat(this.backingNumber);
    switch(this.operator){
      case "+":
      this.displayNumber = ""+(firstNumber + secondNumber); 
      break;
      case "-":
      this.displayNumber = ""+(secondNumber - firstNumber); 
      break;
      case "*":
      this.displayNumber = ""+(firstNumber * secondNumber);
      break;
      case "/":
      this.displayNumber = ""+(firstNumber / secondNumber);
      break;  
    }
    this.backingNumber = "";
    this.operator = "";
  }

  /*
      if(number == "-"||number == "0"){
        this.displayNumber = "0";
      }else if(number == "1"){
        this.displayNumber = "1";
      }else{
        this.displayNumber = "";
      }
  
      switch(number){
        case "-":
        case "0":
        this.displayNumber = "0";
        break;
        case "1":
        this.displayNumber = "1";
        break;
        default:
        this.displayNumber = "";
        break;
      }*/
}
 //Fast calculatig
  /*
  FastCalculating(){
    if(this.displayNumber == "any" && this.operator == "any" && this.backingNumber == "any" && this.operator == "any" ){
       (operator:string){
        this.operator = operator;
        switch(this.operator){
          case "+":
          break;
          case "-":
          break;
          case "*":
          break;
          case "/":
          break;  
        }
      }
    }
}*//*
  operatorPress(operator:string){
    this.operator = operator;
    switch(this.operator){
      case "+":
      break;
      case "-":
      break;
      case "*":
      break;
      case "/":
      break;  
    }
  }




 /* equalPress(){
    if(this.backingNumber === "" || this.operator === "" ){
      return
    }
    var firstNumber = parseFloat(this.displayNumber);
    var secondNumber = parseFloat(this.backingNumber);

    var storageNumber1 = parseFloat(this.storageNumber1);
    var storageNumber2  = parseFloat(this.storageNumber2);
    var storageNumber3  = parseFloat(this.storageNumber3);
    var storageNumber4  = parseFloat(this.storageNumber4);
    var storageNumber5  = parseFloat(this.storageNumber5);
    var storageNumber6  = parseFloat(this.storageNumber6);
    var storageNumber7  = parseFloat(this.storageNumber7);
    var storageNumber8  = parseFloat(this.storageNumber8);
    var storageNumber9 = parseFloat(this.storageNumber9);

    var operator = parseFloat(this.operator);
    var operator = parseFloat(this.operator1);
    var operator = parseFloat(this.operator2);
    var operator = parseFloat(this.operator3);
    var operator = parseFloat(this.operator4);
    var operator = parseFloat(this.operator5);
    var operator = parseFloat(this.operator6);
    var operator = parseFloat(this.operator7);
    var operator = parseFloat(this.operator8);
    var operator = parseFloat(this.operator9);
    var operator = parseFloat(this.operator10);


    this.displayNumber = ""+(firstNumber + operator + secondNumber )
  }*/