import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';



@Component({
  selector: 'app-formelhandbuch',
  templateUrl: './formelhandbuch.page.html',
  styleUrls: ['./formelhandbuch.page.scss'],
})


export class FormelhandbuchPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  goToQuadratPage(){
    this.navCtrl.navigateForward('/quadrat');
  }
  goTolRechteckPage(){
    this.navCtrl.navigateForward('rechteck');
  }
  goToDreieckPage(){
    this.navCtrl.navigateForward('/dreieck');
  }
  goToRhombusPage(){
    this.navCtrl.navigateForward('/rhombus');
  }
  goToParallelogrammPage(){
    this.navCtrl.navigateForward('/parallelogramm');
  }
  goToTrapezPage(){
    this.navCtrl.navigateForward('/trapez');
  }
  goToDrachenPage(){
    this.navCtrl.navigateForward('/drachen');
  }
  goToKreisPage(){
    this.navCtrl.navigateForward('/kreis');
  }
  goToKegelPage(){
    this.navCtrl.navigateForward('/kegel');
  }
  goToPrismarPage(){
    this.navCtrl.navigateForward('/prismar');
  }
  goToZylinderPage(){
    this.navCtrl.navigateForward('/zylinder');
  }
  goToPyramidePage(){
    this.navCtrl.navigateForward('/pyramide');
  }
  goToTetraederPage(){
    this.navCtrl.navigateForward('/tetraeder')
  }
  goToOktaederPage(){
    this.navCtrl.navigateForward('/oktaeder');
  }
  goToKugelPage(){
    this.navCtrl.navigateForward('/kugel');
  }
  goToQuaderPage(){
    this.navCtrl.navigateForward('/quader')
  }
}
