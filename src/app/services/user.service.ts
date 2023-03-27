import { Injectable } from '@angular/core';
import { Firestore,addDoc,collection } from '@angular/fire/firestore';
import { user } from '../models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) { }
  // getPersonnes(): Observable<Personne[]> {
  //   const PersonnesRef = collection(this.firestore, 'users');
  //   return collectionData(PersonnesRef, { idField: 'INE'}) as Observable<Personne[]>;
  // }
  // getPersonnesById(id): Observable<Personne> {
  //   const personneRef = doc(this.firestore, 'users/${id}');
  //   return docData(personneRef, { idField: 'INE' }) as Observable<Personne>;
  // }
  addUsers(
    INE: string,
    username: string,
    email: string,
    password: string,
  ){

    return addDoc(collection(this.firestore, "users"), {      
      INE,
      username,
      email,
      password,
    });
  // deletePersonnes(personne: Personne) {
  //   const personneRef = doc(this.firestore, 'users/${user.INE}');
  //   return deleteDoc(personneRef);
  // }
  // updatePersonnes(personne: Personne) {
  //   const personneRef = doc(this.firestore, 'Personnes/${personne.nom}');
  //   return updateDoc(personneRef, { nom: personne.nom, prenom: personne.prenom, statut:personne.statut });
   }
}







