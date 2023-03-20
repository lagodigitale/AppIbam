import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email:any;
  pass:any;

  constructor(public nc:NavController,private router:Router, private auth:AngularFireAuth) { }

  ngOnInit() {
  }
  sign_up() {
    this.nc.navigateForward('/welcome')
  }

  sign_in(){


    this.email=((document.getElementById("email") as HTMLInputElement).value);
    this.pass=((document.getElementById("password") as HTMLInputElement).value); 
   

    this.auth.
    signInWithEmailAndPassword(this.email, this.pass)
      .then((userCredential) => {
        if (userCredential.user){

          this.router.navigateByUrl('/student-home');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
      });

  }

}
