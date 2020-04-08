import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  constructor(private repo: Repository,
            public authService: AuthenticationService) { 
    this.repo.filter.reset();
    this.repo.filter.related = true;
    this.repo.getProducts();
    this.repo.getSuppliers();
    this.repo.getOrders();
  }

  ngOnInit(): void {
  }

}
