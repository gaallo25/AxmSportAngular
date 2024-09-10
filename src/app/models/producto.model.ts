export class ProductoModel {
        ProductoId! : number;
        Nombre! : string;
        CategoriaId!:number;
        ProveedorId! : number;
        Descripcion!:string;
        PrecioCosto!:number;
        PrecioVenta!:number;
        PrecioEditable!:boolean;
        Creado!:Date;
}
