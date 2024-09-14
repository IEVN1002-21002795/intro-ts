
export class Punto {
    protected a1: number;
    protected a2: number;
    protected b1: number;
    protected b2: number;
 
    constructor(a1: number, a2: number, b1: number, b2: number) {
        this.a1 = a1;
        this.a2 = a2;
        this.b1 = b1;
        this.b2 = b2;
    }
    


    calcularDistancia(): void {
        const distanciaA = Math.sqrt(Math.pow(this.b1 - this.a1, 2) + Math.pow(this.b2 - this.a2, 2));
        console.log(`La distancia entre los puntos (A) y (B)`);
        console.log(` es: ${distanciaA}`);
    }
    
   
}

 
const distancia1 = new Punto(5, 2, 6, 4);
distancia1.calcularDistancia();