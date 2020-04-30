import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument ,AngularFirestoreCollection, docChanges} from '@angular/fire/firestore';


type CollectionPredicate<T> =string | AngularFirestoreCollection<T>;
type DocPredicate<T> =string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  afs: any;
 

  
  constructor() { }
      col<T> (ref :CollectionPredicate<T>,queryFn?: AngularFirestoreCollection<T>){
        return typeof ref=='string'? this.afs.collection(ref,queryFn):ref
      }
      
      col$<T>(ref: CollectionPredicate<T>,queryFn?):Observable<T[]>{
        return this.col(ref,queryFn).snapshotChanges().map(doc=>{
          return doc.map(a=> a.payload.doc.data())as T[]
        })
      }
     

}
      

