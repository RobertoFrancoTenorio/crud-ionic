/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(
    private db: AngularFirestore
    ) { }

  createBooking(post: any) {
    console.log('recibo',post);
    return new Promise<void>((resolve) => {
      //post['f_registro'] = new Date();
      /* post['user_reg'] = this.auth.currentUserId; */
      post['id'] = this.db.createId();
      post['x'] = 'x';
      console.log('VALOR post');
      console.log(post);
      this.db.doc('/curd/appointment/datos/' + post['id']).set(post).then(() => {
        resolve();
      });
    });
  }
}
