//prisma,priamide,cilindro 

import { Area } from "./area";

class Volumetria extends Area {
  alturaFigura: number;
  volumenRectangular: number = 0;
  volumenCuadrado: number = 0;
  volumenCircular: number = 0;
  constructor(largoRect: number, ladoCuadrado: number, radioCirculo: number, alturaFigura: number) {
    super(largoRect, ladoCuadrado, radioCirculo);
    this.alturaFigura = alturaFigura;
  }
  public calcularVolumenes(): void {
    this.volumenRectangular = this.areaRectangulo() * this.alturaFigura;
    this.volumenCuadrado = (this.areaCuadrado() * this.alturaFigura) / 3;
    this.volumenCircular = this.areaCirculo() * this.alturaFigura;
    console.log(`
    El resultado del area de las figuras es:
    - Prisma: ${this.volumenRectangular}
    - Piramide: ${this.volumenCuadrado}
    - Cilindro: ${this.volumenCircular}
    `);
  }
}
const volumenes = new Volumetria(10, 6, 3, 8);
volumenes.calcularVolumenes();
