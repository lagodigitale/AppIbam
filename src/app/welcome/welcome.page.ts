import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public nc: NavController) { }

  ngOnInit() {
  }
  student() {
    this.nc.navigateForward('signup')
  };
  n_student() {
    this.nc.navigateForward('/new-student-sign-up')
  }

}
