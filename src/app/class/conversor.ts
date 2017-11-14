export class Conversor {

    private millas: number;
    private kilometros: number;

    constructor() {
        this.millas = 0;
        this.kilometros = 0;
    }

    convertir() {
        this.kilometros = this.millas * 1.60934;
    }
}
