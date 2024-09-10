import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Products } from './table-data';
import { ProductoModel } from 'src/app/models/producto.model';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
})
export class TableComponent {
  
  @Input() showClientDetails: boolean = false;
  @Input() data: any[]=[];
  @Input() headers: { field: string, alias: string }[] = [];
  quantity: number = 1;

  trow: any[] = [];

 
  ngOnChanges(changes: SimpleChanges):void {
    if(changes['data'] && changes['data'].currentValue)
    this.trow = this.data;
  }
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
