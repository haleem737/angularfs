import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomerService } from '../shared/customer.service'
import { Customer } from '../shared/customer'

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  customer: Customer = {
  }
  

  constructor(private customerService: CustomerService) { }

  newCustomer() {
    this.customerService.newCustomer(this.customer);
    this.customer = new Customer(); // reset item
  }


  ngOnInit() {
  }

}
