import {Punto} from "./05-distancia-entre-dos-puntos";

export class Puntos {
    
    protected c1: number;
    protected c2: number;
 
    constructor(c1: number, c2: number) {
        this.c1 = c1;
        this.c2 = c2;
    }
 
   
}
 
export class Distancia extends Puntos {
 
    constructor(a1: number, a2: number, b1: number, b2: number, c1: number, c2: number) {
        super(a1, a2);
        super(b1, b2);
        
        this.c1 = c1;
        this.c2 = c2;
    }
 
    calcularDistancia(): void {
        const distanciaA = Math.sqrt(Math.pow(this.b1 - this.a1, 2) + Math.pow(this.b2 - this.a2, 2));

        const distanciaB = Math.sqrt(Math.pow(this.b1 - this.c1, 2) + Math.pow(this.b2 - this.c2, 2));

        const distanciaC = Math.sqrt(Math.pow(this.c1 - this.a1, 2) + Math.pow(this.c2 - this.a2, 2));

        console.log(`La distancia entre los puntos (A) y (B) es: ${distanciaA}`);

        console.log(`La distancia entre los puntos (B) y (C) es: ${distanciaB}`);

        console.log(`La distancia entre los puntos (C) y (A) es: ${distanciaC}`);
    }
 
    calcularTriangulo(): boolean {

        const determinante = (this.a1 * (this.b2 - this.c2)) + 
                             (this.b1 * (this.c2 - this.a2)) + 
                             (this.c1 * (this.a2 - this.b2));
    
        return determinante !== 0;
    }

    imprimirTriangulo(): void{
        if (this.calcularTriangulo()) {
            console.log("Los puntos forman un triángulo.");
        } else {
            console.log("Los puntos no forman un triángulo.");
        }
    }
}



 
const distancia1 = new Distancia(3, 4, 7, 1, 7, 1);

distancia1.calcularDistancia();
distancia1.calcularTriangulo();
distancia1.imprimirTriangulo();