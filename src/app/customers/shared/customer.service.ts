import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';


@Injectable()
export class CustomerService {

  customersCollection: AngularFirestoreCollection<Customer>;
  customers: Observable<Customer[]>;

  constructor(private afs: AngularFirestore) {
    this.customersCollection = this.afs.collection('customers');
    // this.customers = this.afs.collection('customers').valueChanges();
    
    // this.customers = this.afs.collection('customers').snapshotChanges().map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Customer;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });

  }

   getCustomers(): Observable<Customer[]> {
    return this.customersCollection.valueChanges();
  }

  newCustomer(customer: Customer): void {
    this.customersCollection.add(customer);
  }

  // newCustomer(customer: Customer): void {
  //   this.afs.collection('customers').doc('customer5').set({
  //       fullName: "Sawan Oudah",
  //       email: "sawsan@gmail.com",
  //     }).then(function() {
  //       console.log("Document successfully written!");
  //     }).catch(function(error) {
  //       console.error("Error writing document: ", error);
  //     });
  //   }

}
