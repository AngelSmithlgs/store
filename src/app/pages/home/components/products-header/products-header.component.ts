import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  itemsShowCount = 12;
  sort = 'desc';

  constructor() {}

  onItemsUpdated(count: number): void {
  
    this.itemsShowCount = count;
  }

  onSortUpdated(newSort: string): void {
   
  }

   onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
   }

}