import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Personne {
  INE: string;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private firestore: Firestore) { }
  // getPersonnes(): Observable<Personne[]> {
  //   const PersonnesRef = collection(this.firestore, 'users');
  //   return collectionData(PersonnesRef, { idField: 'INE'}) as Observable<Personne[]>;
  // }
  // getPersonnesById(id): Observable<Personne> {
  //   const personneRef = doc(this.firestore, 'users/${id}');
  //   return docData(personneRef, { idField: 'INE' }) as Observable<Personne>;
  // }
  addPersonnes(personne: Personne) {
    const personneRef = collection(this.firestore, 'Personnes');
    return addDoc(personneRef, personne);
  }
  // deletePersonnes(personne: Personne) {
  //   const personneRef = doc(this.firestore, 'users/${user.INE}');
  //   return deleteDoc(personneRef);
  // }
  // updatePersonnes(personne: Personne) {
  //   const personneRef = doc(this.firestore, 'Personnes/${personne.nom}');
  //   return updateDoc(personneRef, { nom: personne.nom, prenom: personne.prenom, statut:personne.statut });
  // }
}
