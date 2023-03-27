import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDatabase, ref, set } from "firebase/database";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  id=0;
  INE:any;
  username:any;
  email:any;
  pass:any;
  constructor(public nc:NavController,private router:Router, private auth:AngularFireAuth,) { }

  ngOnInit() {
  }

  signin(){
    this.nc.navigateForward('/login')
  }

  async sign_up(){
    
    this.INE=((document.getElementById("INE") as HTMLInputElement).value);
    this.username=((document.getElementById("username") as HTMLInputElement).value);
    this.email=((document.getElementById("email") as HTMLInputElement).value);
    this.pass=((document.getElementById("password") as HTMLInputElement).value);
    this.id+=1;


   try{ 
    const db = getDatabase();
    set(ref(db, '/users/'+this.id ),{INE:this.INE,username:this.username,email:this.email,password:this.pass})
    window.alert('ecriture success')
   }catch(e){
    window.alert(e)
     this.router.navigateByUrl('signup')
   }

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
