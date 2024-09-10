import { DetalleFactura } from "./detalle-factura.model";

export class Factura {
    facturaId! : number;
    clienteId! : number;
    fecha! : Date;
    valorTotal!:number;
    userId!:number;
    formaPagoId!:number;
    estadoPagoId!:number;
    facturaDetalles: Array<DetalleFactura> = [];
}
