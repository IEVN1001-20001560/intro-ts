export class Area {
    protected anchoRectangulo: number;
    protected ladoCuadrado: number;
    protected radioCirculo: number;
  
    constructor(anchoRectangulo: number, ladoCuadrado: number, radioCirculo: number) {
      this.anchoRectangulo = anchoRectangulo;
      this.ladoCuadrado = ladoCuadrado;
      this.radioCirculo = radioCirculo;
    }
  
    public areaRectangulo(): number {
      return this.anchoRectangulo * this.ladoCuadrado;
    }
  
    public areaCuadrado(): number {
      return this.ladoCuadrado * this.ladoCuadrado;
    }
  
    public areaCirculo(): number {
      return Math.PI * Math.pow(this.radioCirculo, 2);
    }
  
    public mostrarAreas(): void {
      console.log(`
      El resultado del area de las figuras es:
      - Rectsngulo: ${this.areaRectangulo()}
      - Cuadrado: ${this.areaCuadrado()}
      - Circulo: ${this.areaCirculo()}
      `);
    }
  }
  
  const formas = new Area(10, 6, 3);
  formas.mostrarAreas();
  