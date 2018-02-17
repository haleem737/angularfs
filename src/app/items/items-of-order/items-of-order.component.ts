import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service'
import { Item } from '../shared/item'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-of-order',
  templateUrl: './items-of-order.component.html',
  styleUrls: ['./items-of-order.component.css']
})
export class ItemsOfOrderComponent implements OnInit {

  showSpinner: boolean = true;

  items: Item[];

  orderNo: number;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.orderNo = parseInt(this.route.snapshot.params.orderId);
    this.itemService.getOrderItems(this.orderNo).subscribe(items => {
      // console.log(items);
      this.items = items;
      this.showSpinner = false;
    });
  }

}