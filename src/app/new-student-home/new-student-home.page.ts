import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-new-student-home',
  templateUrl: './new-student-home.page.html',
  styleUrls: ['./new-student-home.page.scss'],
})
export class NewStudentHomePage implements OnInit {
  pdfs: any[] = [];
 


  constructor(
    public nc: NavController,
    public lc:LoadingController
    ) { }

  ngOnInit() {
  }
  async infos_ibam() {
    let load = await this.lc.create({
      message:"Patientez Svp",
      duration:300

    })
    await load.present();
    this.nc.navigateForward('/infos-ibam')
 }
  async sujets_test() {
    let load = await this.lc.create({
      message:"Patientez Svp",
      duration:300

    })
    await load.present();
    this.nc.navigateForward('/sujets-test')
 }

}
