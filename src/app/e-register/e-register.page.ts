import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-e-register',
  templateUrl: './e-register.page.html',
  styleUrls: ['./e-register.page.scss'],
})
export class ERegisterPage implements OnInit {

  constructor(public nb:NavController) { }

  ngOnInit() {
  }
  sign_in() {
    this.nb.navigateForward('/login');
  }

}
