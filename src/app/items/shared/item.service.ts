import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';

@Injectable()
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('items');
    // this.items = this.afs.collection('items', ref => ref.where('customer', '==', 'customer1')).valueChanges();
  }

  getOrderItems(orderNo: number): Observable<Item[]> {
    // return this.itemsCollection.valueChanges();
    return this.items = this.afs.collection('items', ref => ref.where('orderNo', '==', orderNo)).valueChanges();
  }


}