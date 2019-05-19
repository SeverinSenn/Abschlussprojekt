import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


import { FormelhandbuchPage } from './formelhandbuch.page' ;
import { from } from 'rxjs';


const routes: Routes = [
  
  {
    path: '',
    component: FormelhandbuchPage
  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormelhandbuchPage]
})
export class FormelhandbuchPageModule {}
