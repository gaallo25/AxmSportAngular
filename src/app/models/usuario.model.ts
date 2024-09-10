import { Factura } from "./factura.model";

export class Usuario {
    userId! : number;
    nombre! : string;
    fireccion! : string;
    telefono!:string;
    correo!:string;
    estado!:number;
    creado!:Date;
    rolId!:number;
    numeroDocumento!:string;
    facturas: Array<Factura> = [];
}
