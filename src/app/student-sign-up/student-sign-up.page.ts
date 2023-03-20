import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


// import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-sign-up',
  templateUrl: './student-sign-up.page.html',
  styleUrls: ['./student-sign-up.page.scss'],
})
export class StudentSignUpPage implements OnInit {


  
  email:any;
  pass:any;
  constructor(public nc:NavController,private router:Router, private auth:AngularFireAuth) { }

  ngOnInit() {
  }

  signin(){
    this.nc.navigateForward('/login')
  }

  sign_up(){
    
    this.email=((document.getElementById("email") as HTMLInputElement).value);
    this.pass=((document.getElementById("password") as HTMLInputElement).value); 

    this.auth.
    createUserWithEmailAndPassword(this.email, this.pass)
      .then((userCredential) => {
      
        if (userCredential.user){

          window.alert("logged in ");
          this.router.navigateByUrl('/login');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage)
        // ..
      });

}
}