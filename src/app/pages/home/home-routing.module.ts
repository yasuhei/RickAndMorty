import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   data: { bc: 'Home'}
  // }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HomeRoutingModule { }
