import { Injectable } from '@angular/core';
// import {Tweet} from './Tweet';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private tweetCollection: AngularFirestoreCollection<Tweet>;
  // tweets: Observable<Tweet[]>;
  user: User | null = null;

  constructor(private modalService: NgbModal, private http: HttpClient, private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.auth.user.subscribe(user => {
      if (user) {
        this.user = user;
        // this.tweetCollection = afs.collection<Tweet>(`/tweets`, ref => ref.orderBy('date', 'desc').limit(15));
        // this.tweets = this.tweetCollection.valueChanges({idField: 'id'});
      }
    });
  }

  async add(content: string): Promise<void> {
    if (this.user) {
      try {
        // const res = await this.tweetCollection.add({content, author: this.user.email, date: new Date().toISOString()});
        // console.log(res);
      } catch (e) {
        console.log('Window closed', e);
      }
    }
  }

  async delete(id: string): Promise<void> {
    // await this.tweetCollection.doc(id).delete();
  }
}
