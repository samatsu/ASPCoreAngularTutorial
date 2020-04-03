import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';
import { NavigationService } from '../models/navigation.service';

@Component({
  selector: 'store-categoryfilter',
  templateUrl: './category-filter.component.html'
})
export class CategoryFilterComponent implements OnInit {

  constructor(public service: NavigationService) { }

  ngOnInit(): void {
  }

}
