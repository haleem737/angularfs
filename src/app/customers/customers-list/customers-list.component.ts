import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service'
import { Customer } from '../shared/customer'

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  showSpinner: boolean = true;
  
  customers : Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(customers =>{
      // console.log(customers);
      this.customers = customers;
      this.showSpinner = false;
    });
  }

}
