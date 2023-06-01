class Statisztika {
    lista;
    constructor(lista) {
        this.lista = lista;
    }
    orszagokSzerintAutokSzama(adat) {
        let db = 0;
        this.lista.forEach((element) => {
            if (element.orszag === adat) {
                db++;
            }
        });
        return db;
    }
    legregebbiAuto() {
        let minHely = 0;
        let minErtek=this.lista[minHely]
        this.lista.forEach((element,index) => {
            if(element<minErtek){
                 minHely = index;
                 minErtek=this.lista[minHely]
            }
        });
        return minHely
    }
    orszagokSzerintLegregebbiAuto(adat) {
        let minHely = 0;
        let minErtek=this.lista[minHely]
        this.lista.forEach((element,index) => {
            if(element.orszag===adat && element<minErtek){
                 minHely = index;
                 minErtek=this.lista[minHely]
            }
        });
        return minHely
    }
}
export default Statisztika;
