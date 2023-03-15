import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Console } from 'console';


import { url } from 'inspector';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@Component({
  selector: 'app-sujets-test',
  templateUrl: './sujets-test.page.html',
  styleUrls: ['./sujets-test.page.scss'],
})

export class SujetsTestPage implements OnInit {
  openPDF(pdf: any) {
    window.open(pdf.url, '_blank');
  }
  pdfs: any[] = [];


  


  constructor(
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage
  ) { 
    this.getPDFDatabase();
  }
  // ngOnInit() {
  //   this.afDB.list('PDF/').valueChanges().subscribe((data) => {
  //     this.pdfs = data;
  //     console.log(this.pdfs)
  //     this.pdfs.forEach(pdf => { 
  //       console.log(pdf.name); 
  //     })

  //   })
  // }

  ngOnInit(): void {
    //this.getPDFDatabase();
  }


  



getPDFDatabase() {
  // pour récupérer les informations des pdfs
  
   this.afDB.list('PDF/').snapshotChanges(['child_added']).subscribe(pdfs => {
    pdfs.forEach(pdf => {
      console.log('pdf: ' + pdf.payload.exportVal().name);
      this.getPDFStorage(pdf);
    });
   });
}

getPDFStorage(pdf: any) {
  const pdfRef = pdf.payload.exportVal().ref;
  // pour récupérer l'URL des pdfs
  this.afSG.ref(pdfRef).getDownloadURL().subscribe(pdfUrl => {
    console.log(pdfUrl);
    this.pdfs.push({
              name: pdf.payload.exportVal().name,
              url: pdfUrl,
            });
    
  });
}
 

}

