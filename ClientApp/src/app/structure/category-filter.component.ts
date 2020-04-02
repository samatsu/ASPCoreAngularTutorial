import { Component, OnInit } from '@angular/core';
import { Repository} from '../models/repository';

@Component({
  selector: 'category-filter',
  templateUrl: './category-filter.component.html'
})
export class CategoryFilterComponent implements OnInit {
  public chessCategory = "chess";
  constructor(private repo:Repository) { }

  ngOnInit(): void {
  }
  setCategory(category: string){
    this.repo.filter.category = category;
    this.repo.getProducts();
  }
}
