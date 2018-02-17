import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrderService } from './orders/shared/order.service';
import { SideNavComponent } from './ui/side-nav/side-nav.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerService } from './customers/shared/customer.service';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ItemsOfOrderComponent } from './items/items-of-order/items-of-order.component';
import { ItemService } from './items/shared/item.service';



@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent,
    SideNavComponent,
    CustomersListComponent,
    NewCustomerComponent,
    LoadingSpinnerComponent,
    ItemsOfOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'customers' , component: CustomersListComponent },
      { path: 'customers/new-customer' , component: NewCustomerComponent },
      { path: 'orders' , component: OrdersListComponent },
      { path: 'orders/:orderId' , component: ItemsOfOrderComponent },
    ]),
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule
  ],
  providers: [CustomerService, OrderService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
