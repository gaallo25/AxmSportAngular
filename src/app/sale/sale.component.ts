import { Component, AfterViewInit } from '@angular/core';
import { Products} from '../component/table/table-data';
import { ClienteModel } from '../models/cliente.model';
import { ProductoModel } from '../models/producto.model';
import { ProductoServiceService } from '../services/producto/producto-service.service';
//declare var require: any;

@Component({
  templateUrl: './sale.component.html',
})
export class saleComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    console.log("sale");
    this.subtitle = 'This is some text within a card block.';
  }
 
  showClientDetails: boolean = false;
  cliente!: ClienteModel;
  trow: ProductoModel[] = Products;
  valorTotal: number = 0;
  onProductSelected(product: ProductoModel) {
    this.trow.push(product);
  }
  onClienteReceived(cliente: ClienteModel) {
    this.cliente = cliente;
  }
  onClientDetailsChanged(showDetails: boolean) {
    this.showClientDetails = showDetails;
  }
  
  ngAfterViewInit() {}
}
