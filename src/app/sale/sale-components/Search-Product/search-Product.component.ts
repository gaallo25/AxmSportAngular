import { Component, EventEmitter, Input, Output } from '@angular/core';

import {ProductoServiceService} from 'src/app/services/producto/producto-service.service';
import { ProductoModel } from 'src/app/models/producto.model';
@Component({
  selector: 'app-table-b',
  templateUrl: './search-Product.component.html',
  styleUrls: ['./search-Product.component.scss'],
})
export class SearchProductComponent {
  @Input() showClientDetails: boolean = false;
  productName: string = '';
  allProducts: ProductoModel[] = [];
  productSuggestions: ProductoModel[] = []; // Array para almacenar sugerencias de productos

  @Output() productSelected = new EventEmitter<ProductoModel>();

  constructor(private productoService : ProductoServiceService) {}

  ngOnInit(): void {
    this.productoService.searchProducts().subscribe({
      next: (products: ProductoModel[]) => {
        this.allProducts = products;
      },
      error: (error) => {
        console.error('Error al buscar productos:', error);
        this.productSuggestions = [];
      }
    });
  }

  onSearchProduct() {
    if (this.productName.length > 2) {
      // Filtrar los productos localmente usando la lista en memoria
      this.productSuggestions = this.allProducts.filter(product =>
        product.Nombre.toLowerCase().includes(this.productName.toLowerCase())
      );
      
    } else {
      this.productSuggestions = []; // Limpiar sugerencias si el input es menor a 3 caracteres
    }
  }

  onSelectProduct(product: ProductoModel) {
    console.log("producto selecionnado", product)
    const selectedProduct: ProductoModel = {
      ProductoId: product.ProductoId,
      Nombre: product.Nombre, // Default quantity, can be changed later
      PrecioVenta: product.PrecioVenta,
      CategoriaId: product.CategoriaId,
      ProveedorId: product.ProveedorId,
      Descripcion: product.Descripcion,
      PrecioCosto: product.PrecioCosto,
      PrecioEditable: false,
      Creado: new Date(),
    };
    this.productSelected.emit(selectedProduct);
    this.productSuggestions = [];
    this.productName = '';
  }
}
