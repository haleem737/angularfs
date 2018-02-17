import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service'
import { Order } from '../shared/order'

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  showSpinner: boolean = true;

  orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => {
      // console.log(orders);
      this.orders = orders;
      this.showSpinner = false;
    });
  }

}
