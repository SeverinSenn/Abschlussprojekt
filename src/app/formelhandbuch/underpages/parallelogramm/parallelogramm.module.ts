import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParallelogrammPage } from './parallelogramm.page';

const routes: Routes = [
  {
    path: '',
    component: ParallelogrammPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParallelogrammPage]
})
export class ParallelogrammPageModule {}
