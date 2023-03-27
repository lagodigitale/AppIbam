import { AngularFireModule } from '@angular/fire/compat/'; // pour se connecter à Firebase
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'; // pour manipuler la base de données Firebase
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes ,RouterModule} from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { LoginPage } from './login/login.page';
import { SignupComponent } from '../app/signup/signup.component';



// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig ={
  apiKey: "AIzaSyB3sDMFKLIjDWodUsc7sEDXEh3-WlG7Hzo",
  authDomain: "ionic-app-projects.firebaseapp.com",
  projectId: "ionic-app-projects",
  storageBucket: "ionic-app-projects.appspot.com",
  messagingSenderId: "360862749694",
  appId: "1:360862749694:web:64a26dd40058db410da6af",
  measurementId: "G-T3QZRZT0XB"
  }


// Initialize Firebase



// Initialize Cloud Firestore and get a reference to the service

const routes: Routes = [

  
  { path: 'signup', component: SignupComponent },

];

@NgModule({
  declarations: [AppComponent ,SignupComponent],
  entryComponents: [SignupComponent],
  imports: [AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(routes)
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

  
}

