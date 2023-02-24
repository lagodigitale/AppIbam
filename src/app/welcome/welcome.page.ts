import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public nc:NavController) { }

  ngOnInit() {
  }
  student() {
  this.nc.navigateForward('/e-register')
  };
  n_student() {
  this.nc.navigateForward('/nb-register')
}
}
