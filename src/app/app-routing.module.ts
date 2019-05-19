import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'formelhandbuch', loadChildren: './formelhandbuch/formelhandbuch.module#FormelhandbuchPageModule' },
  { path: 'volumen', loadChildren: './list/underpages/volumen/volumen.module#VolumenPageModule' },
  { path: 'time', loadChildren: './list/underpages/time/time.module#TimePageModule' },
  { path: 'energie', loadChildren: './list/underpages/energie/energie.module#EnergiePageModule' },
  { path: 'length', loadChildren: './list/underpages/length/length.module#LengthPageModule' },
  { path: 'mass', loadChildren: './list/underpages/mass/mass.module#MassPageModule' },
  { path: 'dreieck', loadChildren: './formelhandbuch/underpages/dreieck/dreieck.module#DreieckPageModule' },
  { path: 'quadrat', loadChildren: './formelhandbuch/underpages/quadrat/quadrat.module#QuadratPageModule' },
  { path: 'rechteck', loadChildren: './formelhandbuch/underpages/rechteck/rechteck.module#RechteckPageModule' },
  { path: 'rhombus', loadChildren: './formelhandbuch/underpages/rhombus/rhombus.module#RhombusPageModule' },
  { path: 'parallelogramm', loadChildren: './formelhandbuch/underpages/parallelogramm/parallelogramm.module#ParallelogrammPageModule' },
  { path: 'trapez', loadChildren: './formelhandbuch/underpages/trapez/trapez.module#TrapezPageModule' },
  { path: 'drachen', loadChildren: './formelhandbuch/underpages/drachen/drachen.module#DrachenPageModule' },
  { path: 'kreis', loadChildren: './formelhandbuch/underpages/kreis/kreis.module#KreisPageModule' },
  { path: 'kegel', loadChildren: './formelhandbuch/underpages/kegel/kegel.module#KegelPageModule' },
  { path: 'quader', loadChildren: './formelhandbuch/underpages/quader/quader.module#QuaderPageModule' },
  { path: 'prismar', loadChildren: './formelhandbuch/underpages/prismar/prismar.module#PrismarPageModule' },
  { path: 'zylinder', loadChildren: './formelhandbuch/underpages/zylinder/zylinder.module#ZylinderPageModule' },
  { path: 'pyramide', loadChildren: './formelhandbuch/underpages/pyramide/pyramide.module#PyramidePageModule' },
  { path: 'tetraeder', loadChildren: './formelhandbuch/underpages/tetraeder/tetraeder.module#TetraederPageModule' },
  { path: 'oktaeder', loadChildren: './formelhandbuch/underpages/oktaeder/oktaeder.module#OktaederPageModule' },
  { path: 'kugel', loadChildren: './formelhandbuch/underpages/kugel/kugel.module#KugelPageModule' },
  { path: 'easter', loadChildren: './list/underpages/easter/easter.module#EasterPageModule' },
  { path: 'snake', loadChildren: './list/underpages/easter/easteregg/snake/snake.module#SnakePageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
