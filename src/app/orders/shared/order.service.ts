import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Order } from './order';

@Injectable()
export class OrderService {
  
  ordersCollection: AngularFirestoreCollection<Order>;
  orders: Observable<Order[]>;

  constructor(private afs: AngularFirestore) {
    this.ordersCollection = this.afs.collection('orders');
    this.orders = this.afs.collection('orders', ref => ref.where('customer', '==', 'customer1')).valueChanges();
  }

  getOrders(): Observable<Order[]> {
    return this.ordersCollection.valueChanges();
  }
   
}