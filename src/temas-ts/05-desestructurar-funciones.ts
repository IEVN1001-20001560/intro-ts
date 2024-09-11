export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:"Telefono N",
    precio:1000
}
const tablet:Producto={
    desc:"Tablet N",
    precio:500
}
function calcularIVA( productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}
const articulos=[telefono,tablet];
const iva1=calcularIVA(articulos)
console.log(iva1)

export function calcularIVA2(productos:Producto[]):[number,number]{
 
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total, total*0.16]
}
 
const articulos2=[telefono, tablet]
const[total,iva2]=calcularIVA2(articulos2)
console.timeLog(`Total: ${total}`)
console.timeLog(`iva: ${iva2}`)