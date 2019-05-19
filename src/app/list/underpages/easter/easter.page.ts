
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-easter',
  templateUrl: './easter.page.html',
  styleUrls: ['./easter.page.scss'],
})
export class EasterPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goTosnakePage(){
    this.navCtrl.navigateForward('/snake')

  }
}
