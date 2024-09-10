// product-data.ts
export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  valor: number;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Producto A', quantity: 5, price: 100, valor: 100 },
  { id: 2, name: 'Producto B', quantity: 5, price: 150, valor: 150 },
  { id: 3, name: 'Producto C', quantity: 5, price: 200, valor: 200 },
  // Añade más productos aquí...
];
