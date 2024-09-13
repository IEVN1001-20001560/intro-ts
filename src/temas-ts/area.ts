//area  cuadrado rectangulo y circulo 

class Figura {
    private tipo: string;
    private lado: number = 0;
    private base: number = 0;
    private altura: number = 0;
    private radio: number = 0;
    constructor(tipo: string, lado?: number, base?: number, altura?: number, radio?: number) {
        this.tipo = tipo;

        if (tipo === "cuadrado" && lado) {
            this.lado = lado;
        } else if (tipo === "rectangulo" && base && altura) {
            this.base = base;
            this.altura = altura;
        } else if (tipo === "circulo" && radio) {
            this.radio = radio;
        }
    }

}
//3metodos