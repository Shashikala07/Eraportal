import { NotificationsService } from './../notifications.service';

import { Observable } from 'rxjs';
import { BackendService } from './../../../public/app/backend.service';

import { AuthService } from './../backend.service';

import { RouterModule, Router } from '@angular/router';

import { Component, OnInit,HostBinding } from '@angular/core';
import * as firebase from 'firebase/app'
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore/public_api';


interface Notification{
  aheading:string;
  content:string;
}



@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  ref:AngularFirestoreCollection<Notification>;
  notifications:Observable<Notification[]>;
 

  
 

  constructor(public db:NotificationsService,private afs:AngularFirestore
    ) { }

  ngOnInit() {
    
    this.notifications= this.db.col$('Notifications')
   
    
  }
}
