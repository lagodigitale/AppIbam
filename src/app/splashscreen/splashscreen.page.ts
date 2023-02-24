import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(public nc:NavController) { }

  ngOnInit() {
  }
  skip() {
  this.nc.navigateForward('/welcome')
  };
  next() {
  this.nc.navigateForward('/welcome')
}
  
}
